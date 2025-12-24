
import { CheckCircle2, XCircle } from 'lucide-react';

export default function CompetitiveDifferentiation() {
    const comparisons = [
        {
            us: "30-year embedded farmer network",
            them: "Opportunistic aggregation model"
        },
        {
            us: "Single-source regional concentration",
            them: "Multi-origin blended material"
        },
        {
            us: "Controlled processing infrastructure",
            them: "Traditional open-air processing"
        },
        {
            us: "Full supply chain transparency",
            them: "Limited traceability capability"
        },
        {
            us: "Consistent year-round capacity",
            them: "Seasonal availability constraints"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">Competitive Differentiation</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        The Indian copra export market is fragmented. Our structural advantage is built on decades of relationship development.
                    </p>
                </div>

                <div className="overflow-hidden rounded-xl shadow-xl border border-gray-100">
                    <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
                        <div className="p-6 text-center border-r border-gray-200 bg-green-50">
                            <h3 className="text-xl font-bold text-green-900">The Kobbari Advantage</h3>
                        </div>
                        <div className="p-6 text-center bg-gray-50">
                            <h3 className="text-xl font-bold text-gray-500">Typical Competitor</h3>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100 bg-white">
                        {comparisons.map((item, index) => (
                            <div key={index} className="grid grid-cols-2 group hover:bg-green-50/10 transition-colors">
                                <div className="p-6 md:p-8 flex items-center border-r border-gray-100">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                                    <span className="text-gray-900 font-medium md:text-lg">{item.us}</span>
                                </div>
                                <div className="p-6 md:p-8 flex items-center">
                                    <XCircle className="w-6 h-6 text-gray-300 mr-4 flex-shrink-0" />
                                    <span className="text-gray-500 md:text-lg">{item.them}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
