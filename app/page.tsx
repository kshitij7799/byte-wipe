import { Header } from "@/components/header"
import { ByteWipeHero } from "@/components/bytewipe-hero"
import { PlatformSupport } from "@/components/platform-support"
import { WipeInterface } from "@/components/wipe-interface"
import { CertificateSection } from "@/components/certificate-section"
import { SecurityFeatures } from "@/components/security-features"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="space-y-16">
        <ByteWipeHero />

        <PlatformSupport />

        <WipeInterface />

        <CertificateSection />

        <SecurityFeatures />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
