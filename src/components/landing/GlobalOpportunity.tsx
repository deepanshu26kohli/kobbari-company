
import globalTradeImage from '../../assets/images/global-trade.png';
import { ArrowUpRight } from 'lucide-react';

export default function GlobalOpportunity() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    <div className="mb-12 lg:mb-0 relative">
                        <div className="absolute -inset-4 bg-green-100/50 rounded-xl transform -rotate-2 -z-10"></div>
                        <img
                            src={globalTradeImage}
                            alt="Global Coconut Demand"
                            className="rounded-lg shadow-2xl w-full"
                        />
                    </div>

                    <div>
                        <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Market Outlook</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">The Global Opportunity</h3>

                        <div className="space-y-6 text-gray-600">
                            <p className="text-lg">
                                Global demand for coconut derivatives continues its upward trajectory, driven by health-conscious consumers, expanding food processing industries, and growing oleochemical applications.
                            </p>

                            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                    <ArrowUpRight className="w-5 h-5 mr-2 text-amber-600" />
                                    Premium Shift
                                </h4>
                                <p className="text-sm">
                                    The international market increasingly rewards certified, traceable, export-grade copra with significant price premiums over commodity-grade material.
                                </p>
                            </div>

                            <p>
                                Buyers in Europe, North America, and Asia prioritize suppliers who can demonstrate consistent quality, food safety compliance, and ethical sourcing.
                            </p>

                            <blockquote className="text-green-800 font-medium italic">
                                "The Kobbari Company is uniquely positioned to capture this premium segment."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
