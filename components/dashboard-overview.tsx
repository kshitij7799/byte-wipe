import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HardDrive, CheckCircle, FileText, TrendingUp } from "lucide-react"

export function DashboardOverview() {
  const metrics = [
    {
      title: "Total Assets Processed",
      value: "2,847",
      change: "+12%",
      icon: HardDrive,
      description: "This month",
    },
    {
      title: "Secure Wipes Completed",
      value: "2,654",
      change: "+8%",
      icon: CheckCircle,
      description: "Successfully wiped",
    },
    {
      title: "Compliance Reports",
      value: "156",
      change: "+23%",
      icon: FileText,
      description: "Generated this month",
    },
    {
      title: "Recovery Rate",
      value: "94.2%",
      change: "+2.1%",
      icon: TrendingUp,
      description: "Asset value recovered",
    },
  ]

  return (
    <section id="dashboard" className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Real-time insights into your data destruction and asset recycling operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                <Icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span className="text-accent font-medium">{metric.change}</span>
                  <span>{metric.description}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
