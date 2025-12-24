
import { Calendar, Users, ShieldCheck } from 'lucide-react';

export default function StatsSection() {
    const stats = [
        {
            id: 1,
            icon: Calendar,
            value: "30",
            label: "Years of Operation",
            subtext: "Established leadership in Arsikere"
        },
        {
            id: 2,
            icon: Users,
            value: "200+",
            label: "Farming Partners",
            subtext: "Direct relationships with local producers"
        },
        {
            id: 3,
            icon: ShieldCheck,
            value: "100%",
            label: "Source Transparency",
            subtext: "Full traceability from farm to facility"
        }
    ];

    return (
        <section className="bg-green-900 py-16 text-white relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-green-700/50">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.id} className="px-4 py-8 md:py-0 hover:transform hover:scale-105 transition-transform duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
                                    <Icon className="w-8 h-8 text-green-300" />
                                </div>
                                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-xl font-semibold text-green-200 mb-2">{stat.label}</div>
                                <div className="text-sm text-green-100/70 max-w-xs mx-auto">{stat.subtext}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
