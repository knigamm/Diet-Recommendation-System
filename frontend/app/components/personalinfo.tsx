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



const PersonalInfo = ({setProfileNumber}) => {
  return (
    <>
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details to help us personalize your experience.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" placeholder="Enter your age" />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="weight">Weight</Label>
              <Input id="weight" type="number" placeholder="Enter your weight" />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="height">Height</Label>
              <Input id="height" type="number" placeholder="Enter your height" />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="gender">Gender</Label>
              <Select id="gender">
                <SelectTrigger>
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-end">
        <Button onClick={()=>{setProfileNumber((init)=>init+1)}} className="bg-primary text-primary-foreground">Next</Button>
      </div>
    </>
  );
};

export default PersonalInfo;
