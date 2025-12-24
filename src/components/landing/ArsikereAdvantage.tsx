
import { MapPin, Sun, Users } from 'lucide-react';
import scenicLandscape from '../../assets/images/arsikere-landscape.png';

export default function ArsikereAdvantage() {
    const advantages = [
        {
            icon: MapPin,
            title: "Strategic Location",
            description: "Central Karnataka's coconut belt with optimal growing conditions and established logistics infrastructure."
        },
        {
            icon: Sun,
            title: "Superior Raw Material",
            description: "High oil content coconuts from mature, well-maintained plantations using sustainable practices."
        },
        {
            icon: Users,
            title: "Community Integration",
            description: "Embedded relationships providing preferred access, quality assurance, and supply predictability."
        }
    ];

    return (
        <section className="py-24 relative bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Regional Excellence</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">The Arsikere Advantage</h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Arsikere's unique geography and climate create ideal conditions for coconut cultivation. The region's red laterite soil, consistent rainfall patterns, and traditional farming practices produce coconuts with <span className="text-green-800 font-medium">superior oil content and moisture balance</span>the hallmarks of premium copra.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {advantages.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-transparent hover:border-green-600 group">
                                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                                    <Icon className="w-7 h-7 text-green-700" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 rounded-2xl overflow-hidden shadow-xl h-80 md:h-96 relative">
                    <div className="absolute inset-0 bg-black/20 z-10 transition-opacity hover:opacity-10" />
                    <img
                        src={scenicLandscape}
                        alt="Arsikere Coconut Belt Landscape"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                        <span className="bg-white/90 backdrop-blur text-green-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                            <MapPin size={16} /> Arsikere, Karnataka
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
