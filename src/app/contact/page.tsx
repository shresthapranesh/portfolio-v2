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
            <section className="relative min-h-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.08),_transparent_70%)] pointer-events-none" />
                <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-2xl mx-auto mb-4">✓</div>
                    <h2 className="text-3xl font-bold text-white">{response}</h2>
                </div>
            </section>
        )

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.08),_transparent_60%)] pointer-events-none" />
            <div className="relative py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-center text-white">Get In Touch</h2>
                <p className="text-center text-zinc-500 mb-8 text-sm">Have a project in mind or just want to say hi?</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-400">Your email</label>
                        <input
                            type="email" id="email" value={state.email}
                            onChange={(e) => handleChange(e, 'email')}
                            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                            placeholder="name@email.com" required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-zinc-400">Subject</label>
                        <input
                            type="text" id="subject" value={state.subject}
                            onChange={(e) => handleChange(e, 'subject')}
                            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                            placeholder="What's this about?" required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-zinc-400">Message</label>
                        <textarea
                            id="message" rows={6} value={state.message}
                            onChange={(e) => handleChange(e, 'message')}
                            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200 resize-none"
                            placeholder="Tell me what's on your mind..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}
