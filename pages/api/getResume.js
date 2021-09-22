import fs from "fs";

const pdfBuffer = fs.readFileSync('./public/files/Resume.pdf')


export default async (req,res) => {
    res.setHeader('Content-Type','application/pdf')
    res.status(200).send(pdfBuffer)
}