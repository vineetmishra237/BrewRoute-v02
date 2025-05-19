import { Calendar, Check, Factory, Leaf, Package, Truck, Users } from "lucide-react"

export default function TeaJourneyTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>

      {/* Step 1: Cultivation */}
      <div className="relative pl-12 md:pl-20 pb-10">
        <div className="absolute left-2 md:left-6 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center z-10">
          <Leaf className="h-3 w-3 text-white" />
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
            <h3 className="text-lg font-medium">Cultivation</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              January - March 2025
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            These tea leaves were grown at Himalayan Tea Gardens in Darjeeling, India at an elevation of 1,800 meters.
            The garden uses organic farming practices and is certified by the Tea Board of India.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Organic cultivation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">No pesticides</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Rainwater irrigation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Shade-grown</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Harvesting */}
      <div className="relative pl-12 md:pl-20 pb-10">
        <div className="absolute left-2 md:left-6 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center z-10">
          <Users className="h-3 w-3 text-white" />
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
            <h3 className="text-lg font-medium">Harvesting</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              March 15, 2025
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            The first flush leaves were hand-plucked by skilled workers using traditional methods. Only the bud and
            first two leaves were selected to ensure premium quality.
          </p>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Hand-plucked by 12 skilled workers</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Fair wage certification</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Processing */}
      <div className="relative pl-12 md:pl-20 pb-10">
        <div className="absolute left-2 md:left-6 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center z-10">
          <Factory className="h-3 w-3 text-white" />
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
            <h3 className="text-lg font-medium">Processing</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              March 16-18, 2025
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            The leaves underwent traditional processing at the estate's solar-powered facility. This included withering,
            rolling, oxidation, and drying to develop the characteristic muscatel flavor of Darjeeling first flush.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">12-hour withering</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Hand-rolling</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">3-hour oxidation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Solar-powered drying</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Packaging */}
      <div className="relative pl-12 md:pl-20 pb-10">
        <div className="absolute left-2 md:left-6 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center z-10">
          <Package className="h-3 w-3 text-white" />
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
            <h3 className="text-lg font-medium">Packaging</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              March 20, 2025
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            The processed tea was sealed in eco-friendly, biodegradable packaging at the estate's clean room facility.
            Each package received a unique QR code linked to its blockchain record.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Biodegradable materials</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Nitrogen-flushed</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Unique QR code</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Blockchain registered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 5: Distribution */}
      <div className="relative pl-12 md:pl-20 pb-10">
        <div className="absolute left-2 md:left-6 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center z-10">
          <Truck className="h-3 w-3 text-white" />
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
            <h3 className="text-lg font-medium">Distribution</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              March 25 - April 10, 2025
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            The tea was transported from Darjeeling to distribution centers using temperature and humidity-controlled
            vehicles. IoT sensors monitored conditions throughout the journey, with data recorded on the blockchain.
          </p>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Temperature maintained at 18-22°C</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Humidity controlled at 45-55%</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Carbon-neutral shipping</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 6: Retail */}
      <div className="relative pl-12 md:pl-20">
        <div className="absolute left-2 md:left-6 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center z-10">
          <Check className="h-3 w-3 text-white" />
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
            <h3 className="text-lg font-medium">Retail</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              April 15, 2025
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            The tea arrived at premium tea retailers across the country, where it was stored in optimal conditions to
            preserve freshness and flavor. Each package maintains its blockchain-verified provenance information.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Climate-controlled storage</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">First flush premium pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">QR code verification</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-xs">Blockchain authenticity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
