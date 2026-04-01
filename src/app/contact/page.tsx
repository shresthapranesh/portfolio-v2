"use client"
import React from 'react'

type UserInput = {
    email: string,
    subject: string,
    message: string
}

export default function Page() {
    const [state, setState] = React.useState<UserInput>({
        email: '', subject: '', message: ''
    })
    const [response, setResponse] = React.useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        })
        const json = await res.json()
        setResponse(json.message)
        setState({ email: '', subject: '', message: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        setState((prev) => ({ ...prev, [field]: e.target.value }))
    }

    if (response !== '')
        return (
            <section className="min-h-full flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border border-[rgba(245,158,11,0.3)] flex items-center justify-center text-2xl text-[#f59e0b] mx-auto mb-4">✓</div>
                    <h2 className="text-3xl font-bold text-[#ededed]">{response}</h2>
                </div>
            </section>
        )

    return (
        <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <p className="font-mono text-xs text-[#444] tracking-widest uppercase mb-2 text-center">Contact</p>
                <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-center text-[#ededed]">Get In Touch</h2>
                <p className="text-center text-[#888] mb-8 text-sm">Have a project in mind or just want to say hi?</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-mono text-[#888]">Your email</label>
                        <input
                            type="email" id="email" value={state.email}
                            onChange={(e) => handleChange(e, 'email')}
                            className="w-full p-3 bg-[#141414] border border-[#1f1f1f] text-[#ededed] placeholder-[#444] text-sm focus:outline-none focus:border-[#f59e0b] transition-colors duration-200"
                            placeholder="name@email.com" required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-mono text-[#888]">Subject</label>
                        <input
                            type="text" id="subject" value={state.subject}
                            onChange={(e) => handleChange(e, 'subject')}
                            className="w-full p-3 bg-[#141414] border border-[#1f1f1f] text-[#ededed] placeholder-[#444] text-sm focus:outline-none focus:border-[#f59e0b] transition-colors duration-200"
                            placeholder="What's this about?" required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-mono text-[#888]">Message</label>
                        <textarea
                            id="message" rows={6} value={state.message}
                            onChange={(e) => handleChange(e, 'message')}
                            className="w-full p-3 bg-[#141414] border border-[#1f1f1f] text-[#ededed] placeholder-[#444] text-sm focus:outline-none focus:border-[#f59e0b] transition-colors duration-200 resize-none"
                            placeholder="Tell me what's on your mind..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 border border-[#f59e0b] text-[#f59e0b] font-mono text-sm tracking-wide transition-colors duration-200 hover:bg-[rgba(245,158,11,0.1)]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}
