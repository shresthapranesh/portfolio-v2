import * as React from 'react'
import Image from 'next/image'

type SocialButtonProps = {
    link: string,
    img: string,
}

export const SocialButton: React.FC<SocialButtonProps> = (props) => {
    return (
        <a
            className="cursor-pointer no-underline transition-all duration-200 p-2 rounded-lg hover:bg-zinc-800 hover:scale-110 inline-flex"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                height={28}
                width={28}
                src={props.img}
                alt=""
            />
        </a>
    )
}
