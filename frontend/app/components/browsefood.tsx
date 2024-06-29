"use client"
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

const BrowseFood = () => {

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const Router = useRouter();
  const SearchParams = useSearchParams();

  const handleSearch = async (e) => {
    const x = encodeURI(query);
    Router.push(`?q=${x}`);
  };

  const fetchRecipes = async (encodedQuery) => {
    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=b88dc956&app_key=f0640c77eb968177f153e4bc876fa119&q=${encodedQuery}`);
      const data = await response.json();
      setRecipes(data.hits);
      setError(null);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
    }
  };

  useEffect(() => {
    const queryParam = SearchParams.get('q');
    if (queryParam) {
      fetchRecipes(encodeURI(queryParam));
    }
  }, [SearchParams]);

  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-3 mb-8">
        <Input
          type="search"
          placeholder="Search for a food item..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md"
        />
        <Button onClick={handleSearch}
          className="bg-primary text-primary-foreground rounded-md p-2 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <SearchIcon className="h-5 w-5" />
        </Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <section className="w-full py-12">
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Browse Our Menu</h1>
              <p className="text-muted-foreground">Explore our delicious selection of dishes.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <Link href={item.recipe.url} className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src={item.recipe.image}
                  alt={item.recipe.label}
                  width={600}
                  height={400}
                  className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
                />
                <div className="p-4 bg-background">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs">
                      {item.recipe.calories.toFixed(2)} Calories
                    </div>
                    <div className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs">
                      {item.recipe.mealType && item.recipe.mealType[0]}
                    </div>
                    <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs">
                      {item.recipe.dishType && item.recipe.dishType[0]}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold md:text-xl">{item.recipe.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.recipe.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrowseFood;
