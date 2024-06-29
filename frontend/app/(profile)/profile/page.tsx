'use client'

import { useState } from "react";

import { Progress } from "@/components/ui/progress";

import PersonalInfo from "@/app/components/personalinfo";

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
            <Progress value={25} className="mt-4" />
          </div>
          {profileNumber===1 && <PersonalInfo setProfileNumber={setProfileNumber}/>}
        </div>
      </div>
    </>
  );
};

export default Profile;
