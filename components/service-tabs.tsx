"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HardDrive, Recycle, FileCheck, Clock, Shield, Award } from "lucide-react"

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("wiping")

  return (
    <section id="services" className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-muted-foreground">Comprehensive data destruction and asset recycling solutions</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="wiping" className="flex items-center gap-2">
            <HardDrive className="h-4 w-4" />
            Data Wiping
          </TabsTrigger>
          <TabsTrigger value="recycling" className="flex items-center gap-2">
            <Recycle className="h-4 w-4" />
            Asset Recycling
          </TabsTrigger>
          <TabsTrigger value="compliance" className="flex items-center gap-2">
            <FileCheck className="h-4 w-4" />
            Compliance Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="wiping" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    DoD 5220.22-M Standard
                  </CardTitle>
                  <Badge variant="secondary">Most Popular</Badge>
                </div>
                <CardDescription>Military-grade 3-pass overwrite method for maximum security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    3-pass overwrite process
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Verification after each pass
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Certificate of destruction
                  </li>
                </ul>
                <Button className="w-full">Schedule Wiping</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    NIST 800-88 Standard
                  </CardTitle>
                  <Badge>Enterprise</Badge>
                </div>
                <CardDescription>Advanced purging methods for high-security environments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Cryptographic erasure
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Block erasure verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Detailed audit trail
                  </li>
                </ul>
                <Button className="w-full">Schedule Wiping</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recycling" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Asset Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Secure pickup and transportation of IT assets with chain of custody documentation.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Schedule Pickup
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-primary" />
                  Data Sanitization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete data destruction before recycling using industry-standard methods.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Recycle className="h-5 w-5 text-primary" />
                  Material Recovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Environmentally responsible recycling with maximum value recovery.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Documentation</CardTitle>
              <CardDescription>Comprehensive reporting and certification for regulatory compliance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Included Reports:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Certificate of Data Destruction</li>
                    <li>• Chain of Custody Documentation</li>
                    <li>• Environmental Impact Report</li>
                    <li>• Asset Inventory Summary</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Compliance Standards:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• HIPAA</li>
                    <li>• SOX</li>
                    <li>• GDPR</li>
                    <li>• ISO 27001</li>
                  </ul>
                </div>
              </div>
              <Button className="w-full md:w-auto">Download Sample Report</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
