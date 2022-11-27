import type {NextApiRequest, NextApiResponse} from 'next'
import fs from "fs";

const pdfBuffer = fs.readFileSync('./public/files/Resume.pdf')

const getResume = async (req:NextApiRequest,res:NextApiResponse) => {
    res.setHeader('Content-Type','application/pdf')
    res.status(200).send(pdfBuffer)
}

export default getResume