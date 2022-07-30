import * as React from 'react'
import {css} from '@emotion/react'
import {useRouter} from "next/router";

type NavItemProps = {
    children?:React.ReactNode,
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
            css={{
                listStyleType: 'none',
                fontSize: '15px',
                cursor: 'pointer',
                margin: '20px',
                textAlign: 'center',
                '& :first-child':{
                    marginTop: 0,
                },
                '& :hover': {
                    opacity: 0.5
                }
            }}

        >
            {props.children}
        </li>
    )
})
NavItem.displayName = "Navigation Item"