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
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const DietaryInfo = ({setProfileNumber}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Dietary Preferences</CardTitle>
          <CardDescription>Select your dietary preferences to help us personalize your meal plan.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Card variant="outline" className="p-4 cursor-pointer hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <Checkbox id="vegan" />
                <Label htmlFor="vegan">Vegan</Label>
              </div>
            </Card>
            <Card variant="outline" className="p-4 cursor-pointer hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <Checkbox id="vegetarian" />
                <Label htmlFor="vegetarian">Vegetarian</Label>
              </div>
            </Card>
            <Card variant="outline" className="p-4 cursor-pointer hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <Checkbox id="pescatarian" />
                <Label htmlFor="pescatarian">Pescatarian</Label>
              </div>
            </Card>
            <Card variant="outline" className="p-4 cursor-pointer hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <Checkbox id="omnivore" />
                <Label htmlFor="omnivore">Omnivore</Label>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-end">
        <Button onClick={()=>{setProfileNumber((init)=>init+1)}} className="bg-primary text-primary-foreground">Next</Button>
      </div>
    </>
  );
};

export default DietaryInfo;
