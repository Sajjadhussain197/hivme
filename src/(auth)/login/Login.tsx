import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Mail, Lock, ArrowRight } from 'lucide-react'

export default function LoginScreen() {
  return (
    <div className="min-h-screen bg-[#09111F] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#0B1527] border-[#12213B]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white text-center">Login to Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input id="email" type="email" placeholder="Enter your email" className="pl-10 bg-[#12213B] border-[#3371FF] text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input id="password" type="password" placeholder="Enter your password" className="pl-10 bg-[#12213B] border-[#3371FF] text-white" />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-[#3371FF] hover:bg-[#2861E0] text-white">
            Login <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex justify-between w-full text-sm">
            <a href="#" className="text-[#3371FF] hover:underline">Forgot password?</a>
            <a href="#" className="text-[#3371FF] hover:underline">Create an account</a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}