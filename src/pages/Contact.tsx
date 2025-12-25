import { MapPin, Phone, Mail, MessageCircle, Video, ArrowRight } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

export default function Contact() {
    const contactCards = [
        {
            icon: Phone,
            title: 'Phone Support',
            description: 'Speak directly with our sales team',
            detail: '+91 99000 00000',
            subDetail: 'Mon-Sat: 9:00 AM - 6:00 PM IST',
            action: 'Call Now',
            link: 'tel:+919900000000'
        },
        {
            icon: Mail,
            title: 'Email Us',
            description: 'Send detailed inquiries and documents',
            detail: 'sales@kobbaricompany.com',
            subDetail: 'Response within 24 hours',
            action: 'Send Email',
            link: 'mailto:sales@kobbaricompany.com'
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp Business',
            description: 'Quick responses and instant updates',
            detail: '+91 99000 00000',
            subDetail: 'Mon-Sat: 9:00 AM - 8:00 PM IST',
            action: 'Chat on WhatsApp',
            link: 'https://wa.me/919900000000'
        },
        {
            icon: Video,
            title: 'Video Consultation',
            description: 'Virtual facility tours and product demos',
            detail: 'Schedule a Call',
            subDetail: 'By appointment only',
            action: 'Book Video Call',
            link: '#'
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <section className="bg-green-900 py-16 text-white text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-green-100 max-w-2xl mx-auto">
                    Get in touch with our team for bulk orders, export inquiries, or general questions.
                </p>
            </section>

            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {contactCards.map((card, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4 mb-6">
                                <card.icon className="text-amber-700 mt-1" size={28} />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{card.description}</p>
                                </div>
                            </div>
                            <div className="mb-6 pl-11">
                                <p className="text-lg font-bold text-amber-900">{card.detail}</p>
                                <p className="text-xs text-gray-400 mt-1">{card.subDetail}</p>
                            </div>
                            <div className="pl-11">
                                <a
                                    // href={card.link}
                                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
                                    {card.action} <ArrowRight size={16} className="ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Contact Info & Map */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Facility</h2>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-green-800" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-lg">Headquarters & Processing Unit</h3>
                                    <p className="text-gray-600 mt-1">
                                        Kobbari Company,<br />
                                        Arsikere, Karnataka 573103<br />
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15526.471676694334!2d76.24430465!3d13.31343755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02030f0687087%3A0x62953686256c70c1!2sArsikere%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map location of Arsikere"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <InquiryForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
