import * as React from 'react'
import Image from 'next/image'

type SocialButtonProps = {
    link:string,
    img:string,
}

export const SocialButton:React.FC<SocialButtonProps> = (props) => {
    return (
        <a
            className="cursor-pointer no-underline transition-all p-2"
            href={props.link}
        >
            <Image
                className="hover:tranzinc-y-1"
                height={32}
                width={32}
                src={props.img}
                alt=""
            />
        </a>
    )
}