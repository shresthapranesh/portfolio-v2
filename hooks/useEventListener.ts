import * as React from 'react'


export const useEventListener = (eventType:string, callback:(e:any) => void, element:any) => {
    const callbackRef = React.useRef(callback)
    React.useEffect(() => {
        callbackRef.current = callback
    },[])

    React.useEffect(() => {
        let el = element??window
        const handler = (e:any) => callbackRef.current(e)
        el.addEventListener(eventType,handler)
        return () => el.removeEventListener(eventType,handler)
    },[eventType,element])
}