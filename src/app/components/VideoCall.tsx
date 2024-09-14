import React from 'react'
import { Button } from '@/components/ui/button'
import { Mic, MicOff, Video, VideoOff, Phone, MessageSquare, Users, MoreVertical } from 'lucide-react'

export default function VideoCallScreen() {
  return (
    <div className="min-h-screen bg-[#09111F] text-white flex flex-col">
      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="relative w-full max-w-4xl aspect-video bg-[#12213B] rounded-lg overflow-hidden">
          <video className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 w-32 h-24 bg-[#0B1527] rounded-lg overflow-hidden">
            <video className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="bg-[#0B1527] p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
              <Mic className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
              <Video className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
              <Users className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-full">
            <Phone className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}