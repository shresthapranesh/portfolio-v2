import * as React from 'react'
import Image from "next/image"

import Layout from '../components/Layout'

const Resume = () => {
    return (
        <Layout>
            <Image
                alt="Resume"
                src="/images/Resume.jpg"
                height={800}
                width={600}
            />
        </Layout>
    )
}

export default Resume;