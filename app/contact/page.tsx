'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-black via-zinc-900 to-black py-24 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-lime-500/10 border border-lime-500/20 rounded-md">
            <span className="text-lime-400 text-xs font-semibold uppercase tracking-wider">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Contact Us
          </h1>
          <div className="h-1 w-32 bg-lime-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 leading-relaxed">
            For business, partnership, or media inquiries, please use the form below.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
                <p className="text-gray-400 text-lg">
                  We've received your message and will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                    Company <span className="text-gray-600">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-5 py-4 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-5 rounded-lg transition-all transform hover:scale-[1.02] text-lg"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond to inquiries within 1-2 business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-zinc-950 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10">
              <h2 className="text-2xl font-bold mb-6 text-white">Business Inquiries</h2>
              <p className="text-gray-400 mb-6">
                PlayersEdge Group welcomes inquiries from:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-400">
                  <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Licensed sportsbook operators interested in partnership opportunities</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Media representatives seeking information about our company</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Industry professionals interested in collaboration</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Advertisers and marketing partners</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-950/20 to-black border border-yellow-900/30 rounded-2xl p-10">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-yellow-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Please Note</h3>
                  <p className="text-gray-400 leading-relaxed">
                    PlayersEdge Group is a media and marketing company. For customer service issues related to a specific
                    sportsbook (account questions, deposits, withdrawals, bet settlements, etc.), please contact that operator
                    directly. We cannot assist with operator-specific account matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
