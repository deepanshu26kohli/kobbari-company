
import { CheckCircle2, TrendingUp, Globe2 } from 'lucide-react';

export default function TransformationStepper() {
    const steps = [
        {
            id: 1,
            title: "Regional Leader",
            icon: CheckCircle2,
            description: "Established local presence with stable farmer network and consistent domestic sales",
            status: "completed"
        },
        {
            id: 2,
            title: "Modernization Phase",
            icon: TrendingUp,
            description: "Investment in drying technology and grading systems to achieve export certification",
            status: "current"
        },
        {
            id: 3,
            title: "Global Supplier",
            icon: Globe2,
            description: "Certified export-grade copra capturing premium margins in international markets",
            status: "upcoming"
        }
    ];

    return (
        <section className="py-24 bg-gray-900 text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Strategic Transformation</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        This isn't a pivot away from our core strengths—it's an amplification of them.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-1 bg-gray-700 z-0">
                        <div className="h-full bg-green-500 w-1/2 rounded-full absolute top-0 left-0"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isCompleted = step.status === 'completed';
                            const isCurrent = step.status === 'current';

                            return (
                                <div key={index} className="flex flex-col items-center text-center group">
                                    <div className={`
                    w-20 h-20 rounded-full flex items-center justify-center mb-6 border-4 transition-all duration-300 shadow-lg bg-gray-800
                    ${isCompleted ? 'border-green-500 text-green-500' :
                                            isCurrent ? 'border-amber-500 text-amber-500 scale-110 shadow-amber-500/20' :
                                                'border-gray-600 text-gray-500'}
                  `}>
                                        <Icon className="w-10 h-10" />
                                    </div>

                                    <h3 className={`text-xl font-bold mb-3 ${isCurrent ? 'text-amber-400' : 'text-white'}`}>
                                        {step.title}
                                    </h3>

                                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:bg-gray-800 transition-colors w-full">
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
