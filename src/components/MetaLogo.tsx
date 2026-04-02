import Image from 'next/image'

export default function MetaLogo({ width = 80, height = 34 }: { width?: number; height?: number }) {
  return (
    <Image
      src="/images/meta-logo-white.svg"
      alt="Meta"
      width={width}
      height={height}
      unoptimized
      style={{ objectFit: 'contain' }}
    />
  )
}
