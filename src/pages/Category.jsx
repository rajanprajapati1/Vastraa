import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mock';

const Category = () => {
  const { slug } = useParams();
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    subcategories: [],
    colors: [],
    priceRange: [0, 1000],
    sizes: []
  });

  const category = categories.find(cat => cat.slug === slug);
  
  const categoryProducts = useMemo(() => {
    let filtered = products.filter(p => p.category === slug);

    // Apply subcategory filters
    if (filters.subcategories.length > 0) {
      filtered = filtered.filter(p => filters.subcategories.includes(p.subcategory));
    }

    // Apply color filters
    if (filters.colors.length > 0) {
      filtered = filtered.filter(p => 
        p.colors && p.colors.some(color => filters.colors.includes(color))
      );
    }

    // Apply price filter
    filtered = filtered.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Apply size filters
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(p => 
        p.sizes && p.sizes.some(size => filters.sizes.includes(size))
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'name':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'newest':
      default:
        return filtered.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
    }
  }, [slug, filters, sortBy]);

  const toggleFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      subcategories: [],
      colors: [],
      priceRange: [0, 1000],
      sizes: []
    });
  };

  const categoryProductsForFilters = products.filter(p => p.category === slug);
  const subcategories = category?.subcategories || [];
  const availableColors = [...new Set(categoryProductsForFilters.flatMap(p => p.colors || []))];
  const availableSizes = [...new Set(categoryProductsForFilters.flatMap(p => p.sizes || []))];

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Category not found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl font-light text-white tracking-wide">
            {category.name}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <p className="text-gray-600">
            {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'}
          </p>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-black transition-colors duration-200"
            >
              <Filter size={16} />
              Filters
            </button>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-gray-50 p-6 rounded-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Filters</h3>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Subcategory Filter */}
              {subcategories.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Type</h4>
                  <div className="space-y-2">
                    {subcategories.map(subcat => (
                      <label key={subcat} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.subcategories.includes(subcat)}
                          onChange={() => toggleFilter('subcategories', subcat)}
                          className="mr-2"
                        />
                        <span className="text-sm">{subcat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Filter */}
              {availableColors.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Color</h4>
                  <div className="space-y-2">
                    {availableColors.map(color => (
                      <label key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.colors.includes(color)}
                          onChange={() => toggleFilter('colors', color)}
                          className="mr-2"
                        />
                        <span className="text-sm">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Filter */}
              {availableSizes.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Size</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {availableSizes.map(size => (
                      <button
                        key={size}
                        onClick={() => toggleFilter('sizes', size)}
                        className={`py-2 px-3 text-sm border transition-colors duration-200 ${
                          filters.sizes.includes(size)
                            ? 'border-black bg-black text-white'
                            : 'border-gray-300 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {categoryProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                <button 
                  onClick={clearFilters}
                  className="text-black underline hover:no-underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;