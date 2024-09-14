import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Save } from 'lucide-react'

export default function DocumentCreationScreen() {
  return (
    <div className="min-h-screen bg-[#09111F] text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <Input 
            type="text" 
            placeholder="Document Title" 
            className="text-2xl font-bold bg-[#0B1527] border-[#3371FF] text-white"
          />
        </div>
        <div className="bg-[#0B1527] p-2 rounded-t-lg flex items-center space-x-2 border-b border-[#12213B]">
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
            <Underline className="h-4 w-4" />
          </Button>
          <div className="w-px h-6 bg-[#12213B]" />
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
            <AlignRight className="h-4 w-4" />
          </Button>
          <div className="w-px h-6 bg-[#12213B]" />
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
            <List className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#12213B]">
            <ListOrdered className="h-4 w-4" />
          </Button>
        </div>
        <textarea 
          className="w-full h-[calc(100vh-200px)] p-4 bg-[#0B1527] text-white rounded-b-lg resize-none focus:outline-none"
          placeholder="Start typing your document here..."
        />
        <div className="mt-4 flex justify-end">
          <Button className="bg-[#3371FF] hover:bg-[#2861E0] text-white">
            <Save className="mr-2 h-4 w-4" /> Save Document
          </Button>
        </div>
      </div>
    </div>
  )
}