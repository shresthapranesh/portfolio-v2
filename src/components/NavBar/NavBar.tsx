import React from 'react'

type NavBarProps = {
    children:React.ReactNode
}

export const NavBar = (props:NavBarProps)  => {
    return (
        <nav
            className="w-full flex flex-col border-b-[1px] border-slate-300/10"
        >
            {props.children}
        </nav>
    )
}

