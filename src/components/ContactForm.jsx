import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-6  bg-gradient-to-b from-cream to-white">
      <div className="max-w-2xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-maroon/40 text-xs tracking-[0.3em] uppercase font-body mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl text-maroon font-light">
            Let's <span className="text-pink">Connect</span>
          </h2>
          <div className="w-12 h-px bg-pink mx-auto mt-5" />
        </div>

        <form onSubmit={handleSubmit} className="reveal space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-maroon/60 text-xs tracking-widest uppercase font-body mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-cream/50 border border-maroon/20 rounded-lg px-4 py-3 text-maroon font-body text-sm placeholder:text-maroon/30 focus:outline-none focus:border-pink focus:bg-white transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-maroon/60 text-xs tracking-widest uppercase font-body mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-cream/50 border border-maroon/20 rounded-lg px-4 py-3 text-maroon font-body text-sm placeholder:text-maroon/30 focus:outline-none focus:border-pink focus:bg-white transition-all duration-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-maroon/60 text-xs tracking-widest uppercase font-body mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Write your message..."
              className="w-full bg-cream/50 border border-maroon/20 rounded-lg px-4 py-3 text-maroon font-body text-sm placeholder:text-maroon/30 focus:outline-none focus:border-pink focus:bg-white transition-all duration-300 resize-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="group flex items-center gap-2 bg-maroon text-white font-body text-sm px-8 py-3 rounded-lg hover:bg-maroon/80 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-maroon/20"
            >
              {sent ? (
                'Message Sent ✓'
              ) : (
                <>
                  Send Message 
                  <Send size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}