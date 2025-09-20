"use client"

import { HardDrive, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <HardDrive className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">ByteWipe</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#platforms" className="text-foreground hover:text-primary transition-colors">
              Platforms
            </a>
            <a href="#wipe" className="text-foreground hover:text-primary transition-colors">
              Data Wipe
            </a>
            <a href="#certificates" className="text-foreground hover:text-primary transition-colors">
              Certificates
            </a>
            <a href="#security" className="text-foreground hover:text-primary transition-colors">
              Security
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex bg-transparent">
              Download
            </Button>
            <Button className="hidden md:inline-flex">Start Wiping</Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <a href="#platforms" className="block py-2 text-foreground hover:text-primary">
              Platforms
            </a>
            <a href="#wipe" className="block py-2 text-foreground hover:text-primary">
              Data Wipe
            </a>
            <a href="#certificates" className="block py-2 text-foreground hover:text-primary">
              Certificates
            </a>
            <a href="#security" className="block py-2 text-foreground hover:text-primary">
              Security
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full bg-transparent">
                Download
              </Button>
              <Button className="w-full">Start Wiping</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
