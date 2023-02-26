import React from 'react'

type NavBarListProps = {
    children:React.ReactNode
}

export const NavBarList = (props:NavBarListProps) => {
    return (
        <ul
            className="flex flex-row overflow-auto sm:justify-end pl-0 w-full sm:w-4/5"
        >
            {props.children}
        </ul>
    )
}
NavBarList.displayName = "Navigation List"