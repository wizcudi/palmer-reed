import React, { useState } from 'react'
import { Send } from 'lucide-react'
import Palmer from '../../assets/PalmerOnStage.jpg'

export default function ContactPreview() {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiryType: 'booking', // Default selection
        message: ''
    });

    // Error state for validation
    const [errors, setErrors] = useState({});

    // Loading state for form submission
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);

        // Here you would typically make an API call to your backend
        // For now, we'll simulate a submission
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Clear form and show success message
            setFormData({
                name: '',
                email: '',
                inquiryType: 'booking',
                message: ''
            });
            setSubmitSuccess(true);
            setTimeout(() => setSubmitSuccess(false), 5000); // Hide success message after 5 seconds
        } catch (error) {
            setErrors(prev => ({
                ...prev,
                submit: 'Failed to send message. Please try again.'
            }));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className='bg-color60 py-16'>
            <div className='container flex flex-col lg:flex-row gap-8 mx-auto '>
                {/* Section Header */}
                <div className='w-full '>

                    <div className='flex items-center gap-4 mb-4'>
                        <h2 className='text-4xl font-bold text-center'>Get In Touch</h2>
                        <div className='h-[2px] bg-color30 flex-grow'></div>
                    </div>

                    <p className='text-lg text-gray-600 '>
                        Have a project in mind? Let's bring your vision to life.
                    </p>

                    {/* Right Column - Image */}
                    <div className='mt-8 hidden lg:block order-2 lg:order-2 max600:order-1 '>
                        <img 
                            src={Palmer} 
                            alt="Palmer Reed" 
                            className='w-full h-full object-cover rounded-lg shadow-lg'
                        />
                    </div>
                </div>

                {/* Contact Form */}
                <form 
                    onSubmit={handleSubmit}
                    className='w-full bg-white p-8 rounded-lg shadow'
                >
                    {/* Name Input */}
                    <div className='mb-6'>
                        <label 
                            htmlFor='name'
                            className='block text-sm font-medium mb-2'
                        >
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color30
                                ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.name && (
                            <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
                        )}
                    </div>

                    {/* Email Input */}
                    <div className='mb-6'>
                        <label 
                            htmlFor='email'
                            className='block text-sm font-medium mb-2'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color30
                                ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && (
                            <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                        )}
                    </div>

                    {/* Inquiry Type Select */}
                    <div className='mb-6'>
                        <label 
                            htmlFor='inquiryType'
                            className='block text-sm font-medium mb-2'
                        >
                            Inquiry Type
                        </label>
                        <select
                            id='inquiryType'
                            name='inquiryType'
                            value={formData.inquiryType}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color30'
                        >
                            <option value='booking'>Booking</option>
                            <option value='press'>Press</option>
                            <option value='music'>Music</option>
                        </select>
                    </div>

                    {/* Message Textarea */}
                    <div className='mb-6'>
                        <label 
                            htmlFor='message'
                            className='block text-sm font-medium mb-2'
                        >
                            Message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            rows='5'
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color30
                                ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.message && (
                            <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className={`w-full bg-color30 text-white py-3 px-6 rounded-lg
                            flex items-center justify-center gap-2
                            hover:bg-opacity-90 transition-all
                            ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Sending...' : (
                            <>
                                Send Message
                                <Send className='w-4 h-4' />
                            </>
                        )}
                    </button>

                    {/* Success Message */}
                    {submitSuccess && (
                        <div className='mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center'>
                            Message sent successfully! We'll get back to you soon.
                        </div>
                    )}

                    {/* Error Message */}
                    {errors.submit && (
                        <div className='mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center'>
                            {errors.submit}
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}