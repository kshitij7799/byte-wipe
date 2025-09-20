"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Shield, Calendar, Eye, Copy, CheckCircle, ExternalLink } from "lucide-react"

export function CertificateSection() {
  const [previewType, setPreviewType] = useState<"pdf" | "json" | null>(null)
  const [copied, setCopied] = useState(false)

  const sampleJsonData = {
    certificate_id: "BWC-2024-001-A7F3E9",
    timestamp: "2024-01-15T14:30:22Z",
    device_info: {
      model: "Dell OptiPlex 7090",
      serial: "XXXXXXXX",
      drive: "Samsung SSD 980 PRO 500GB",
    },
    wipe_details: {
      algorithm: "DoD 5220.22-M",
      passes: 3,
      duration: "00:45:32",
      sectors_wiped: 976773168,
    },
    verification: {
      hash: "sha256:a1b2c3d4...",
      signature: "RSA-4096 verified",
    },
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(sampleJsonData, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="certificates" className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Tamper-Proof Certificates
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get digitally signed certificates in PDF and JSON formats after every wipe operation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200">
          <CardHeader className="bg-gradient-to-br from-red-50 to-red-100/50">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-red-500" />
              PDF Certificate
              <Badge variant="secondary" className="ml-auto bg-red-100 text-red-700">
                Human Readable
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <p className="text-muted-foreground leading-relaxed">
              Professional certificate with detailed wipe information, timestamps, and digital signatures suitable for
              compliance audits and legal documentation.
            </p>

            <ul className="space-y-3 text-sm">
              {[
                "Device and drive information",
                "Wipe algorithm used (DoD 5220.22-M)",
                "Timestamp and duration",
                "Digital signature verification",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 group/item">
                  <CheckCircle className="h-4 w-4 text-red-500 group-hover/item:scale-110 transition-transform" />
                  <span className="group-hover/item:text-red-600 transition-colors">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                onClick={() => setPreviewType(previewType === "pdf" ? null : "pdf")}
              >
                <Eye className="h-4 w-4 mr-2" />
                {previewType === "pdf" ? "Hide Preview" : "Preview Sample"}
              </Button>
              <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            {previewType === "pdf" && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg animate-in slide-in-from-top-2">
                <div className="bg-white p-4 rounded border shadow-sm text-xs space-y-2">
                  <div className="flex items-center justify-between border-b pb-2">
                    <h4 className="font-bold text-red-700">BYTEWIPE CERTIFICATE</h4>
                    <Badge className="bg-red-100 text-red-700 text-xs">VERIFIED</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <strong>Certificate ID:</strong> BWC-2024-001-A7F3E9
                    </div>
                    <div>
                      <strong>Date:</strong> 2024-01-15 14:30:22 UTC
                    </div>
                    <div>
                      <strong>Device:</strong> Dell OptiPlex 7090
                    </div>
                    <div>
                      <strong>Drive:</strong> Samsung SSD 980 PRO
                    </div>
                  </div>
                  <div className="text-center text-xs text-muted-foreground pt-2 border-t">
                    Digitally signed with RSA-4096 encryption
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
          <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-500" />
              JSON Certificate
              <Badge variant="secondary" className="ml-auto bg-blue-100 text-blue-700">
                Machine Readable
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <p className="text-muted-foreground leading-relaxed">
              Structured data format perfect for automated compliance systems, API integrations, and blockchain
              verification systems.
            </p>

            <ul className="space-y-3 text-sm">
              {[
                "Structured data format",
                "API integration ready",
                "Cryptographic hash verification",
                "Blockchain-compatible format",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 group/item">
                  <CheckCircle className="h-4 w-4 text-blue-500 group-hover/item:scale-110 transition-transform" />
                  <span className="group-hover/item:text-blue-600 transition-colors">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                onClick={() => setPreviewType(previewType === "json" ? null : "json")}
              >
                <Eye className="h-4 w-4 mr-2" />
                {previewType === "json" ? "Hide Preview" : "Preview Sample"}
              </Button>
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            {previewType === "json" && (
              <div className="mt-4 space-y-2 animate-in slide-in-from-top-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-700">Sample JSON Structure</span>
                  <Button size="sm" variant="ghost" onClick={handleCopy} className="h-6 px-2 text-xs">
                    {copied ? (
                      <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3 mr-1" />
                    )}
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
                <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono overflow-x-auto max-h-48 overflow-y-auto">
                  <pre>{JSON.stringify(sampleJsonData, null, 2)}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-primary">Certificate Security Features</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All certificates are digitally signed using RSA-4096 encryption and include tamper-evident features.
                  Each certificate contains a unique hash that can be verified against our public certificate database
                  for authenticity and compliance purposes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-3 bg-white/50 rounded-lg border">
                    <div className="text-2xl font-bold text-primary">RSA-4096</div>
                    <div className="text-sm text-muted-foreground">Encryption</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-lg border">
                    <div className="text-2xl font-bold text-primary">10 Years</div>
                    <div className="text-sm text-muted-foreground">Validity</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-lg border">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Calendar className="h-4 w-4" />
                    <span>Valid for 10 years from issue date</span>
                  </div>
                  <Button size="sm" variant="outline" className="ml-auto bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Certificate
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
