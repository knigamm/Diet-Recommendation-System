/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EiY9Om49HvA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [breakfastItems, setBreakfastItems] = useState([
    { quantity: 2, unit: "units", item: "eggs" },
    { quantity: 2, unit: "slices", item: "Whole wheat toast" },
    { quantity: 1, unit: "glass", item: "Orange juice" },
  ])
  const [lunchItems, setLunchItems] = useState([
    { quantity: 1, unit: "serving", item: "Grilled chicken salad" },
    { quantity: 1, unit: "piece", item: "Apple" },
    { quantity: 16, unit: "oz", item: "Water" },
  ])
  const [dinnerItems, setDinnerItems] = useState([
    { quantity: 6, unit: "oz", item: "Baked salmon" },
    { quantity: 1, unit: "cup", item: "Roasted vegetables" },
    { quantity: 0.5, unit: "cup", item: "Brown rice" },
  ])
  const addBreakfastItem = (item) => {
    setBreakfastItems([...breakfastItems, item])
  }
  const addLunchItem = (item) => {
    setLunchItems([...lunchItems, item])
  }
  const addDinnerItem = (item) => {
    setDinnerItems([...dinnerItems, item])
  }
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">My Meal Plan</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-card rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Breakfast</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  Add
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4">
                <h3 className="text-lg font-semibold mb-4">Add Breakfast Item</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const quantity = e.target.elements["breakfast-quantity"].value
                    const unit = e.target.elements["breakfast-unit"].value
                    const item = e.target.elements["breakfast-item"].value
                    addBreakfastItem({ quantity: Number(quantity), unit, item })
                    e.target.reset()
                  }}
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="breakfast-quantity">Quantity</Label>
                      <Input id="breakfast-quantity" type="number" min="1" defaultValue="1" />
                    </div>
                    <div>
                      <Label htmlFor="breakfast-unit">Unit</Label>
                      <Input id="breakfast-unit" />
                    </div>
                    <div>
                      <Label htmlFor="breakfast-item">Item</Label>
                      <Input id="breakfast-item" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" size="sm">
                      Add
                    </Button>
                  </div>
                </form>
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-4">
            {breakfastItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{`${item.quantity} ${item.unit} ${item.item}`}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Lunch</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  Add
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4">
                <h3 className="text-lg font-semibold mb-4">Add Lunch Item</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const quantity = e.target.elements["lunch-quantity"].value
                    const unit = e.target.elements["lunch-unit"].value
                    const item = e.target.elements["lunch-item"].value
                    addLunchItem({ quantity: Number(quantity), unit, item })
                    e.target.reset()
                  }}
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="lunch-quantity">Quantity</Label>
                      <Input id="lunch-quantity" type="number" min="1" defaultValue="1" />
                    </div>
                    <div>
                      <Label htmlFor="lunch-unit">Unit</Label>
                      <Input id="lunch-unit" />
                    </div>
                    <div>
                      <Label htmlFor="lunch-item">Item</Label>
                      <Input id="lunch-item" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" size="sm">
                      Add
                    </Button>
                  </div>
                </form>
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-4">
            {lunchItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{`${item.quantity} ${item.unit} ${item.item}`}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Dinner</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  Add
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4">
                <h3 className="text-lg font-semibold mb-4">Add Dinner Item</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const quantity = e.target.elements["dinner-quantity"].value
                    const unit = e.target.elements["dinner-unit"].value
                    const item = e.target.elements["dinner-item"].value
                    addDinnerItem({ quantity: Number(quantity), unit, item })
                    e.target.reset()
                  }}
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="dinner-quantity">Quantity</Label>
                      <Input id="dinner-quantity" type="number" min="1" defaultValue="1" />
                    </div>
                    <div>
                      <Label htmlFor="dinner-unit">Unit</Label>
                      <Input id="dinner-unit" />
                    </div>
                    <div>
                      <Label htmlFor="dinner-item">Item</Label>
                      <Input id="dinner-item" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" size="sm">
                      Add
                    </Button>
                  </div>
                </form>
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-4">
            {dinnerItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{`${item.quantity} ${item.unit} ${item.item}`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}