import { Card, CardContent } from "@/components/ui/card";

export default function CoverageSection() {
  return (
    <section className="py-24 px-6 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Accessibility Coverage
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          Comprehensive accessibility testing across all major guidelines and standards with real-time monitoring
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
            <CardContent className="p-10 text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">99%</div>
              <div className="text-foreground font-semibold mb-2 text-lg">Coverage Rate</div>
              <div className="text-sm text-muted-foreground">Complete accessibility testing</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
            <CardContent className="p-10 text-center">
              <div className="text-5xl font-bold text-cyan-500 mb-4">150+</div>
              <div className="text-foreground font-semibold mb-2 text-lg">Test Cases</div>
              <div className="text-sm text-muted-foreground">Comprehensive rule coverage</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
            <CardContent className="p-10 text-center">
              <div className="text-5xl font-bold text-purple-500 mb-4">24/7</div>
              <div className="text-foreground font-semibold mb-2 text-lg">Monitoring</div>
              <div className="text-sm text-muted-foreground">Continuous accessibility checks</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
