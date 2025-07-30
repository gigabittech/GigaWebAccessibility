import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Accessibility } from "lucide-react";
import { SiWordpress, SiShopify } from "react-icons/si";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-12 pt-8">
          <Badge variant="secondary" className="mb-8 mt-4 bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:bg-blue-500/20">
            <Accessibility className="w-4 h-4 mr-2" />
            WCAG 2.1 AA Compliant
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-foreground">Make Your Website</span><br />
            <span className="gradient-text">
              Accessible to Everyone
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Automated accessibility auditing, real-time monitoring, and comprehensive WCAG compliance reporting 
            for WordPress and Shopify platforms.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button
            size="lg"
            className="group bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-500 hover:border-blue-600 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
          >
            <SiWordpress className="w-6 h-6 mr-4" />
            WordPress Plugin
            <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="group bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
          >
            <SiShopify className="w-6 h-6 mr-4" />
            Shopify App
            <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl border border-border overflow-hidden backdrop-blur-sm">
            <div className="h-14 bg-gray-800 border-b border-border flex items-center px-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-sm text-muted-foreground font-medium">
                Giga Web Accessibility Dashboard
              </div>
            </div>
            <div className="p-10 bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-600/30">
                  <div className="text-3xl font-bold text-blue-500 mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Coverage</div>
                </div>
                <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-600/30">
                  <div className="text-3xl font-bold text-cyan-500 mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Tests</div>
                </div>
                <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-600/30">
                  <div className="text-3xl font-bold text-purple-500 mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitor</div>
                </div>
              </div>
              <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-foreground">Accessibility Score</span>
                  <span className="text-sm font-bold text-blue-500">98/100</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-3">
                  <div className="gradient-blue h-3 rounded-full w-[98%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
