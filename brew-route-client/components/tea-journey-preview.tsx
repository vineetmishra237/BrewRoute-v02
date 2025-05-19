import { Card, CardContent } from "@/components/ui/card"

export default function TeaJourneyPreview() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Step 1: Cultivation */}
        <Card className="md:col-span-1 bg-gradient-to-b from-emerald-50 to-white border-emerald-200 hover:border-emerald-400 transition-colors">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-emerald-600">1</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Cultivation</h3>
            <p className="text-sm text-muted-foreground">Tea leaves grown in Darjeeling, India at 1,800m elevation</p>
          </CardContent>
        </Card>

        {/* Step 2: Harvesting */}
        <Card className="md:col-span-1 bg-gradient-to-b from-emerald-50 to-white border-emerald-200 hover:border-emerald-400 transition-colors">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-emerald-600">2</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Harvesting</h3>
            <p className="text-sm text-muted-foreground">Hand-plucked by skilled workers using traditional methods</p>
          </CardContent>
        </Card>

        {/* Step 3: Processing */}
        <Card className="md:col-span-1 bg-gradient-to-b from-emerald-50 to-white border-emerald-200 hover:border-emerald-400 transition-colors">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-emerald-600">3</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Processing</h3>
            <p className="text-sm text-muted-foreground">Withering, rolling, oxidation, and drying at the estate</p>
          </CardContent>
        </Card>

        {/* Step 4: Packaging */}
        <Card className="md:col-span-1 bg-gradient-to-b from-emerald-50 to-white border-emerald-200 hover:border-emerald-400 transition-colors">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-emerald-600">4</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Packaging</h3>
            <p className="text-sm text-muted-foreground">Sealed in eco-friendly packaging with unique QR code</p>
          </CardContent>
        </Card>

        {/* Step 5: Distribution */}
        <Card className="md:col-span-1 bg-gradient-to-b from-emerald-50 to-white border-emerald-200 hover:border-emerald-400 transition-colors">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-emerald-600">5</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Distribution</h3>
            <p className="text-sm text-muted-foreground">
              Shipped to retailers with temperature and humidity monitoring
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Connecting line */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 -translate-y-1/2 z-0"></div>
    </div>
  )
}
