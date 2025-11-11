import React, { useState, useEffect } from 'react';
import Newsletter from '../components/Newsletter';
import { api } from '../api';

const WriteForUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        article: '',
        captcha: '',
    });
    const [captchaCode, setCaptchaCode] = useState('');
    const [formMessage, setFormMessage] = useState({ type: '', text: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const generateCaptcha = () => {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let captcha = '';
        for (let i = 0; i < 4; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptchaCode(captcha);
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.captcha.toLowerCase() !== captchaCode.toLowerCase()) {
            setFormMessage({ type: 'error', text: 'CAPTCHA code is incorrect. Please try again.' });
            generateCaptcha();
            setFormData(prev => ({ ...prev, captcha: '' }));
            return;
        }

        setIsSubmitting(true);
        setFormMessage({ type: '', text: '' });

        try {
            // Destructure to remove captcha before sending to backend
            const { captcha, ...submissionData } = formData;
            const result = await api.submitArticle(submissionData);

            if (!result.success) {
                throw new Error(result.message || 'An unknown error occurred during submission.');
            }

            setFormMessage({ type: 'success', text: result.message });
            setFormData({ fullName: '', email: '', article: '', captcha: '' });
            generateCaptcha();
        } catch (error) {
            console.error('Submission failed:', error);
            const errorMessage = error instanceof Error ? error.message : 'Sorry, there was an error submitting your article. Please try again later.';
            setFormMessage({ type: 'error', text: errorMessage });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
      <>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-6 tracking-wide">WRITE FOR US</h1>
                
                <div className="space-y-8 text-gray-700 text-lg">
                    <p>
                        Want to contribute your post to Kids Tube Blog?
                    </p>
                    
                    <p className="leading-relaxed">
                        We are glad that you have an interest in writing for us or guest posting on Kids Tube blog. We are looking for a unique and quality content, which provides a great information on distinctive topics.
                    </p>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">Approval and publishing</h2>
                        <p className="leading-relaxed">
                            If you are ready with a great write-up, submit your content by filling the form. If your article needs some changes, we will get in touch with you to inform the same.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">Submission guidelines</h2>
                        <p className="leading-relaxed">
                            Please carefully read the below set of guidelines before submitting an article:
                        </p>
                        <ul className="list-disc list-inside space-y-3 pl-2">
                            <li>Submit your content through CONTENT SUBMISSION form.</li>
                            <li>Content should be value-packed, well researched and unique. Do not deliver an article, which is already published.</li>
                            <li>If you're submitting an image, it ought to be high resolution and landscape size.</li>
                            <li>Preschool learning</li>
                            <li>DIY ideas</li>
                            <li>Preschool crafts</li>
                        </ul>
                    </div>

                    <p className="font-semibold text-gray-800">
                        NOTE: Please refrain from writing to us asking if your article is accepted and when will it be published. We are receiving articles in bulk so give us time to proof read your post.
                    </p>

                    {/* Submission Form */}
                    <div className="border-4 border-pink-500 rounded-2xl p-4 sm:p-6 md:p-8 mt-12">
                        <h2 className="text-2xl font-black text-gray-800 mb-6">SUBMIT YOUR ARTICLE</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                        className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 placeholder:text-gray-400"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@example.com"
                                        required
                                        className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="article" className="block text-sm font-medium text-gray-700 mb-1">Your Article/Content/Blog Post</label>
                                <textarea
                                    name="article"
                                    id="article"
                                    rows={8}
                                    value={formData.article}
                                    onChange={handleChange}
                                    placeholder="Start writing your amazing article here..."
                                    required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 placeholder:text-gray-400"
                                ></textarea>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">Enter Captcha</label>
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <input
                                        type="text"
                                        name="captcha"
                                        id="captcha"
                                        value={formData.captcha}
                                        onChange={handleChange}
                                        required
                                        className="w-full sm:flex-1 px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                                    />
                                    <div className="bg-blue-600 text-white font-bold tracking-widest text-center py-3 rounded-md select-none w-full sm:w-auto px-6">
                                        {captchaCode}
                                    </div>
                                </div>
                            </div>

                            {formMessage.text && (
                                <div className={`p-3 rounded-md text-center ${formMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {formMessage.text}
                                </div>
                            )}

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto px-8 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-wait"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Newsletter />
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto group">
                    <img
                        src="https://i.imgur.com/lZ2yP6T.png"
                        alt="Kids Tube banner with three cartoon children holding a sign"
                        className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-105 animate-breathe"
                    />
                </div>
            </div>
        </section>
      </>
    );
}

export default WriteForUs;