'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import { prepareWithSegments, layoutNextLine } from '@chenglou/pretext'

export type Obstacle = {
  x: number
  y: number
  width: number
  height: number
  side: 'left' | 'right'
}

type Line = { text: string; x: number; y: number }

type Props = {
  text: string
  font: string        // CSS font shorthand, e.g. "400 16px 'Space Grotesk'"
  lineHeight: number  // px — must match the CSS font size * leading you'll apply
  getObstacles?: (containerWidth: number) => Obstacle[]
  className?: string
  lineClassName?: string
}

export default function FlowText({ text, font, lineHeight, getObstacles, className = '', lineClassName = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  // Use a ref so the callback below doesn't need getObstacles in its deps,
  // which would cause infinite loops if callers pass an inline function.
  const getObstaclesRef = useRef(getObstacles)
  getObstaclesRef.current = getObstacles
  const callIdRef = useRef(0)

  const [lines, setLines] = useState<Line[]>([])
  const [totalHeight, setTotalHeight] = useState(0)

  const compute = useCallback(async () => {
    const callId = ++callIdRef.current
    const el = containerRef.current
    if (!el || el.offsetWidth === 0) return

    await document.fonts.load(font)
    if (callId !== callIdRef.current) return // a newer call has started, bail

    const containerWidth = el.offsetWidth
    const obstacles = getObstaclesRef.current?.(containerWidth) ?? []
    const prepared = prepareWithSegments(text, font)

    const result: Line[] = []
    let cursor = { segmentIndex: 0, graphemeIndex: 0 }
    let y = 0

    while (y < 10000) {
      let xStart = 0
      let xEnd = containerWidth
      const lineBottom = y + lineHeight

      for (const obs of obstacles) {
        if (obs.y < lineBottom && obs.y + obs.height > y) {
          if (obs.side === 'right') xEnd = Math.min(xEnd, obs.x)
          else xStart = Math.max(xStart, obs.x + obs.width)
        }
      }

      const availWidth = Math.max(0, xEnd - xStart)
      if (availWidth < 20) { y += lineHeight; continue }

      const line = layoutNextLine(prepared, cursor, availWidth)
      if (!line) break

      result.push({ text: line.text, x: xStart, y })
      cursor = line.end
      y += lineHeight
    }

    setLines(result)
    setTotalHeight(y)
  }, [text, font, lineHeight])

  useEffect(() => {
    compute()
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    return () => ro.disconnect()
  }, [compute])

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative', height: totalHeight }}>
      {lines.map((l, i) => (
        <span
          key={i}
          className={lineClassName}
          style={{ position: 'absolute', top: l.y, left: l.x, whiteSpace: 'pre', lineHeight: `${lineHeight}px` }}
        >
          {l.text}
        </span>
      ))}
    </div>
  )
}
