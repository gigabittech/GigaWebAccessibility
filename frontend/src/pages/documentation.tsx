import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides and resources for Giga Web Accessibility
            </p>
          </div>

          {/* Documentation Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {documentationSections.map((section, index) => (
              <Card key={index} className="bg-card border border-border shadow-2xl backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-10">
                  <div className={`w-16 h-16 ${section.bgColor} rounded-2xl flex items-center justify-center mb-8 border border-border/50`}>
                    <section.icon className={`${section.iconColor} w-8 h-8`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    {section.title}
                  </h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <Circle className="w-2 h-2 text-blue-500 mr-4 fill-current" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WCAG Guidelines */}
          <Card className="bg-card border border-border shadow-2xl backdrop-blur-sm mb-16">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Accessibility Standards
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    WCAG 2.1 Guidelines
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Our plugin ensures full compliance with Web Content Accessibility Guidelines (WCAG) 2.1 at AA level,
                    covering all four principles: Perceivable, Operable, Understandable, and Robust.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {wcagPrinciples.map((principle, index) => (
                      <Card key={index} className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <h4 className="font-medium text-foreground mb-3 text-lg">
                            {principle.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {principle.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Automated Testing Coverage
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Our comprehensive testing suite covers over 150 accessibility rules and provides
                    detailed reports with actionable recommendations for improvement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-10">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-700/50 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="font-semibold text-foreground mb-4 text-lg">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
