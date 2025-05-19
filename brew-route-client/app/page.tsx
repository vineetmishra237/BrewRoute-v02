import Link from "next/link"
import { ArrowRight, Leaf, QrCode, Shield, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"
import TeaJourneyPreview from "@/components/tea-journey-preview"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">BrewRoute</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/scan" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Scan QR
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="/producers" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              For Producers
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/scan">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Trace Your Tea
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Transparency in Every Cup</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              BrewRoute connects you directly to the story of your tea — from garden to cup, with immutable blockchain
              verification at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
            <FeatureCard
              icon={<QrCode className="h-10 w-10 text-emerald-600" />}
              title="Scan & Discover"
              description="Scan the QR code on your tea bag to unlock its complete journey and story."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-emerald-600" />}
              title="Verified Authenticity"
              description="Blockchain technology ensures every data point is immutable and verifiable."
            />
            <FeatureCard
              icon={<Truck className="h-10 w-10 text-emerald-600" />}
              title="Complete Traceability"
              description="Follow your tea from plucking to processing, packaging, shipping, and beyond."
            />
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Experience the Journey</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                See how BrewRoute reveals the complete story behind your favorite tea.
              </p>
            </div>

            <div className="mt-12">
              <TeaJourneyPreview />
            </div>

            <div className="mt-12 text-center">
              <Link href="/scan">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Try It Yourself
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-4">
                For Tea Producers & Retailers
              </h2>
              <p className="text-muted-foreground mb-6">
                BrewRoute offers powerful supply chain insights, strengthens customer trust, and allows you to showcase
                your sustainability efforts and fair labor practices.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Combat counterfeiting and adulteration</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Showcase sustainability efforts</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Highlight fair labor practices</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Verify regional authenticity</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/producers">
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Tea plantation workers"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-slate-50">
        <div className="container flex flex-col md:flex-row items-center justify-between py-10 md:h-24">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-emerald-600" />
            <span className="font-semibold">BrewRoute</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 BrewRoute. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-emerald-600">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-emerald-600">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-emerald-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
