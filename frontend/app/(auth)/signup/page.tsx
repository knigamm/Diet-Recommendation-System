"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { useFormStatus, useFormState } from "react-dom";
import { Loader } from "lucide-react";
import { useState } from "react";

import { signupaction } from "@/app/actions/authactions";

import Link from "next/link";

const initialState = {
  errors: {},
};

const Submitbutton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
        Sign Up
      </Button>
    </>
  );
};

const Signup = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const signupformaction = signupaction.bind(null, isAdmin);
  const [state, formAction] = useFormState(signupformaction, initialState);

  return (
    <div className="flex items-center justify-center min-h-[100dvh] bg-background">
      <Card className="w-full max-w-md p-6 space-y-4 border-none shadow-lg">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-muted-foreground">
            Create your account to get started.
          </p>
        </div>
        <form action={formAction} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstname"
                placeholder="John"
                required
              />
              {state?.errors?.firstname && (
                <div className="text-red-500 text-xs mt-1">
                  {state?.errors?.firstname}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastname" placeholder="Doe" required />
              {state?.errors?.lastname && (
                <div className="text-red-500 text-xs mt-1">
                  {state?.errors?.lastname}
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              required
            />
            {state?.errors?.email && (
              <div className="text-red-500 text-xs mt-1">
                {state?.errors?.email}
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
            {state?.errors?.password && (
              <div className="text-red-500 text-xs mt-1">
                {state?.errors?.password}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isAdmin}
              onCheckedChange={(e) => {
                setIsAdmin(e);
              }}
              id="isAdmin"
            />
            <Label htmlFor="isAdmin">Sign up as an admin</Label>
          </div>
          <Submitbutton />
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="underline" prefetch={false}>
              Sign in
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
