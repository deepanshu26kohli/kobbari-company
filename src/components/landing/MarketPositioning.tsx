
import { Check, ShieldCheck, Scale, HeartHandshake } from 'lucide-react';

export default function MarketPositioning() {
    const propositions = [
        {
            title: "Certified Quality",
            icon: Check,
            description: "Export-grade copra meeting international food safety standards with full documentation and traceability."
        },
        {
            title: "Supply Reliability",
            icon: ShieldCheck,
            description: "Predictable volumes through integrated farmer network, reducing buyer risk and enabling long-term contracts."
        },
        {
            title: "Ethical Sourcing",
            icon: HeartHandshake,
            description: "Direct farmer partnerships ensuring fair compensation and sustainable practices, meeting ESG requirements."
        },
        {
            title: "Competitive Pricing",
            icon: Scale,
            description: "Efficient operations and source integration delivering premium quality at attractive margins for buyers."
        }
    ];

    return (
        <section className="py-24 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">Market Positioning & Value Proposition</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Targeting international coconut oil processors, food manufacturers, and commodity trading houses that prioritize <span className="text-green-800 font-semibold">quality and reliability</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {propositions.map((prop, index) => {
                        const Icon = prop.icon;
                        return (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start space-x-6">
                                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                                    <Icon className="w-8 h-8 text-green-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{prop.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{prop.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
