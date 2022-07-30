import * as React from 'react'
import {css} from '@emotion/react'

type NavBarProps = {
    children?:React.ReactNode
}

export const NavBar = React.forwardRef<HTMLCanvasElement,NavBarProps>((props,ref)  => {
    return (
        <nav
            ref={ref}
            css={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            {props.children}
        </nav>
    )
})

NavBar.displayName = "Navigation Bar"

