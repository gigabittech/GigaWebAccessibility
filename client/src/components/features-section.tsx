import { Card, CardContent } from "@/components/ui/card";
import { Search, Palette, CheckCircle, Volume2, BarChart3, FileText } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Automated Auditing",
    description: "Comprehensive automated scans that identify accessibility issues across your entire website with detailed reporting.",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    icon: Palette,
    title: "Color Highlighting",
    description: "Automatic detection and highlighting of color contrast issues to ensure WCAG compliance standards.",
    bgColor: "bg-cyan-500/10",
    iconColor: "text-cyan-500"
  },
  {
    icon: CheckCircle,
    title: "WCAG Compliance",
    description: "Full compliance with WCAG 2.1 AA guidelines ensuring your website meets international accessibility standards.",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500"
  },
  {
    icon: Volume2,
    title: "Screen Reader Support",
    description: "Enhanced screen reader compatibility with proper ARIA labels and semantic markup optimization.",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Detailed analytics and insights to track accessibility improvements and compliance progress over time.",
    bgColor: "bg-cyan-500/10",
    iconColor: "text-cyan-500"
  },
  {
    icon: FileText,
    title: "Compliance Reporting",
    description: "Automated compliance reports and documentation to demonstrate accessibility adherence for audits.",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for Complete Accessibility
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools and insights to ensure your website meets all accessibility standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 border border-border/50`}>
                  <feature.icon className={`${feature.iconColor} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
