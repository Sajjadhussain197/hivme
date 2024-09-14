import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Upload, File, X } from 'lucide-react'

export default function FileUploadScreen() {
  return (
    <div className="min-h-screen bg-[#09111F] text-white p-4">
      <div className="max-w-2xl mx-auto bg-[#0B1527] p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Upload Files</h1>
        <div className="space-y-6">
          <div className="border-2 border-dashed border-[#3371FF] rounded-lg p-8 text-center">
            <Upload className="mx-auto h-12 w-12 text-[#3371FF] mb-4" />
            <p className="text-lg mb-2">Drag and drop files here</p>
            <p className="text-sm text-gray-400 mb-4">or</p>
            <Button className="bg-[#3371FF] hover:bg-[#2861E0] text-white">
              Select Files
            </Button>
            <Input type="file" className="hidden" />
          </div>
          <div className="space-y-4">
            <div className="bg-[#12213B] p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <File className="h-8 w-8 text-[#3371FF]" />
                <div>
                  <p className="font-medium">document.pdf</p>
                  <p className="text-sm text-gray-400">2.5 MB</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Uploading...</span>
                <span>50%</span>
              </div>
              {/* <Progress value={50} className="h-2 bg-[#12213B]" indicatorClassName="bg-[#3371FF]" /> */}
            </div>
          </div>
          <Button className="w-full bg-[#3371FF] hover:bg-[#2861E0] text-white">
            Upload Files
          </Button>
        </div>
      </div>
    </div>
  )
}