"use client"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Check,
  Download,
  ExternalLink,
  Globe,
  Info,
  Leaf,
  MapPin,
  Shield,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import TeaJourneyTimeline from "@/components/tea-journey-timeline"

export default function TeaDetailsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <Link
        href="/scan"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Scanner
      </Link>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <div className="rounded-lg overflow-hidden shadow-md mb-4">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Darjeeling First Flush Tea"
              className="w-full h-auto"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <Badge className="bg-emerald-600">Verified on Blockchain</Badge>
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Shield className="h-5 w-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Blockchain Verified</p>
                <p className="text-xs text-muted-foreground">Last updated: May 16, 2025</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Origin</p>
                <p className="text-xs text-muted-foreground">Darjeeling, India</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="h-5 w-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Harvest Date</p>
                <p className="text-xs text-muted-foreground">March 15, 2025</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Tea Type</p>
                <p className="text-xs text-muted-foreground">Black Tea, First Flush</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Darjeeling First Flush 2025</h1>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Premium</Badge>
            <Badge variant="outline">Organic</Badge>
            <Badge variant="outline">Fair Trade</Badge>
          </div>
          <p className="text-muted-foreground mb-6">
            This exquisite first flush Darjeeling tea was hand-plucked from the misty slopes of the Himalayan foothills.
            Known as the "Champagne of Teas," this batch features the characteristic muscatel flavor with delicate
            floral notes.
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Certifications</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 border rounded-full px-3 py-1">
                <Check className="h-4 w-4 text-emerald-600" />
                <span className="text-sm">Organic</span>
              </div>
              <div className="flex items-center gap-2 border rounded-full px-3 py-1">
                <Check className="h-4 w-4 text-emerald-600" />
                <span className="text-sm">Fair Trade</span>
              </div>
              <div className="flex items-center gap-2 border rounded-full px-3 py-1">
                <Check className="h-4 w-4 text-emerald-600" />
                <span className="text-sm">Rainforest Alliance</span>
              </div>
              <div className="flex items-center gap-2 border rounded-full px-3 py-1">
                <Check className="h-4 w-4 text-emerald-600" />
                <span className="text-sm">GI Protected</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Blockchain Verification</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border rounded-lg">
                <p className="text-sm font-medium">Transaction Hash</p>
                <p className="text-xs text-muted-foreground truncate">0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3...</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="text-sm font-medium">Block Number</p>
                <p className="text-xs text-muted-foreground">15,782,934</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="text-sm font-medium">Smart Contract</p>
                <p className="text-xs text-muted-foreground truncate">0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d...</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="text-sm font-medium">Timestamp</p>
                <p className="text-xs text-muted-foreground">May 16, 2025 14:32 UTC</p>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="text-xs">
                <ExternalLink className="h-3 w-3 mr-1" />
                View on Blockchain Explorer
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="journey">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="journey">Journey</TabsTrigger>
          <TabsTrigger value="producer">Producer</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
        </TabsList>

        <TabsContent value="journey">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-6">Tea Journey</h3>
              <TeaJourneyTimeline />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="producer">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden shadow-md mb-4">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Himalayan Tea Gardens"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-medium mb-2">Himalayan Tea Gardens</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-muted-foreground">Darjeeling, West Bengal, India</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Established in 1932, Himalayan Tea Gardens is one of Darjeeling's most prestigious tea estates.
                    Situated at an elevation of 1,800 meters, the garden benefits from the perfect combination of soil,
                    climate, and altitude that gives Darjeeling tea its distinctive character.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Fair Labor Practices</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      The estate employs over 350 workers, providing fair wages, housing, education for workers'
                      children, and healthcare facilities. All workers receive benefits above the industry standard.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm">Fair wages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm">Worker housing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm">Healthcare access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm">Education support</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm">
                    <Globe className="h-4 w-4 mr-2" />
                    Visit Producer Website
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sustainability">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-6">Sustainability Practices</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-medium flex items-center gap-2 mb-4">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                    Environmental Impact
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Organic Farming</p>
                        <p className="text-xs text-muted-foreground">No synthetic pesticides or fertilizers used</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Water Conservation</p>
                        <p className="text-xs text-muted-foreground">Rainwater harvesting and efficient irrigation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Biodiversity Protection</p>
                        <p className="text-xs text-muted-foreground">30% of estate land preserved as natural forest</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Carbon Footprint</p>
                        <p className="text-xs text-muted-foreground">Solar-powered processing facilities</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-emerald-600" />
                    Social Responsibility
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Community Development</p>
                        <p className="text-xs text-muted-foreground">5% of profits invested in local infrastructure</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Women Empowerment</p>
                        <p className="text-xs text-muted-foreground">
                          60% of workforce and 40% of management are women
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Education Initiatives</p>
                        <p className="text-xs text-muted-foreground">School on premises for workers' children</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Healthcare Access</p>
                        <p className="text-xs text-muted-foreground">
                          On-site medical facility for workers and families
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Carbon Offset</p>
                    <p className="text-xs text-muted-foreground mb-2">
                      This tea's production and transportation carbon footprint has been offset through verified carbon
                      credits and reforestation projects.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium">Total CO₂ offset:</span>
                      <Badge variant="secondary" className="text-xs">
                        2.3 kg CO₂e
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
