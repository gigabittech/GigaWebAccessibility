import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield } from "lucide-react";
import { SiWordpress, SiShopify } from "react-icons/si";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-6 bg-primary-50 text-primary-700 hover:bg-primary-100">
            <Shield className="w-4 h-4 mr-2" />
            WCAG 2.1 AA Compliant
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            The Complete<br />
            <span className="bg-gradient-to-r from-primary-500 to-violet-500 bg-clip-text text-transparent">
              Web Accessibility
            </span>
            <br />
            Solution
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Make your website accessible to everyone with automated auditing,
            real-time monitoring, and comprehensive compliance reporting.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <SiWordpress className="w-5 h-5 mr-3" />
            WordPress Plugin
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <SiShopify className="w-5 h-5 mr-3" />
            Shopify App
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Hero Visual */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="h-12 bg-slate-100 border-b border-slate-200 flex items-center px-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-sm text-slate-500 font-medium">
                Giga Web Accessibility Dashboard
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-500 mb-1">99%</div>
                  <div className="text-sm text-slate-600">Coverage</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-emerald-500 mb-1">150+</div>
                  <div className="text-sm text-slate-600">Tests</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-violet-500 mb-1">24/7</div>
                  <div className="text-sm text-slate-600">Monitor</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Accessibility Score</span>
                  <span className="text-sm font-bold text-emerald-600">98/100</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full w-[98%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
