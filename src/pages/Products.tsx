import { Package, ArrowRight } from 'lucide-react';

interface ProductsProps {
  onOpenInquiry: () => void;
}

export default function Products({ onOpenInquiry }: ProductsProps) {
  const products = [
    {
      name: 'Whole Dry Coconuts (Bulk)',
      image: 'https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=800',
      usage: 'Oil mills, coconut oil manufacturing, copra production, export markets',
      quality: [
        'High copra content (300-350g per nut)',
        'Low moisture content',
        'No mold or insect damage',
        'Uniform size grading'
      ],
      packaging: 'Jute bags (50kg, 100kg), PP bags, bulk containers, custom packaging available',
      moq: 'Minimum Order: 10 MT (metric tons)'
    },
    {
      name: 'Copra (Sun-dried)',
      image: 'https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&w=800',
      usage: 'Coconut oil extraction, edible oil refineries, soap manufacturing, industrial applications',
      quality: [
        'Oil content: 65-68%',
        'Moisture: 6-8%',
        'FFA (Free Fatty Acid): <3%',
        'Natural sun-drying process'
      ],
      packaging: 'PP bags (50kg, 75kg), jute bags, bulk containers',
      moq: 'Minimum Order: 20 MT (metric tons)'
    },
    {
      name: 'Copra (Machine-dried)',
      image: 'https://images.pexels.com/photos/6683586/pexels-photo-6683586.jpeg?auto=compress&cs=tinysrgb&w=800',
      usage: 'Premium oil extraction, food-grade oil production, export markets',
      quality: [
        'Oil content: 68-72%',
        'Moisture: 4-6%',
        'FFA: <2%',
        'Consistent quality & color',
        'Longer shelf life'
      ],
      packaging: 'PP bags (50kg, 75kg), vacuum-sealed options for export',
      moq: 'Minimum Order: 15 MT (metric tons)'
    },
    {
      name: 'Desiccated Coconut Powder',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
      usage: 'Bakery industry, confectionery, food processing, instant mixes, export',
      quality: [
        'Available in various grades: fine, medium, chips',
        'Moisture: <3%',
        'Fat content: 65-70%',
        'White color, fresh aroma',
        'Food-grade processing'
      ],
      packaging: 'Food-grade bags (25kg, 50kg), cartons, vacuum-sealed packs',
      moq: 'Minimum Order: 5 MT (metric tons)'
    },
    {
      name: 'Virgin Coconut Oil',
      image: 'https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=800',
      usage: 'Food industry, cosmetics, pharmaceutical, health supplements, export',
      quality: [
        'Cold-pressed extraction',
        'Moisture & impurities: <0.1%',
        'Free fatty acids: <0.5%',
        'Natural aroma & taste',
        'No chemical processing'
      ],
      packaging: 'Food-grade drums (180kg), jerry cans (15L, 20L), bulk tanks',
      moq: 'Minimum Order: 1000 liters'
    },
    {
      name: 'Refined Coconut Oil',
      image: 'https://images.pexels.com/photos/5737438/pexels-photo-5737438.jpeg?auto=compress&cs=tinysrgb&w=800',
      usage: 'Food processing, frying applications, soap manufacturing, industrial use',
      quality: [
        'RBD (Refined, Bleached, Deodorized)',
        'Moisture: <0.1%',
        'FFA: <0.1%',
        'Neutral taste & odor',
        'High smoke point'
      ],
      packaging: 'Steel drums (190kg), flexitanks (20MT), bulk tankers available',
      moq: 'Minimum Order: 20 MT (metric tons)'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Package size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            B2B Product Catalog
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Premium bulk coconut products sourced directly from Karnataka's finest farms.
            All products available in bulk quantities for manufacturers, processors, and exporters.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="h-80 lg:h-auto bg-gray-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">
                      {product.name}
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-2">
                          Usage & Applications
                        </h3>
                        <p className="text-gray-700">{product.usage}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-2">
                          Quality Highlights
                        </h3>
                        <ul className="space-y-2">
                          {product.quality.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-green-800 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-2">
                          Packaging Options
                        </h3>
                        <p className="text-gray-700">{product.packaging}</p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm font-semibold text-green-900 mb-4">
                          {product.moq}
                        </p>
                        <button
                          onClick={onOpenInquiry}
                          className="bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-900 transition-colors inline-flex items-center space-x-2"
                        >
                          <span>Request Quote for {product.name}</span>
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
              Custom Requirements?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Need specific grades, packaging, or quantities? Our team can tailor products
              to meet your exact specifications. Contact us to discuss custom bulk orders.
            </p>
            <button
              onClick={onOpenInquiry}
              className="bg-green-800 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-900 transition-colors inline-flex items-center space-x-2"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
