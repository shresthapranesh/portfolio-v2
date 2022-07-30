import type {NextApiRequest, NextApiResponse} from 'next'

const contactForm =  async (req:NextApiRequest,res:NextApiResponse) => {
    if (req.method == "POST"){
        res.status(200).send('Thank you. I will get in touch.')
    }
}

export default contactForm