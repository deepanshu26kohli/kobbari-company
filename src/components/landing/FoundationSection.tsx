
import foundationImage from '../../assets/images/foundation-image.png';

export default function FoundationSection() {
    return (
        <section id="our-foundation" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Column */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-green-800 font-semibold tracking-wide uppercase text-sm mb-2">Our Origins</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif leading-tight">
                                Our Foundation: <br />Three Decades of Trust
                            </h3>
                            <div className="w-20 h-1 bg-green-600 mt-6 mb-6"></div>
                        </div>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                For 30 years, <span className="font-semibold text-gray-900">The Kobbari Company</span> has been the cornerstone of copra trading in Arsikere, one of India's most productive coconut-growing regions. Our longevity isn't just about time—it's about relationships built on mutual respect, fair pricing, and unwavering reliability.
                            </p>
                            <p>
                                We've cultivated direct partnerships with local farming families. These aren't transactional relationships; they're bonds forged through consistent support, transparent dealings, and shared prosperity.
                            </p>
                            <p className="border-l-4 border-green-500 pl-6 italic text-gray-800 font-medium">
                                This distinctive network gives us privileged access to the highest quality coconuts at source, ensuring supply stability that competitors simply cannot match.
                            </p>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="relative">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-green-50 rounded-full opacity-50 z-0"></div>
                        <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-amber-50 rounded-full opacity-50 z-0"></div>

                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={foundationImage}
                                alt="Farmer holding premium coconut"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <p className="text-white font-medium text-lg">"Built on bonds forged through shared prosperity."</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
