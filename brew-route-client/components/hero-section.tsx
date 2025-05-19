import Link from "next/link"
import { ArrowRight, QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Trace Your Tea's Journey
                <span className="text-emerald-600"> from Garden to Cup</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                BrewRoute uses blockchain technology to provide complete transparency and traceability for every step of
                your tea's journey.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/scan">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <QrCode className="mr-2 h-4 w-4" />
                  Scan Your Tea
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-full blur-3xl opacity-50"></div>
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Tea traceability visualization"
                className="relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
