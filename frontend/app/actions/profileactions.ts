"use server";

import getuserdetails from "./getuserdetails";
import getSession from "../utils/getSession";
import { redirect } from "next/navigation";

export const createprofile = async (formdata: FormData) => {
  try {
    const userdata = await getuserdetails();
    const authToken = getSession();
    console.log("this", formdata.get("allergy")?.toString());
    const form = {
      first_name: userdata.first_name,
      last_name: userdata.last_name,
      email: userdata.email,
      gender: "male",
      age: 20,
      is_admin: userdata.is_admin,
      profile_complete: true,
      weight: Number(formdata.get("weight")),
      height: Number(formdata.get("height")),
      dietary_preferences: formdata.get("preference")?.toString(),
      allergies: formdata.get("allergy")?.toString(),
      activity: "moderately_active",
      health_goals: "muscle building",
    };
    console.log(form);

    const response = await fetch(`${process.env.BASE_URL}/api/user/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken?.value}`,
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
  redirect("/dashboard");
};
