import * as React from 'react'
import {css} from '@emotion/react'

type NavBarListProps = {
    children?:React.ReactNode
}

export const NavBarList = React.forwardRef<HTMLUListElement,NavBarListProps>((props,ref) => {
    return (
        <ul
            ref={ref}
            css={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingLeft: 0,
                width: '80%'
            }}
        >
            {props.children}
        </ul>
    )
})

NavBarList.displayName = "Navigation List"