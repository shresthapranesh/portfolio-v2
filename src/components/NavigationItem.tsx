"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import classNames from "../util/classNames";

type NavItemProps = {
    children: React.ReactNode,
    routes: string
    onClick?: () => void
}

const NavItem = (props: NavItemProps) => {
    const path = usePathname()
    const isActive = path === props.routes
    return (
        <Link
            href={props.routes}
            onClick={props.onClick}
            className={classNames(
                "relative text-sm px-4 py-5 inline-block transition-colors duration-200",
                isActive ? "text-[#ededed]" : "text-[#444] hover:text-[#888]"
            )}
        >
            {props.children}
            {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#f59e0b]" />
            )}
        </Link>
    )
}

export default NavItem
