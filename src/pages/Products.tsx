import { ArrowRight, Package, Scale } from 'lucide-react';
import ballCopraImg from '../assets/products/ball_copra_whole.png';
import edibleCopraImg from '../assets/products/edible_copra_sundried.png';
import millingCopraImg from '../assets/products/milling_copra_machinedried.png';
import desiccatedCoconutImg from '../assets/products/desiccated_coconut_powder.png';
import virginCoconutOilImg from '../assets/products/virgin_coconut_oil.png';

interface Product {
  name: string;
  category: string;
  description: string;
  image: string;
  specifications: {
    label: string;
    value: string;
  }[];
  packaging: string;
  moq: string;
}

interface ProductsProps {
  onOpenInquiry: () => void;
}

export default function Products({ onOpenInquiry }: ProductsProps) {
  const products: Product[] = [
    {
      name: 'Ball Copra (Whole Dry)',
      category: 'INDUSTRIAL SUPPLY',
      description: 'Premium dried whole coconuts sourced from Karnataka coconut belt. Engineered for industrial oil extraction and commodity trading. Export-grade quality with full traceability to farm origin.',
      image: ballCopraImg,
      specifications: [
        { label: 'Moisture', value: '< 6%' },
        { label: 'Oil Content', value: '> 65%' },
        { label: 'Size', value: '100g - 250g per piece' },
        { label: 'Shelf Life', value: '12 Months' }
      ],
      packaging: 'Jute Bags (50kg), PP Bags (25kg), Bulk FCL',
      moq: 'Min Order Qty: 5 Tons'
    },
    {
      name: 'Edible Copra (Sun-dried)',
      category: 'FOOD GRADE',
      description: 'Natural sun-dried coconut cups with rich aroma and sweet taste. Perfectly processed for edible oil extraction, confectionery, and traditional food preparations.',
      image: edibleCopraImg,
      specifications: [
        { label: 'Moisture', value: '6-8%' },
        { label: 'Oil Content', value: '65-68%' },
        { label: 'FFA', value: '< 3%' },
        { label: 'Drying', value: 'Natural Sun Dried' }
      ],
      packaging: 'PP Bags (50kg), Jute Bags, Vacuum Pack',
      moq: 'Min Order Qty: 20 MT'
    },
    {
      name: 'Milling Copra (Machine-dried)',
      category: 'INDUSTRIAL SUPPLY',
      description: 'Uniformly dried copra cups with consistent moisture levels. Ideal for large-scale solvent extraction and industrial oil milling. High oil recovery yield.',
      image: millingCopraImg,
      specifications: [
        { label: 'Moisture', value: '4-6%' },
        { label: 'Oil Content', value: '68-72%' },
        { label: 'FFA', value: '< 2%' },
        { label: 'Quality', value: 'FAQ / Rotogravure' }
      ],
      packaging: 'PP Bags (50kg), Bulk Container',
      moq: 'Min Order Qty: 15 MT'
    },
    {
      name: 'Desiccated Coconut Powder',
      category: 'BAKERY & CONFECTIONERY',
      description: 'Finely grated, dried, and unsweetened coconut. Pure white color with fresh coconut flavor. Essential ingredient for biscuits, cakes, chocolates, and savory dishes.',
      image: desiccatedCoconutImg,
      specifications: [
        { label: 'Grade', value: 'Fine / Medium / Chips' },
        { label: 'Fat Content', value: 'High Fat (65%+) / Low Fat' },
        { label: 'Moisture', value: '< 3%' },
        { label: 'Color', value: 'Snow White' }
      ],
      packaging: 'Kraft Paper Bags (25kg) with PE liner',
      moq: 'Min Order Qty: 5 MT'
    },
    {
      name: 'Virgin Coconut Oil',
      category: 'PREMIUM OILS',
      description: 'Cold-pressed from fresh coconut milk. 100% natural, unrefined, and chemical-free. Retains natural antioxidants and vitamin E. Superior choice for cosmetics and health.',
      image: virginCoconutOilImg,
      specifications: [
        { label: 'Extraction', value: 'Cold Pressed / Centrifuge' },
        { label: 'Lauric Acid', value: '48-53%' },
        { label: 'Moisture', value: '< 0.1%' },
        { label: 'Clarity', value: 'Crystal Clear' }
      ],
      packaging: 'IBC Totes, Steel Drums, Glass/PET Bottles',
      moq: 'Min Order Qty: 1000 Liters'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-green-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
            Our Products
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto font-light">
            Export-class coconut products engineered for global industries.
            Sourced responsibly, processed with precision.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-none md:rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Product Image - 40% width on Desktop */}
                <div className="md:col-span-5 h-64 md:h-auto bg-gray-100 relative group overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-none" />
                </div>

                {/* Product Details - 60% width on Desktop */}
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block text-green-600 font-bold text-xs uppercase tracking-widest mb-3">
                      {product.category}
                    </span>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {product.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-gray-100 pt-8">
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Scale className="text-amber-600" size={20} />
                        <h3 className="font-serif font-bold text-gray-900 text-lg">
                          Specifications
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {product.specifications.map((spec, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 mr-2.5 flex-shrink-0" />
                            <span className="font-medium text-gray-900 mr-2">{spec.label}:</span>
                            <span>{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Package className="text-amber-600" size={20} />
                        <h3 className="font-serif font-bold text-gray-900 text-lg">
                          Packaging
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {product.packaging}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                    <button
                      onClick={onOpenInquiry}
                      className="bg-green-800 text-white px-8 py-3.5 rounded text-sm font-bold tracking-wide hover:bg-green-900 transition-colors flex items-center justify-center group"
                    >
                      Request Quote
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="bg-gray-100 px-5 py-2.5 rounded text-sm font-medium text-gray-600 text-center">
                      {product.moq}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Need a Custom Order?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We specialize in fulfilling large-scale industrial requirements.
            Contact our export division for custom specifications and bulk pricing.
          </p>
          <button
            onClick={onOpenInquiry}
            className="border-2 border-green-800 text-green-800 px-8 py-3.5 rounded font-bold hover:bg-green-50 transition-colors"
          >
            Contact Sales Team
          </button>
        </div>
      </section>
    </div>
  );
}
