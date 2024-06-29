'use client'

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const AllergiesInfo = ({setProfileNumber}) => {
  return (
    <>
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Dietary Allergies</CardTitle>
          <CardDescription>Select any dietary allergies to help us personalize your meal plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="peanut" />
              <label
                htmlFor="peanut"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Peanut
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="tree-nut" />
              <label
                htmlFor="tree-nut"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Tree Nut
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="shellfish" />
              <label
                htmlFor="shellfish"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Shellfish
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="dairy" />
              <label
                htmlFor="dairy"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Dairy
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="gluten" />
              <label
                htmlFor="gluten"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gluten
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="soy" />
              <label
                htmlFor="soy"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Soy
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button onClick={()=>{setProfileNumber((init)=>init-1)}} className="bg-primary text-primary-foreground">Back</Button>

        <Button onClick={()=>{setProfileNumber((init)=>init+1)}} className="bg-primary text-primary-foreground">Next</Button>
      </div>
    </>
  );
};

export default AllergiesInfo;
