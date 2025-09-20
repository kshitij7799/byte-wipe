"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Server, CheckCircle, Download, ExternalLink } from "lucide-react"

export function PlatformSupport() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)

  const platforms = [
    {
      icon: Monitor,
      name: "Windows",
      description: "Full support for Windows 10/11 with NTFS, FAT32, and exFAT file systems",
      features: ["HPA/DCO Detection", "SSD Spare Sectors", "Registry Cleaning"],
      specs: {
        minVersion: "Windows 10 (Build 1903+)",
        architecture: "x64, ARM64",
        fileSize: "12.4 MB",
        lastUpdated: "2024-01-15",
      },
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10 hover:bg-blue-500/20",
    },
    {
      icon: Server,
      name: "Linux",
      description: "Compatible with major Linux distributions including Ubuntu, CentOS, and RHEL",
      features: ["ext4/ext3/ext2 Support", "Secure Boot Compatible", "Command Line Interface"],
      specs: {
        minVersion: "Kernel 4.15+",
        architecture: "x86_64, ARM64",
        fileSize: "8.7 MB",
        lastUpdated: "2024-01-15",
      },
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10 hover:bg-orange-500/20",
    },
    {
      icon: Smartphone,
      name: "Android",
      description: "Android 8.0+ support with root and non-root wiping capabilities",
      features: ["Internal Storage", "SD Card Wiping", "App Data Removal"],
      specs: {
        minVersion: "Android 8.0 (API 26+)",
        architecture: "ARM64, x86_64",
        fileSize: "15.2 MB",
        lastUpdated: "2024-01-12",
      },
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10 hover:bg-green-500/20",
    },
  ]

  return (
    <section id="platforms" className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Cross-Platform Support
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          ByteWipe runs seamlessly across Windows, Linux, and Android platforms
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {platforms.map((platform) => (
          <Card
            key={platform.name}
            className={`text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${
              selectedPlatform === platform.name
                ? "border-primary shadow-lg"
                : "border-transparent hover:border-primary/30"
            }`}
            onClick={() => setSelectedPlatform(selectedPlatform === platform.name ? null : platform.name)}
          >
            <CardHeader>
              <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${platform.color} rounded-2xl w-fit shadow-lg`}>
                <platform.icon className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                {platform.name}
                <Badge variant="secondary" className="text-xs">
                  Latest
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{platform.description}</p>

              <ul className="space-y-3 text-sm">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2 group">
                    <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-primary transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              {selectedPlatform === platform.name && (
                <div className="mt-4 p-4 bg-muted/50 rounded-lg border space-y-3 animate-in slide-in-from-top-2">
                  <h4 className="font-semibold text-sm text-primary">System Requirements</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Min Version:</span>
                      <p className="font-medium">{platform.specs.minVersion}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Architecture:</span>
                      <p className="font-medium">{platform.specs.architecture}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">File Size:</span>
                      <p className="font-medium">{platform.specs.fileSize}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Updated:</span>
                      <p className="font-medium">{platform.specs.lastUpdated}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 text-xs">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Docs
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <Card className="border-2 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Feature Compatibility Matrix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Feature</th>
                    <th className="text-center py-2">Windows</th>
                    <th className="text-center py-2">Linux</th>
                    <th className="text-center py-2">Android</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {[
                    { feature: "One-Click Wipe", windows: true, linux: true, android: true },
                    { feature: "HPA/DCO Detection", windows: true, linux: true, android: false },
                    { feature: "SSD Spare Sectors", windows: true, linux: true, android: true },
                    { feature: "GUI Interface", windows: true, linux: true, android: true },
                    { feature: "Command Line", windows: true, linux: true, android: false },
                    { feature: "Certificate Generation", windows: true, linux: true, android: true },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-muted/30">
                      <td className="py-3 font-medium">{row.feature}</td>
                      <td className="text-center py-3">
                        {row.windows ? (
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                        ) : (
                          <div className="h-4 w-4 bg-muted rounded-full mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-3">
                        {row.linux ? (
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                        ) : (
                          <div className="h-4 w-4 bg-muted rounded-full mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-3">
                        {row.android ? (
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                        ) : (
                          <div className="h-4 w-4 bg-muted rounded-full mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
