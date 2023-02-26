import React from 'react'
import Image from 'next/image'

export default function Page(){
    return (
        <div className="flex justify-center">
            <Image
                alt="Resume"
                src="/images/Resume.jpg"
                height={800}
                width={600}
            />
        </div>
    )
}