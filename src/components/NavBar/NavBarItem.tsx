import * as React from 'react'
import {useRouter} from "next/router";

type NavItemProps = {
    children:React.ReactNode,
    routes:string
}

export const NavItem = React.forwardRef<HTMLLIElement,NavItemProps>((props,ref) => {
    const router = useRouter()
    const handleClick = React.useCallback(() => {
        router.push(props.routes)
    },[props.routes,router])

    return (
        <li
            onClick={handleClick}
            ref={ref}
            className="text-sm m-5 text-center hover:opacity-50 hover:cursor-pointer"
        >
            {props.children}
        </li>
    )
})
NavItem.displayName = "Navigation Item"