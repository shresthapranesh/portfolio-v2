"use client"
import React from 'react'
import Link from 'next/link';

type NavItemProps = {
    children:React.ReactNode,
    routes:string
}

export const NavItem = (props:NavItemProps) => {
    return (
        <Link href={props.routes}>
            <button
                className="text-sm m-5 text-center hover:opacity-50 hover:cursor-pointer"
            >
                {props.children}
            </button>
        </Link>
    )
}
NavItem.displayName = "Navigation Item"