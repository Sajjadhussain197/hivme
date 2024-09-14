"use client"
import React from 'react'
import { Bell, FileText, CheckSquare, Share2, Video, MessageSquare, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className='min-h-screen  bg-[#09111F] text-white p-8'>
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col gap-20 justify-between bg-[#09111F] text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Welcome, User</h1>
        
      </header>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-8 lg:grid-cols-10 gap-4">
        <Button className="bg-[#3371FF] hover:bg-[#2861E0] text-white"
        onClick={()=>{router.push("/documents")}}
        >
          <FileText className="mr-2 h-4 w-4" /> New Document
        </Button>
        <Button className="bg-[#3371FF] hover:bg-[#2861E0] text-white"
        onClick={()=>{router.push("/task")}}>
          <CheckSquare className="mr-2 h-4 w-4" /> New Task
        </Button>
        <Button className="bg-[#3371FF] hover:bg-[#2861E0] text-white"
        onClick={()=>{router.push("/videocall")}}>
          <Video className="mr-2 h-4 w-4" /> Start Video Call
        </Button>
        <Button className="bg-[#3371FF] hover:bg-[#2861E0] text-white"
        onClick={()=>{router.push("/chat")}}>
          <MessageSquare className="mr-2 h-4 w-4" /> Open Chat
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
        <Card className="bg-[#0B1527] border-[#12213B] text-white">
          <CardHeader>
            <CardTitle className="flex items-center ">
              <FileText className="mr-2" /> Recent Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Document 1</li>
              <li>Document 2</li>
              <li>Document 3</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-[#0B1527] border-[#12213B] text-white">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckSquare className="mr-2" /> Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-[#0B1527] border-[#12213B] text-white">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Share2 className="mr-2" /> Shared Files
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>File 1</li>
              <li>File 2</li>
              <li>File 3</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      

      <footer className="mt-12 flex justify-center items-end">
        <Button variant="link" className="text-[#3371FF]">
          <HelpCircle className="mr-2 h-4 w-4" /> Help Center
        </Button>
      </footer>
    </div>
    
      
    </div>
  )
}