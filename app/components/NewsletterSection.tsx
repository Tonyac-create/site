'use client';

import Image from "next/image";
import { useState } from 'react';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://script.google.com/macros/s/AKfycbzJNZKkJDpPj15bV46jvaYQzvOnfFpOsQLH5o4CkDucx-kBDhLHOAvKpWq6wOXAV3M3Zg/exec';
        form.target = 'hidden_iframe';

        const emailInput = document.createElement('input');
        emailInput.type = 'hidden';
        emailInput.name = 'email';
        emailInput.value = email;
        form.appendChild(emailInput);

        const iframe = document.createElement('iframe');
        iframe.name = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        iframe.onload = () => {
            setStatus('success');
            setMessage('Merci de votre inscription !');
            setEmail('');
            document.body.removeChild(iframe);
            document.body.removeChild(form);
        };

        iframe.onerror = () => {
            setStatus('error');
            setMessage('Une erreur est survenue. Veuillez réessayer.');
            document.body.removeChild(iframe);
            document.body.removeChild(form);
        };

        document.body.appendChild(form);
        form.submit();
    };

    return (
        <section className="mx-6 pt-16 lg:mx-28 flex flex-col lg:flex-row gap-10">
            <div className="container mx-auto px-4">
                <h2 className="text-brown text-4xl font-lora font-semibold mb-4">Inscrivez-vous à notre newsletter</h2>
                <p className="text-xl mt-3 mb-8">Restez informé des dernières nouvelles de la SFPA, 1 envoi tous les 15 du mois.</p>
                <form onSubmit={handleSubmit} id="newsletter-form" className="w-3/4">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Votre email"
                        className="w-full p-2 rounded mb-4 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors"
                        disabled={status === 'loading'}
                        required
                    />
                    <button
                        type="submit"
                        className="w-3/4 font-semibold bg-green text-brown py-2 px-4 rounded-md hover:bg-brown hover:text-green transition-colors disabled:opacity-50"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Inscription en cours...' : 'Je m\'inscris à la newsletter'}
                    </button>
                    {message && (
                        <p className={`mt-4 ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                            {message}
                        </p>
                    )}
                </form>
            </div>
            <div className="container mx-auto px-4">
                <Image
                    src="/Screenshot_newsletter.png"
                    alt="Newsletter"
                    width={500}
                    height={500}
                    className="object-contain"
                />
            </div>
        </section>
    )
}