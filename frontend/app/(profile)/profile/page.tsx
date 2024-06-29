'use client'

import { useState } from "react";

import { Progress } from "@/components/ui/progress";

import PersonalInfo from "@/app/components/personalinfo";
import DietaryInfo from "@/app/components/dietaryinfo";
import AllergiesInfo from "@/app/components/allergies";
import Healthgoals from "@/app/components/healthgoals";

const Profile = () => {

    const [profileNumber,setProfileNumber] = useState(1)
  return (
    <>
      <div className="w-full max-w-3xl mx-auto py-16 px-6 md:px-8">
        <div className="space-y-12">
          <div>
            <h1 className="text-3xl font-bold">User Profile</h1>
            <p className="text-muted-foreground mt-2">
              Update your personal information.
            </p>
            <Progress value={25*profileNumber} className="mt-4" />
          </div>
          {profileNumber===1 && <PersonalInfo setProfileNumber={setProfileNumber}/>}
          {profileNumber===2 && <DietaryInfo setProfileNumber={setProfileNumber}/>}
          {profileNumber===3 && <AllergiesInfo setProfileNumber={setProfileNumber}/>}
          {profileNumber===4 && <Healthgoals setProfileNumber={setProfileNumber}/>}
        </div>
      </div>
    </>
  );

 
};




export default Profile;
