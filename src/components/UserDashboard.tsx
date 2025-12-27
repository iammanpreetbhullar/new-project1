import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Activity, LogIn, Clock, Monitor, Smartphone, MapPin } from 'lucide-react';

export default function UserDashboard() {
  const loginSessions = [
    { id: 1, device: 'Desktop', os: 'Windows 10', browser: 'Chrome', location: 'New York, US', time: '2 hours ago', active: true },
    { id: 2, device: 'Mobile', os: 'iOS 17', browser: 'Safari', location: 'New York, US', time: '5 hours ago', active: false },
    { id: 3, device: 'Desktop', os: 'macOS', browser: 'Firefox', location: 'San Francisco, US', time: '1 day ago', active: false },
    { id: 4, device: 'Tablet', os: 'Android', browser: 'Chrome', location: 'Los Angeles, US', time: '2 days ago', active: false },
  ];

  const recentInteractions = [
    { id: 1, action: 'Updated Profile', timestamp: '2024-01-15 14:30', type: 'profile' },
    { id: 2, action: 'Changed Password', timestamp: '2024-01-15 10:15', type: 'security' },
    { id: 3, action: 'Uploaded Document', timestamp: '2024-01-14 16:45', type: 'content' },
    { id: 4, action: 'Added Payment Method', timestamp: '2024-01-14 09:20', type: 'billing' },
    { id: 5, action: 'Exported Data', timestamp: '2024-01-13 11:30', type: 'data' },
  ];

  const stats = [
    { label: 'Total Sessions', value: '24', icon: LogIn, change: '+12%' },
    { label: 'Active Sessions', value: '1', icon: Activity, change: '0%' },
    { label: 'Avg. Session Time', value: '45m', icon: Clock, change: '+5%' },
    { label: 'Total Interactions', value: '156', icon: Activity, change: '+18%' },
  ];

  const getDeviceIcon = (device: string) => {
    return device === 'Mobile' || device === 'Tablet' ? <Smartphone className="h-4 w-4" /> : <Monitor className="h-4 w-4" />;
  };

  const getActionBadgeVariant = (type: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
      profile: 'default',
      security: 'destructive',
      content: 'secondary',
      billing: 'outline',
      data: 'outline',
    };
    return variants[type] || 'default';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">User Dashboard</h1>
            <p className="text-slate-600 mt-1">Monitor your account activity and login sessions</p>
          </div>
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">{stat.label}</CardTitle>
                <stat.icon className="h-4 w-4 text-slate-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <p className="text-xs text-green-600 mt-1">{stat.change} from last week</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogIn className="h-5 w-5 text-blue-600" />
                Login Sessions
              </CardTitle>
              <CardDescription>Active and recent login sessions across devices</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Device</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loginSessions.map((session) => (
                    <TableRow key={session.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getDeviceIcon(session.device)}
                          <div>
                            <div className="font-medium text-sm">{session.device}</div>
                            <div className="text-xs text-slate-500">{session.os} • {session.browser}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-3 w-3 text-slate-400" />
                          {session.location}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-slate-600">{session.time}</TableCell>
                      <TableCell>
                        {session.active ? (
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
                        ) : (
                          <Badge variant="outline" className="text-slate-500">Inactive</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-600" />
                Recent Interactions
              </CardTitle>
              <CardDescription>Your recent account activities and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInteractions.map((interaction) => (
                  <div key={interaction.id} className="flex items-start justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex-1">
                      <div className="font-medium text-sm text-slate-900">{interaction.action}</div>
                      <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {interaction.timestamp}
                      </div>
                    </div>
                    <Badge variant={getActionBadgeVariant(interaction.type)} className="ml-2">
                      {interaction.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Session Activity Timeline</CardTitle>
            <CardDescription>Visualize your login patterns over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-end justify-between gap-2">
              {[12, 18, 15, 22, 19, 25, 20].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition-colors cursor-pointer"
                    style={{ height: `${height * 4}px` }}
                    title={`${height} sessions`}
                  />
                  <span className="text-xs text-slate-500">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}