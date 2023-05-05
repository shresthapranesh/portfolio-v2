"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import classNames from "../util/classNames";

type NavItemProps = {
    children:React.ReactNode,
    routes:string
  }
  
const NavItem = (props:NavItemProps) => {
    const path = usePathname()
    return (
        <Link href={props.routes}>
            <button
                className={classNames(
                    "text-sm m-5 text-center hover:cursor-pointer",
                    path === props.routes ? "dark:text-blue-600": 'dark:text-zinc-500 hover:dark:text-zinc-300'
                )}
            >
                {props.children}
            </button>
        </Link>
    )
}

export default NavItem