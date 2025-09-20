import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Eye, Calendar } from "lucide-react"

export function ComplianceSection() {
  const recentReports = [
    {
      id: "RPT-2024-001",
      title: "Q1 2024 Data Destruction Report",
      date: "2024-03-31",
      status: "Completed",
      type: "Quarterly",
    },
    {
      id: "RPT-2024-002",
      title: "HIPAA Compliance Audit",
      date: "2024-03-15",
      status: "Completed",
      type: "Audit",
    },
    {
      id: "RPT-2024-003",
      title: "Asset Recycling Summary",
      date: "2024-03-10",
      status: "In Progress",
      type: "Monthly",
    },
  ]

  return (
    <section id="compliance" className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Compliance & Reporting</h2>
        <p className="text-muted-foreground">
          Maintain regulatory compliance with comprehensive documentation and reporting
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{report.title}</h4>
                        <Badge variant={report.status === "Completed" ? "default" : "secondary"}>{report.status}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {report.date}
                        </span>
                        <span>ID: {report.id}</span>
                        <span>{report.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Standards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">HIPAA</span>
                  <Badge variant="default">Certified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">SOX</span>
                  <Badge variant="default">Certified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">GDPR</span>
                  <Badge variant="default">Compliant</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">ISO 27001</span>
                  <Badge variant="default">Certified</Badge>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                View All Certifications
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-transparent" variant="outline">
                Generate New Report
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                Schedule Audit
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                Download Templates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
