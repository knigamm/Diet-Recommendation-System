"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [dietaryFilters, setDietaryFilters] = useState({
    vegetarian: false,
    glutenFree: false,
    lowCalorie: false,
  })
  const [foods, setFoods] = useState([])
  useEffect(() => {
    const filteredFoods = [
      {
        id: 1,
        image: "/placeholder.svg",
        name: "Grilled Salmon",
        description: "Succulent salmon fillet grilled to perfection.",
        dietary: {
          vegetarian: false,
          glutenFree: true,
          lowCalorie: false,
        },
      },
      {
        id: 2,
        image: "/placeholder.svg",
        name: "Quinoa Salad",
        description: "Nutrient-rich quinoa with fresh vegetables.",
        dietary: {
          vegetarian: true,
          glutenFree: true,
          lowCalorie: true,
        },
      },
      {
        id: 3,
        image: "/placeholder.svg",
        name: "Chicken Stir-Fry",
        description: "Tender chicken and crisp vegetables in a savory sauce.",
        dietary: {
          vegetarian: false,
          glutenFree: true,
          lowCalorie: false,
        },
      },
      {
        id: 4,
        image: "/placeholder.svg",
        name: "Roasted Vegetables",
        description: "A medley of seasonal vegetables, roasted to perfection.",
        dietary: {
          vegetarian: true,
          glutenFree: true,
          lowCalorie: true,
        },
      },
      {
        id: 5,
        image: "/placeholder.svg",
        name: "Lentil Soup",
        description: "Hearty lentil soup, packed with protein and fiber.",
        dietary: {
          vegetarian: true,
          glutenFree: true,
          lowCalorie: true,
        },
      },
      {
        id: 6,
        image: "/placeholder.svg",
        name: "Grilled Chicken Salad",
        description: "Tender grilled chicken atop a bed of fresh greens.",
        dietary: {
          vegetarian: false,
          glutenFree: true,
          lowCalorie: true,
        },
      },
    ].filter((food) => {
      const { vegetarian, glutenFree, lowCalorie } = dietaryFilters
      return (
        food.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!vegetarian || food.dietary.vegetarian) &&
        (!glutenFree || food.dietary.glutenFree) &&
        (!lowCalorie || food.dietary.lowCalorie)
      )
    })
    setFoods(filteredFoods)
  }, [searchTerm, dietaryFilters])
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Input
          type="search"
          placeholder="Search for a food item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md"
        />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Dietary Filters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              id="vegetarian"
              checked={dietaryFilters.vegetarian}
              onCheckedChange={(e) =>
                setDietaryFilters((prev) => ({
                  ...prev,
                  vegetarian: e.target.checked,
                }))
              }
            />
            <Label htmlFor="vegetarian">Vegetarian</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="glutenFree"
              checked={dietaryFilters.glutenFree}
              onCheckedChange={(e) =>
                setDietaryFilters((prev) => ({
                  ...prev,
                  glutenFree: e.target.checked,
                }))
              }
            />
            <Label htmlFor="glutenFree">Gluten-Free</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="lowCalorie"
              checked={dietaryFilters.lowCalorie}
              onCheckedChange={(e) =>
                setDietaryFilters((prev) => ({
                  ...prev,
                  lowCalorie: e.target.checked,
                }))
              }
            />
            <Label htmlFor="lowCalorie">Low-Calorie</Label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods.length === 0 ? (
          <div className="col-span-full flex justify-center items-center h-64 text-muted-foreground">
            No results found
          </div>
        ) : (
          foods.map((food) => (
            <Card key={food.id} className="overflow-hidden">
              <img
                src="/placeholder.svg"
                alt={food.name}
                width={400}
                height={300}
                className="object-cover w-full aspect-[4/3]"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">{food.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{food.description}</p>
                <div className="flex items-center gap-2">
                  {food.dietary.vegetarian && (
                    <Badge variant="outline" className="bg-green-500 text-green-50">
                      Vegetarian
                    </Badge>
                  )}
                  {food.dietary.glutenFree && (
                    <Badge variant="outline" className="bg-yellow-500 text-yellow-50">
                      Gluten-Free
                    </Badge>
                  )}
                  {food.dietary.lowCalorie && (
                    <Badge variant="outline" className="bg-blue-500 text-blue-50">
                      Low-Calorie
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}