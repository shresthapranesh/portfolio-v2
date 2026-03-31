"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import classNames from "../util/classNames";

type NavItemProps = {
    children: React.ReactNode,
    routes: string
}

const NavItem = (props: NavItemProps) => {
    const path = usePathname()
    const isActive = path === props.routes
    return (
        <Link
            href={props.routes}
            className={classNames(
                "relative text-sm px-4 py-5 inline-block transition-colors duration-200",
                isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
            )}
        >
            {props.children}
            {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            )}
        </Link>
    )
}

export default NavItem
