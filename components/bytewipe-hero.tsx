"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Zap, FileCheck, Download, Play, ChevronDown } from "lucide-react"

export function ByteWipeHero() {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Secure Data Wiping Made Simple"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const scrollToWipe = () => {
    document.getElementById("wipe")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative container mx-auto px-4 py-20 text-center space-y-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse" />

      <div className="relative z-10 space-y-6">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="relative">
            <Shield className="h-12 w-12 text-primary animate-pulse" />
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ByteWipe
          </h1>
        </div>

        <div className="h-8">
          <p className="text-2xl md:text-3xl font-semibold text-foreground">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Cross-platform data wiping for Windows, Linux, and Android. Military-grade security with one-click simplicity
          and tamper-proof certification.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm relative z-10">
        {[
          { icon: Shield, text: "Military-Grade Security", color: "bg-emerald-500/10 hover:bg-emerald-500/20" },
          { icon: Zap, text: "One-Click Erase", color: "bg-blue-500/10 hover:bg-blue-500/20" },
          { icon: FileCheck, text: "Digital Certificates", color: "bg-purple-500/10 hover:bg-purple-500/20" },
        ].map((feature, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer ${feature.color} border border-primary/20`}
          >
            <feature.icon className="h-4 w-4 text-primary" />
            <span className="font-medium">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
        <Button
          size="lg"
          className="text-lg px-10 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Download className="h-5 w-5 mr-2" />
          Download ByteWipe
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="text-lg px-10 py-4 bg-transparent hover:bg-primary/5 border-2 border-primary/30 hover:border-primary transform hover:scale-105 transition-all duration-300"
          onClick={scrollToWipe}
        >
          <Play className="h-5 w-5 mr-2" />
          Try Demo
        </Button>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToWipe}
      >
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  )
}
