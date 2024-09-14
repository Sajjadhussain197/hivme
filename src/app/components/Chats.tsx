"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Send, Paperclip } from 'lucide-react'

// Mock data for demonstration
const mockMessages = [
  { id: 1, sender: 'Alice', content: "Hey everyone! How's it going?', timestamp: '10:00 AM" },
  { id: 2, sender: 'Bob', content: "Hi Alice! All good here. How about you?', timestamp: '10:02 AM" },
  { id: 3, sender: 'Charlie', content:"'Hello team! I've just finished the report.', timestamp: '10:05 AM" },
  { id: 4, sender: 'Alice', content: "That's great, Charlie! Can you share it with us?', timestamp: '10:07 AM" },
  { id: 5, sender: 'Charlie', content: "Sure thing! I'll send it right away.', timestamp: '10:08 AM" },
]

const mockOnlineUsers = [
  { id: 1, name: 'Alice', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 2, name: 'Bob', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 3, name: 'Charlie', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 4, name: 'David', avatar: '/placeholder.svg?height=32&width=32' },
]

export default function ChatComponent() {
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, message])
      setNewMessage('')
    }
  }

  return (
    <div className="flex h-screen bg-[#09111F] text-white">
      <div className="flex-1 flex flex-col">
        <div className="bg-[#0B1527] p-4 shadow-md">
          <h1 className="text-xl font-bold">Team Chat</h1>
        </div>
        <ScrollArea className="flex-1 p-4">
          {messages.map((message) => (
            <div key={message.id} className="mb-4">
              <div className="flex items-start">
                <Avatar className="w-8 h-8 mr-2">
                  <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={message.sender} />
                  <AvatarFallback>{message.sender[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-baseline">
                    <span className="font-semibold mr-2">{message.sender}</span>
                    {/* <span className="text-xs text-gray-400">{message.timestamp}</span> */}
                  </div>
                  <p className="mt-1 text-sm bg-[#12213B] p-2 rounded-md inline-block">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="bg-[#0B1527] p-4">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 bg-[#12213B] border-[#3371FF] text-white"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-[#3371FF] hover:bg-[#2861E0] text-white"
            >
              <Send className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-[#3371FF]">
              <Paperclip className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-64 bg-[#0B1527] p-4 border-l border-[#12213B]">
        <h2 className="text-lg font-semibold mb-4">Online Users</h2>
        <ScrollArea className="h-full">
          {mockOnlineUsers.map((user) => (
            <div key={user.id} className="flex items-center space-x-2 mb-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <span>{user.name}</span>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}