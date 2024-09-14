'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import {
  Home,
  FileText,
  CheckSquare,
  Upload,
  Video,
  BarChart,
  HelpCircle,
  Menu,
  LogOut,
  Bell,
} from 'lucide-react'

const routes = [
  { name: 'Dashboard', path: '/dashboard', icon: Home },
  { name: 'Documents', path: '/documents', icon: FileText },
  { name: 'Tasks', path: '/task', icon: CheckSquare },
  { name: 'File Upload', path: '/fileshare', icon: Upload },
  { name: 'Video Call', path: '/videocall', icon: Video },
  { name: 'Analytics', path: '/analytic-dashboard', icon: BarChart },
  { name: 'Help Center', path: '/help-center', icon: HelpCircle },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-[#0B1527] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold">SaaSApp</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex flex-row items-baseline space-x-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium',
                    pathname === route.path
                      ? 'bg-[#3371FF] text-white'
                      : 'text-gray-300 hover:bg-[#12213B] hover:text-white'
                  )}
                >
                  {route.name}
                </Link>
              ))}
            </div>
            
          </div>
          <div className="hidden md:block ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full bg-white hover:bg-[#5190fc]">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="User"
                    className="rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
           
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-[#5190fc]">
          <Bell className="h-6 w-6" />
        </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-2" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#0B1527]">
                <nav className="flex flex-col space-y-4 mt-4">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={cn(
                        'flex items-center px-3 py-2 rounded-md text-sm font-medium',
                        pathname === route.path
                          ? 'bg-[#3371FF] text-white'
                          : 'text-gray-300 hover:bg-[#12213B] hover:text-white'
                      )}
                    >
                      <route.icon className="mr-3 h-5 w-5" />
                      {route.name}
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t border-[#12213B]">
                    <Button variant="ghost" className="w-full justify-start text-white">
                      <LogOut className="mr-3 h-5 w-5" />
                      Log out
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}