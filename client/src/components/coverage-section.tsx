import { Card, CardContent } from "@/components/ui/card";

export default function CoverageSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Accessibility Coverage
        </h2>
        <p className="text-lg text-slate-600 mb-12">
          Comprehensive accessibility testing across all major guidelines and standards
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-slate-50 border-0">
            <CardContent className="p-8 text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">99%</div>
              <div className="text-slate-900 font-semibold mb-1">Coverage Rate</div>
              <div className="text-sm text-slate-600">Complete accessibility testing</div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-50 border-0">
            <CardContent className="p-8 text-center">
              <div className="text-3xl font-bold text-emerald-500 mb-2">150+</div>
              <div className="text-slate-900 font-semibold mb-1">Test Cases</div>
              <div className="text-sm text-slate-600">Comprehensive rule coverage</div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-50 border-0">
            <CardContent className="p-8 text-center">
              <div className="text-3xl font-bold text-violet-500 mb-2">24/7</div>
              <div className="text-slate-900 font-semibold mb-1">Monitoring</div>
              <div className="text-sm text-slate-600">Continuous accessibility checks</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
