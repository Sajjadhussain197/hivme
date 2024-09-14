"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Users, FileText, CheckSquare, Clock } from 'lucide-react'

const data = [
  { name: 'Mon', documents: 4, tasks: 3 },
  { name: 'Tue', documents: 3, tasks: 5 },
  { name: 'Wed', documents: 5, tasks: 4 },
  { name: 'Thu', documents: 2, tasks: 3 },
  { name: 'Fri', documents: 4, tasks: 2 },
  { name: 'Sat', documents: 1, tasks: 1 },
  { name: 'Sun', documents: 0, tasks: 0 },
]

export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-[#09111F] text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5   gap-6 mb-8">
        <Card className="bg-[#0B1527] border-[#283d63]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-[#3371FF]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-gray-400">+10% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-[#0B1527] border-[#283d63]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents Created</CardTitle>
            <FileText className="h-4 w-4 text-[#3371FF]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">567</div>
            <p className="text-xs text-gray-400">+5% from last week</p>
          </CardContent>
        </Card>
        <Card className="bg-[#0B1527] border-[#283d63]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <CheckSquare className="h-4 w-4 text-[#3371FF]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-gray-400">+2% from yesterday</p>
          </CardContent>
        </Card>
        <Card className="bg-[#0B1527] border-[#283d63]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
            <Clock className="h-4 w-4 text-[#3371FF]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24m 13s</div>
            <p className="text-xs text-gray-400">-1m from last week</p>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-[#0B1527] border-[#283d63]">
        <CardHeader>
          <CardTitle>Weekly Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="40%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0B1527', border: 'none' }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="documents" fill="#3371FF" />
              <Bar dataKey="tasks" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}