
import { ArrowRight, ShoppingBag, Truck, Heart } from 'lucide-react';

interface PartnerWithUsProps {
    onOpenInquiry: () => void;
}

export default function PartnerWithUs({ onOpenInquiry }: PartnerWithUsProps) {
    const partners = [
        {
            title: "Commodity Buyers",
            icon: ShoppingBag,
            description: "Secure reliable supply of certified export-grade copra with full traceability and consistent quality specifications.",
            action: "Request Specs"
        },
        {
            title: "Export Partners",
            icon: Truck,
            description: "Access differentiated premium product with established sourcing infrastructure and local market expertise.",
            action: "Discuss Logistics"
        },
        {
            title: "Impact Investors",
            icon: Heart,
            description: "Support farmer livelihoods and sustainable agriculture while capturing commercial returns from market transformation.",
            action: "Explore Impact"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-green-900 to-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Partner With Us</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            The Kobbari Company represents a compelling opportunity for commodity buyers, export partners, and impact-focused investors seeking exposure to growing global demand for premium coconut derivatives.
                        </p>
                        <button
                            onClick={onOpenInquiry}
                            className="bg-green-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center space-x-2"
                        >
                            <span>Contact Us Today</span>
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="grid gap-6">
                        {partners.map((partner, index) => {
                            const Icon = partner.icon;
                            return (
                                <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:bg-white/20 transition-all group cursor-pointer" onClick={onOpenInquiry}>
                                    <div className="flex items-start space-x-6">
                                        <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-green-300 transition-colors">{partner.title}</h3>
                                            <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                                            <span className="text-green-400 text-sm font-semibold flex items-center">
                                                {partner.action} <ArrowRight className="w-4 h-4 ml-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="text-center border-t border-white/10 pt-8 mt-12">
                    <p className="text-gray-400">
                        We're not disrupting our business model—we're <span className="text-white">elevating it</span> to capture the value our quality and relationships have always deserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
