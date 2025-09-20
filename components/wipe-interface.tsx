"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { HardDrive, Play, CheckCircle, AlertTriangle, Cpu, Shield, FileCheck } from "lucide-react"

export function WipeInterface() {
  const [isWiping, setIsWiping] = useState(false)
  const [progress, setProgress] = useState(0)
  const [selectedDrive, setSelectedDrive] = useState("")
  const [currentStep, setCurrentStep] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleOneClickWipe = () => {
    setIsWiping(true)
    setProgress(0)
    setShowSuccess(false)

    const steps = [
      { range: [0, 15], text: "Initializing secure wipe protocols..." },
      { range: [15, 25], text: "Analyzing drive structure and partitions..." },
      { range: [25, 40], text: "Detecting hidden areas (HPA/DCO)..." },
      { range: [40, 65], text: "Overwriting with DoD 5220.22-M patterns..." },
      { range: [65, 80], text: "Wiping SSD spare sectors..." },
      { range: [80, 95], text: "Final verification pass..." },
      { range: [95, 100], text: "Generating tamper-proof certificate..." },
    ]

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (Math.random() * 2 + 0.5)

        // Update current step based on progress
        const currentStepData = steps.find((step) => newProgress >= step.range[0] && newProgress < step.range[1])
        if (currentStepData) {
          setCurrentStep(currentStepData.text)
        }

        if (newProgress >= 100) {
          clearInterval(interval)
          setIsWiping(false)
          setShowSuccess(true)
          setCurrentStep("Wipe completed successfully!")
          return 100
        }
        return Math.min(newProgress, 100)
      })
    }, 150)
  }

  const driveInfo = {
    "c-drive": { size: "500 GB", type: "NVMe SSD", health: "Excellent", temp: "42°C" },
    "d-drive": { size: "1 TB", type: "SATA HDD", health: "Good", temp: "38°C" },
    "usb-drive": { size: "32 GB", type: "USB 3.0", health: "Good", temp: "35°C" },
    "android-internal": { size: "128 GB", type: "eMMC", health: "Excellent", temp: "40°C" },
  }

  return (
    <section id="wipe" className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          One-Click Secure Erase
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Select your drive and securely wipe all data with military-grade algorithms
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2 border-2 border-primary/20 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle className="flex items-center gap-2 text-xl">
              <HardDrive className="h-6 w-6 text-primary" />
              Drive Selection & Wipe Control
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">Select Drive to Wipe</label>
              <Select value={selectedDrive} onValueChange={setSelectedDrive}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Choose a drive..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="c-drive">C:\ - System Drive (500 GB NVMe SSD)</SelectItem>
                  <SelectItem value="d-drive">D:\ - Data Drive (1 TB SATA HDD)</SelectItem>
                  <SelectItem value="usb-drive">USB Drive (32 GB USB 3.0)</SelectItem>
                  <SelectItem value="android-internal">Android Internal Storage (128 GB eMMC)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedDrive && driveInfo[selectedDrive as keyof typeof driveInfo] && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg border">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Size</p>
                  <p className="font-semibold">{driveInfo[selectedDrive as keyof typeof driveInfo].size}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-semibold">{driveInfo[selectedDrive as keyof typeof driveInfo].type}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Health</p>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {driveInfo[selectedDrive as keyof typeof driveInfo].health}
                  </Badge>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Temp</p>
                  <p className="font-semibold">{driveInfo[selectedDrive as keyof typeof driveInfo].temp}</p>
                </div>
              </div>
            )}

            {selectedDrive && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span className="font-semibold text-destructive">Critical Warning: Irreversible Action</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All data on the selected drive will be permanently destroyed using DoD 5220.22-M standards. Hidden
                  areas including HPA/DCO and SSD spare sectors will be completely wiped. This action cannot be undone.
                </p>
              </div>
            )}

            {isWiping && (
              <div className="space-y-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Wiping Progress</span>
                  <span className="text-2xl font-bold text-primary">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-3" />
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                  <p className="text-sm font-medium text-primary">{currentStep}</p>
                </div>
              </div>
            )}

            {showSuccess && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">Wipe Completed Successfully!</span>
                </div>
                <p className="text-sm text-green-700">
                  Digital certificate generated and ready for download. All data has been securely destroyed.
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-100 bg-transparent"
                  >
                    <FileCheck className="h-4 w-4 mr-2" />
                    Download PDF Certificate
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-100 bg-transparent"
                  >
                    Download JSON Report
                  </Button>
                </div>
              </div>
            )}

            <Button
              onClick={handleOneClickWipe}
              disabled={!selectedDrive || isWiping}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              {isWiping ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3" />
                  Wiping in Progress...
                </>
              ) : showSuccess ? (
                <>
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Wipe Complete - Generate New Certificate
                </>
              ) : (
                <>
                  <Play className="h-5 w-5 mr-3" />
                  Start One-Click Secure Wipe
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Security Features Active
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Shield, title: "DoD 5220.22-M", desc: "Military-grade overwrite patterns" },
                { icon: Cpu, title: "Hardware Level", desc: "Direct drive controller access" },
                { icon: FileCheck, title: "Verification", desc: "Cryptographic proof of deletion" },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <feature.icon className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
