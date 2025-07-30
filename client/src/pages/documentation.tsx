import Navigation from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Settings, Code, Wrench, Circle } from "lucide-react";

const documentationSections = [
  {
    icon: Rocket,
    title: "Getting Started",
    bgColor: "bg-primary-100",
    iconColor: "text-primary-500",
    items: [
      "Quick Start Guide",
      "Installation Instructions",
      "Basic Configuration",
      "First Accessibility Scan"
    ]
  },
  {
    icon: Settings,
    title: "Features Guide",
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-500",
    items: [
      "Automated Scanning",
      "Color Contrast Analysis",
      "Screen Reader Optimization",
      "Compliance Reporting"
    ]
  },
  {
    icon: Code,
    title: "API Reference",
    bgColor: "bg-violet-100",
    iconColor: "text-violet-500",
    items: [
      "REST API Endpoints",
      "Authentication Methods",
      "Webhook Integration",
      "Response Formats"
    ]
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-500",
    items: [
      "Common Issues",
      "Error Messages",
      "Performance Optimization",
      "Support Resources"
    ]
  }
];

const wcagPrinciples = [
  {
    title: "Perceivable",
    description: "Text alternatives, captions, color contrast, and resizable text"
  },
  {
    title: "Operable",
    description: "Keyboard accessibility, seizure safety, and navigation assistance"
  },
  {
    title: "Understandable",
    description: "Readable text, predictable functionality, and input assistance"
  },
  {
    title: "Robust",
    description: "Compatible with assistive technologies and future-proof code"
  }
];

const faqs = [
  {
    question: "How often should I run accessibility scans?",
    answer: "We recommend running automated scans daily for active websites, with comprehensive manual reviews monthly or after major content updates."
  },
  {
    question: "Does the plugin affect website performance?",
    answer: "No, our plugin is designed to have minimal impact on website performance. Scanning happens in the background without affecting user experience."
  },
  {
    question: "Can I customize which accessibility rules to test?",
    answer: "Yes, you can configure which WCAG rules to include in your scans and set custom severity levels for different types of accessibility issues."
  }
];

export default function Documentation() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <section className="py-20 px-6 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Documentation
            </h1>
            <p className="text-lg text-slate-600">
              Comprehensive guides and resources for Giga Web Accessibility
            </p>
          </div>

          {/* Documentation Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {documentationSections.map((section, index) => (
              <Card key={index} className="shadow-md border border-slate-100">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 ${section.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                    <section.icon className={`${section.iconColor} w-6 h-6`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <Circle className="w-2 h-2 text-slate-400 mr-3 fill-current" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WCAG Guidelines */}
          <Card className="shadow-md border border-slate-100 mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Accessibility Standards
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    WCAG 2.1 Guidelines
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Our plugin ensures full compliance with Web Content Accessibility Guidelines (WCAG) 2.1 at AA level,
                    covering all four principles: Perceivable, Operable, Understandable, and Robust.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {wcagPrinciples.map((principle, index) => (
                      <Card key={index} className="bg-slate-50 border-0">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-slate-900 mb-2">
                            {principle.title}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {principle.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Automated Testing Coverage
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Our comprehensive testing suite covers over 150 accessibility rules and provides
                    detailed reports with actionable recommendations for improvement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="bg-slate-50 border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
