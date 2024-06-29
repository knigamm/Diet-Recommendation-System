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


const Healthgoals = ({setProfileNumber}) => {
  return (
    <>
    <div className="max-w-2xl mx-auto px-6 py-8">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Health Goals</CardTitle>
          <CardDescription>Select your health goals to help us personalize your experience.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="build-muscle" />
              <Label htmlFor="build-muscle">Build Muscle</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="lose-weight" />
              <Label htmlFor="lose-weight">Lose Weight</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="improve-endurance" />
              <Label htmlFor="improve-endurance">Improve Endurance</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="improve-flexibility" />
              <Label htmlFor="improve-flexibility">Improve Flexibility</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="improve-nutrition" />
              <Label htmlFor="improve-nutrition">Improve Nutrition</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="manage-stress" />
              <Label htmlFor="manage-stress">Manage Stress</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
      <div className="flex justify-between items-center">
      <Button onClick={()=>{setProfileNumber((init)=>init-1)}} className="bg-primary text-primary-foreground">Back</Button>
        <Button onClick={()=>{setProfileNumber((init)=>init+1)}} className="bg-primary text-primary-foreground">Next</Button>
      </div>
    </>
  );
};

export default Healthgoals;
