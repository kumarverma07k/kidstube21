import React from 'react';

const Newsletter = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        const form = e.target as HTMLFormElement;
        form.reset();
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="relative max-w-4xl mx-auto text-center">
                    <img src="https://i.imgur.com/8Qp4PBA.png" alt="Kids peeking over a banner" className="mx-auto select-none" style={{pointerEvents: 'none'}} />
                    <div className="relative bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-12 -mt-20 md:-mt-32 z-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-600" style={{fontFamily: "'Fredoka One', cursive"}}>
                            NEWSLETTER
                        </h2>
                        <p className="mt-2 text-md sm:text-lg text-gray-600">
                            Sign up to receive regular weekly updates.
                        </p>
                        <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                aria-label="Email for newsletter"
                                className="w-full px-6 py-4 text-gray-800 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-pink-500 text-white font-bold py-4 px-8 rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-lg transform hover:scale-105 whitespace-nowrap"
                            >
                                Get Started
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;