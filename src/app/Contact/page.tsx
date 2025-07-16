'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'service_dmpxfr7', // Replace with your actual EmailJS service ID
        'template_yy7u369', // Replace with your actual template ID
        e.target as HTMLFormElement,
        'p5Z2xVa3FvqllH94c'   // Replace with your actual public key
      )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <section className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-12">Contact Me</h1>

        {status === 'success' && (
          <p className="mb-6 text-green-600 text-center font-medium">
            ✅ Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="mb-6 text-red-600 text-center font-medium">
            ❌ Something went wrong. Try again later.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-delay">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
}
