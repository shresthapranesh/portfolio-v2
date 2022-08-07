import * as React from 'react'
import {css} from '@emotion/react'
import Image from 'next/image'

type SocialButtonProps = {
    link:string,
    img:string,
}

export const SocialButton:React.FC<SocialButtonProps> = (props) => {
    return (
        <a
            css={{
                textDecorationSkipInk: 'auto',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
                padding: '10px',
            }}
            href={props.link}
        >
            <Image
                css={{
                    ':hover':{
                        transform: 'translateY(-3px)'
                    }
                }}
                height={32}
                width={32}
                src={props.img}
                alt=""
            />
        </a>
    )
}