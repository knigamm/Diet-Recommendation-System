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

const PersonalInfo = ({setProfileNumber}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold">Personal Info</h2>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" placeholder="Enter your age" />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select id="gender">
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="weight">Weight</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter your weight (lbs)"
                />
              </div>
              <div>
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Enter your height (inches)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button onClick={()=>{setProfileNumber((init)=>init+1)}} className="bg-primary text-primary-foreground">Next</Button>
      </div>
    </>
  );
};

export default PersonalInfo;
