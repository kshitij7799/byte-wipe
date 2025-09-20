import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Zap } from "lucide-react"

export function SecurityFeatures() {
  const features = [
    {
      icon: Shield,
      title: "DoD 5220.22-M Standard",
      description:
        "Military-grade data destruction using Department of Defense approved algorithms with multiple overwrite passes.",
    },
    {
      icon: Lock,
      title: "HPA/DCO Wiping",
      description:
        "Detects and securely wipes hidden protected areas and device configuration overlays that standard tools miss.",
    },
    {
      icon: Eye,
      title: "SSD Spare Sectors",
      description: "Advanced algorithms to locate and wipe spare sectors in SSDs where sensitive data might be stored.",
    },
    {
      icon: Zap,
      title: "Real-time Verification",
      description:
        "Continuous verification during the wiping process ensures complete data destruction with immediate feedback.",
    },
  ]

  return (
    <section id="security" className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Advanced Security Features</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          ByteWipe ensures complete data destruction with enterprise-grade security features
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Data?</h3>
            <p className="mb-6 opacity-90">
              Download ByteWipe now and experience the most secure data wiping solution available for Windows, Linux,
              and Android platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download for Windows
              </button>
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download for Linux
              </button>
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download for Android
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
