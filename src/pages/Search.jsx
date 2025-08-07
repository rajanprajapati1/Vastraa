import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mock';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [sortBy, setSortBy] = useState('relevance');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    let filtered = products.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      (product.subcategory && product.subcategory.toLowerCase().includes(lowerQuery)) ||
      (product.colors && product.colors.some(color => 
        color.toLowerCase().includes(lowerQuery)
      ))
    );

    // Sort results
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'name':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'relevance':
      default:
        // Sort by name match first, then by other criteria
        return filtered.sort((a, b) => {
          const aNameMatch = a.name.toLowerCase().includes(lowerQuery);
          const bNameMatch = b.name.toLowerCase().includes(lowerQuery);
          
          if (aNameMatch && !bNameMatch) return -1;
          if (!aNameMatch && bNameMatch) return 1;
          
          // Secondary sort by trending/new
          if (a.isTrending && !b.isTrending) return -1;
          if (!a.isTrending && b.isTrending) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          
          return 0;
        });
    }
  }, [query, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-light text-gray-900 mb-2">
              Search Results
            </h1>
            {query && (
              <p className="text-gray-600">
                {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for "{query}"
              </p>
            )}
          </div>
          
          {searchResults.length > 0 && (
            <div className="mt-4 md:mt-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
              >
                <option value="relevance">Most Relevant</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          )}
        </div>

        {/* Search Results */}
        {!query.trim() ? (
          <div className="text-center py-12">
            <SearchIcon size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Enter a search term</h3>
            <p className="text-gray-500">Use the search bar above to find products</p>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="text-center py-12">
            <SearchIcon size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500 mb-6">
              We couldn't find any products matching "{query}"
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Try:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Checking your spelling</li>
                <li>Using different keywords</li>
                <li>Searching for more general terms</li>
                <li>Browsing our categories instead</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;