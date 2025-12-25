import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';


interface InquiryFormProps {
    onSuccess?: () => void;
    className?: string;
}

export default function InquiryForm({ onSuccess, className = '' }: InquiryFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        product_interest: '',
        quantity: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const products = [
        'Whole Dry Coconuts',
        'Copra (Sun-dried)',
        'Copra (Machine-dried)',
        'Desiccated Coconut Powder',
        'Virgin Coconut Oil',
        'Refined Coconut Oil',
        'Other / Custom Requirement'
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Simulate API interaction
            await new Promise(resolve => setTimeout(resolve, 1500));

            setIsSuccess(true);
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                product_interest: '',
                quantity: '',
                message: ''
            });

            if (onSuccess) {
                setTimeout(() => {
                    onSuccess();
                }, 3000);
            }
        } catch (err) {
            setError('Failed to submit inquiry. Please try again.');
            console.error('Error submitting inquiry:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (isSuccess) {
        return (
            <div className={`text-center py-12 ${className}`}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                    <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Submitted Successfully!</h3>
                <p className="text-gray-600">Our sales team will contact you within 24 hours.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                    />
                </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                    />
                </div>

                <div>
                    <label htmlFor="product_interest" className="block text-sm font-semibold text-gray-700 mb-2">
                        Product Interest
                    </label>
                    <select
                        id="product_interest"
                        name="product_interest"
                        value={formData.product_interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                    >
                        <option value="">Select a product</option>
                        {products.map((product) => (
                            <option key={product} value={product}>
                                {product}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
                        Estimated Quantity (MT/Liters)
                    </label>
                    <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        placeholder="e.g., 20 MT"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Requirements / Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your specific requirements, delivery location, frequency, etc."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                />
            </div>

            {error && (
                <div className="bg-red-50 text-red-800 p-4 rounded-md">
                    {error}
                </div>
            )}

            <div className="flex space-x-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed inline-flex items-center justify-center space-x-2"
                >
                    <Send size={20} />
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                </button>
            </div>
        </form>
    );
}
