import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-sm text-orange-600 hover:text-orange-800">Forgot password?</a>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-orange-600 hover:bg-orange-700">Sign in</Button>
        </CardFooter>
        <div className="px-8 pb-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-orange-600 hover:text-orange-800">Sign up</a>
        </div>
      </Card>
    </div>
  );
}