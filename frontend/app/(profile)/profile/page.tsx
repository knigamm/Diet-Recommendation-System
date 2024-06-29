"use client";


import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";


import { Button } from "@/components/ui/button";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { useState } from "react";

import { Progress } from "@/components/ui/progress";

import { createprofile } from "@/app/actions/profileactions";

const Profile = () => {
  const [preference, setPreference] = useState("");
  const [allergies, setAllergies] = useState("");
  const [healthgoals, setHealthgoals] = useState("");

  const handleHandle = (health: string, e: boolean) => {
    if (e) {
      let a = "";
      if (healthgoals.length == 0) {
        a = `${healthgoals}` + health;
      } else {
        a = `${healthgoals}` + ";" + health;
      }
      setHealthgoals(a);
      console.log(a);
    } else {
      const h = healthgoals
        .split(";")
        .filter((a) => a != health)
        .join(";");
      setHealthgoals(h);
      console.log(h);
    }
  };

  const handleAllergies = (allergy: string, e) => {
    if (e) {
      let a = "";
      if (allergies.length == 0) {
        a = `${allergies}` + allergy;
      } else {
        a = `${allergies}` + ";" + allergy;
      }
      setAllergies(a);
    } else {
      const h = allergies
        .split(";")
        .filter((a) => a != allergy)
        .join(";");
      setAllergies(h);
    }
  };
  const [gender, onGenderChange] = useState(null);
  return (
    <>
      <div className="w-full max-w-3xl mx-auto py-16 px-6 md:px-8">
        <div className="space-y-12">
          <div>
            <h1 className="text-3xl font-bold">User Profile</h1>
            <p className="text-muted-foreground mt-2">
              Update your personal information.
            </p>
          </div>
          <form action={createprofile}>
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details to help us personalize your
                  experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      name="age"
                      placeholder="Enter your age"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="weight">Weight</Label>
                    <Input
                      id="weight"
                      type="number"
                      name="weight"
                      placeholder="Enter your weight"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      type="number"
                      name="height"
                      placeholder="Enter your height (in cm)"
                    />
                  </div>
                  <input type="hidden" name="gender" value={gender} />
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      id="gender"
                      onValueChange={(value) => onGenderChange(value)}
                      defaultValue="male"
                    >
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

            <input type="hidden" name="preference" value={preference} />
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Dietary Preferences</CardTitle>
                <CardDescription>
                  Select your dietary preferences to help us personalize your
                  meal plan.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card
                    variant="outline"
                    className="p-4 cursor-pointer hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="vegan"
                        value="vegan"
                        onCheckedChange={(e) => {
                          setPreference("vegan");
                        }}
                      />
                      <Label htmlFor="vegan">Vegan</Label>
                    </div>
                  </Card>
                  <Card
                    variant="outline"
                    className="p-4 cursor-pointer hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="vegetarian"
                        value="vegetarian"
                        onCheckedChange={(e) => {
                          setPreference("vegetarian");
                        }}
                      />
                      <Label htmlFor="vegetarian">Vegetarian</Label>
                    </div>
                  </Card>
                  <Card
                    variant="outline"
                    className="p-4 cursor-pointer hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="pescatarian"
                        value="pescatarian"
                        onCheckedChange={(e) => {
                          setPreference("pescatarian");
                        }}
                      />
                      <Label htmlFor="pescatarian">Pescatarian</Label>
                    </div>
                  </Card>
                  <Card
                    variant="outline"
                    className="p-4 cursor-pointer hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="omnivore"
                        value="omnivore"
                        onCheckedChange={(e) => {
                          setPreference("omnivore");
                        }}
                      />
                      <Label htmlFor="omnivore">Omnivore</Label>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-between items-center mt-4"></div>
            <input type="hidden" name="allergy" value={allergies} />
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Dietary Allergies</CardTitle>
                <CardDescription>
                  Select any dietary allergies to help us personalize your meal
                  plan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="peanut"
                      onCheckedChange={(e) => handleAllergies("peanut", e)}
                    />
                    <label
                      htmlFor="peanut"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Peanut
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="tree-nut"
                      onCheckedChange={(e) => handleAllergies("tree-nut", e)}
                    />
                    <label
                      htmlFor="tree-nut"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Tree Nut
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="shellfish"
                      onCheckedChange={(e) => handleAllergies("shellfish", e)}
                    />
                    <label
                      htmlFor="shellfish"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Shellfish
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="dairy"
                      onCheckedChange={(e) => handleAllergies("dairy", e)}
                    />
                    <label
                      htmlFor="dairy"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Dairy
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="gluten"
                      onCheckedChange={(e) => handleAllergies("gluten", e)}
                    />
                    <label
                      htmlFor="gluten"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Gluten
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="soy"
                      onCheckedChange={(e) => handleAllergies("soy", e)}
                    />
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

            <div className="flex justify-between mt-4"></div>
            <input type="hidden" value={healthgoals} name="health" />
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Health Goals</CardTitle>
                <CardDescription>
                  Select your health goals to help us personalize your
                  experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="build-muscle"
                      onCheckedChange={(e) => {
                        handleHandle("build muscle", e);
                        console.log(e);
                      }}
                    />
                    <Label htmlFor="build-muscle">Build Muscle</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="lose-weight"
                      onCheckedChange={(e) => handleHandle("lose weight", e)}
                    />
                    <Label htmlFor="lose-weight">Lose Weight</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="improve-endurance"
                      onCheckedChange={(e) =>
                        handleHandle("improve endurance", e)
                      }
                    />
                    <Label htmlFor="improve-endurance">Improve Endurance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="improve-flexibility"
                      onCheckedChange={(e) =>
                        handleHandle("improve flexibility", e)
                      }
                    />
                    <Label htmlFor="improve-flexibility">
                      Improve Flexibility
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="improve-nutrition"
                      onCheckedChange={(e) =>
                        handleHandle("improve nutrition", e)
                      }
                    />
                    <Label htmlFor="improve-nutrition">Improve Nutrition</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="manage-stress"
                      onCheckedChange={(e) => handleHandle("manage stress", e)}
                    />
                    <Label htmlFor="manage-stress">Manage Stress</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between items-center mt-4">
              <Button
                type="submit"
                className="bg-primary text-primary-foreground"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
