import * as React from 'react'
import { useEventListener } from './useEventListener'

export const useMediaQuery = (mediaQuery:string) => {
    const [isMatch,setIsMatch] = React.useState(false)
    const [mediaQueryList,setMediaQueryList] = React.useState<MediaQueryList>()
    React.useEffect(() => {
        const list = window.matchMedia(mediaQuery)
        setMediaQueryList(list)
        setIsMatch(list.matches)
    },[mediaQuery])

    useEventListener("change", e => setIsMatch(e.matches),mediaQueryList)
    return isMatch
}