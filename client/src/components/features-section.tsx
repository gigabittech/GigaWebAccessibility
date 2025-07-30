import { Card, CardContent } from "@/components/ui/card";
import { Search, Palette, CheckCircle, Volume2, BarChart3, FileText } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Automated Auditing",
    description: "Comprehensive automated scans that identify accessibility issues across your entire website with detailed reporting.",
    bgColor: "bg-primary-100",
    iconColor: "text-primary-500"
  },
  {
    icon: Palette,
    title: "Color Highlighting",
    description: "Automatic detection and highlighting of color contrast issues to ensure WCAG compliance standards.",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-500"
  },
  {
    icon: CheckCircle,
    title: "WCAG Compliance",
    description: "Full compliance with WCAG 2.1 AA guidelines ensuring your website meets international accessibility standards.",
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-500"
  },
  {
    icon: Volume2,
    title: "Screen Reader Support",
    description: "Enhanced screen reader compatibility with proper ARIA labels and semantic markup optimization.",
    bgColor: "bg-violet-100",
    iconColor: "text-violet-500"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Detailed analytics and insights to track accessibility improvements and compliance progress over time.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  {
    icon: FileText,
    title: "Compliance Reporting",
    description: "Automated compliance reports and documentation to demonstrate accessibility adherence for audits.",
    bgColor: "bg-red-100",
    iconColor: "text-red-500"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need for Complete Accessibility
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive tools and insights to ensure your website meets all accessibility standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-slate-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className={`${feature.iconColor} w-6 h-6`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
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
