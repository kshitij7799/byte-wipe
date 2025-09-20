import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">SecureWipe Pro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade data destruction and IT asset recycling services with full compliance documentation.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Data Wiping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Asset Recycling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Compliance Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chain of Custody
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Compliance</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  HIPAA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  SOX
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  GDPR
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  ISO 27001
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2024 SecureWipe Pro. All rights reserved. Trusted by enterprises worldwide for secure data
            destruction.
          </p>
        </div>
      </div>
    </footer>
  )
}
