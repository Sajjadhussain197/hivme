import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Calendar as CalendarIcon, Clock, Tag, Plus } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export default function TaskCreationScreen() {
  return (
    <div className="min-h-screen bg-[#09111F] text-white p-4">
      <div className="max-w-2xl mx-auto bg-[#0B1527] p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Create New Task</h1>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Task Title</Label>
            <Input id="title" placeholder="Enter task title" className="bg-[#12213B] border-[#3371FF] text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter task description" className="bg-[#12213B] border-[#3371FF] text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Due Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal bg-[#12213B] border-[#3371FF] text-white">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Pick a date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[#0B1527]" align="start">
                  <Calendar className="bg-[#0B1527] text-white" />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Priority</Label>
              <Select>
                <SelectTrigger className="bg-[#12213B] border-[#3371FF] text-white">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent className="bg-[#0B1527] text-white">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex items-center space-x-2">
              <Input placeholder="Add a tag" className="bg-[#12213B] border-[#3371FF] text-white" />
              <Button type="button" size="icon" className="bg-[#3371FF] hover:bg-[#2861E0]">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button type="submit" className="w-full bg-[#3371FF] hover:bg-[#2861E0] text-white">
            Create Task
          </Button>
        </form>
      </div>
    </div>
  )
}