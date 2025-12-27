import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

export default function DashboardLanding() {
  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange-900">Dashboard Overview</h1>
          <Button className="bg-orange-600 hover:bg-orange-700">Add New</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-orange-900">$45,231</p>
              <p className="text-sm text-orange-600">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-orange-900">2,420</p>
              <p className="text-sm text-orange-600">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-orange-900">3.6%</p>
              <p className="text-sm text-orange-600">+2.4% from last week</p>
            </CardContent>
          </Card>
        </div>

        <Card className="h-[400px] border-orange-200">
          <CardHeader>
            <CardTitle className="text-orange-800">Analytics Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#FED7AA" />
                <XAxis dataKey="name" stroke="#C2410C" />
                <YAxis stroke="#C2410C" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#EA580C" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <p className="text-orange-900">New user registration</p>
                  <span className="ml-auto text-sm text-orange-600">2 min ago</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <p className="text-orange-900">New order received</p>
                  <span className="ml-auto text-sm text-orange-600">1 hour ago</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <p className="text-orange-900">System update completed</p>
                  <span className="ml-auto text-sm text-orange-600">2 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-24 border-orange-300 text-orange-800 hover:bg-orange-100">
                  Create New Post
                </Button>
                <Button variant="outline" className="h-24 border-orange-300 text-orange-800 hover:bg-orange-100">
                  View Reports
                </Button>
                <Button variant="outline" className="h-24 border-orange-300 text-orange-800 hover:bg-orange-100">
                  Update Profile
                </Button>
                <Button variant="outline" className="h-24 border-orange-300 text-orange-800 hover:bg-orange-100">
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}