import * as React from 'react'

type NavBarListProps = {
    children:React.ReactNode
}

export const NavBarList = React.forwardRef<HTMLUListElement,NavBarListProps>((props,ref) => {
    return (
        <ul
            ref={ref}
            className="flex flex-row justify-end pl-0 w-4/5"
        >
            {props.children}
        </ul>
    )
})

NavBarList.displayName = "Navigation List"