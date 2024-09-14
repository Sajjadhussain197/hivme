import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Book, MessageCircle, FileQuestion, ChevronRight } from 'lucide-react'

export default function HelpCenterScreen() {
  return (
    <div className="min-h-screen bg-[#09111F] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Help Center</h1>
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search for help..." 
              className="pl-10 bg-[#0B1527] border-[#3371FF] text-white w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#0B1527] border-[#12213B]">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="mr-2 h-5 w-5 text-[#3371FF]" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Explore our comprehensive guides and tutorials</p>
              <Button variant="outline" className="w-full justify-between">
                Browse Docs <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-[#0B1527] border-[#12213B]">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-[#3371FF]" />
                Community Forum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Connect with other users and share your experiences</p>
              <Button variant="outline" className="w-full justify-between">
                Join Discussion <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {['How do I create a new document?', 'Can I share files with external users?', 'How do I reset my password?', 'What are the subscription plans?'].map((question, index) => (
            <Card key={index} className="bg-[#0B1527] border-[#12213B]">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <FileQuestion className="mr-2 h-5 w-5 text-[#3371FF]" />
                  {question}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="mb-4">Can't find what you're looking for?</p>
          <Button className="bg-[#3371FF] hover:bg-[#2861E0] text-white">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  )
}