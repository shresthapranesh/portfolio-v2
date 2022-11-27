import * as React from 'react'

type NavBarProps = {
    children:React.ReactNode
}

export const NavBar = React.forwardRef<HTMLCanvasElement,NavBarProps>((props,ref)  => {
    return (
        <nav
            ref={ref}
            className="w-full flex flex-col border-b-[1px] border-slate-300/10"
        >
            {props.children}
        </nav>
    )
})

NavBar.displayName = "Navigation Bar"

