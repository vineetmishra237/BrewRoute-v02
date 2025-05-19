"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, QrCode, ScanLine } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ScanPage() {
  const [scanState, setScanState] = useState<"initial" | "scanning" | "scanned">("initial")

  const handleScan = () => {
    setScanState("scanning")
    // Simulate scanning process
    setTimeout(() => {
      setScanState("scanned")
    }, 2000)
  }

  const resetScan = () => {
    setScanState("initial")
  }

  return (
    <div className="container max-w-4xl py-12">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Trace Your Tea</h1>
        <p className="text-muted-foreground">Scan the QR code on your tea bag to discover its complete journey</p>
      </div>

      <Tabs defaultValue="qr-scanner" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="qr-scanner">QR Scanner</TabsTrigger>
          <TabsTrigger value="manual-entry">Manual Entry</TabsTrigger>
        </TabsList>

        <TabsContent value="qr-scanner">
          <Card className="border-2 border-dashed">
            <CardContent className="p-6">
              {scanState === "initial" && (
                <div className="flex flex-col items-center justify-center py-12">
                  <QrCode className="h-16 w-16 text-muted-foreground mb-6" />
                  <h3 className="text-xl font-medium mb-2">Scan QR Code</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-8">
                    Position the QR code on your tea package within the camera frame to trace its journey
                  </p>
                  <Button onClick={handleScan} className="bg-emerald-600 hover:bg-emerald-700">
                    <ScanLine className="mr-2 h-4 w-4" />
                    Start Scanning
                  </Button>
                </div>
              )}

              {scanState === "scanning" && (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="relative w-64 h-64 border-2 border-emerald-600 mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-1 bg-emerald-600 animate-pulse"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">Scanning...</p>
                    </div>
                  </div>
                  <Button variant="outline" onClick={resetScan}>
                    Cancel
                  </Button>
                </div>
              )}

              {scanState === "scanned" && (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                      ✓
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">QR Code Detected!</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-8">
                    We found: <span className="font-medium text-foreground">Darjeeling First Flush 2025</span>
                  </p>
                  <div className="flex gap-4">
                    <Link href="/tea/darjeeling-first-flush">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">View Tea Journey</Button>
                    </Link>
                    <Button variant="outline" onClick={resetScan}>
                      Scan Another
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manual-entry">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center py-12">
                <h3 className="text-xl font-medium mb-6">Enter Tea Code</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-8">
                  <input
                    type="text"
                    placeholder="Enter the code from your tea package (e.g., BR-2025-DJL-001)"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Link href="/tea/darjeeling-first-flush">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Trace Tea</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 p-6 bg-slate-50 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Recently Traced Teas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/tea/assam-gold" className="block">
            <div className="p-4 border rounded-lg hover:border-emerald-600 transition-colors">
              <h4 className="font-medium">Assam Gold Tips</h4>
              <p className="text-sm text-muted-foreground">Traced on May 14, 2025</p>
            </div>
          </Link>
          <Link href="/tea/ceylon-orange-pekoe" className="block">
            <div className="p-4 border rounded-lg hover:border-emerald-600 transition-colors">
              <h4 className="font-medium">Ceylon Orange Pekoe</h4>
              <p className="text-sm text-muted-foreground">Traced on May 10, 2025</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
