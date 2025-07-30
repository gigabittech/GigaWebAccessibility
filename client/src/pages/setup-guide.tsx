import Navigation from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiWordpress, SiShopify } from "react-icons/si";

const wordpressSteps = [
  {
    title: "Download & Install",
    description: "Download the plugin from WordPress repository or upload the ZIP file through your WordPress admin panel."
  },
  {
    title: "Activate Plugin",
    description: "Navigate to Plugins → Installed Plugins and activate \"Giga Web Accessibility\"."
  },
  {
    title: "Configure Settings",
    description: "Access the plugin settings under Settings → Accessibility and configure your preferences."
  },
  {
    title: "Run Initial Scan",
    description: "Click \"Run Accessibility Scan\" to perform your first comprehensive website audit."
  }
];

const shopifySteps = [
  {
    title: "Install from App Store",
    description: "Search for \"Giga Web Accessibility\" in the Shopify App Store and click Install."
  },
  {
    title: "Grant Permissions",
    description: "Review and approve the required permissions for the app to analyze your store."
  },
  {
    title: "Setup Dashboard",
    description: "Complete the initial setup by configuring your accessibility preferences and scanning schedule."
  },
  {
    title: "Start Monitoring",
    description: "Your store will automatically begin accessibility monitoring and compliance tracking."
  }
];

export default function SetupGuide() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <section className="py-20 px-6 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Setup Guide
            </h1>
            <p className="text-lg text-slate-600">
              Get started with Giga Web Accessibility in just a few simple steps
            </p>
          </div>

          <div className="space-y-8">
            {/* WordPress Setup */}
            <Card className="shadow-md border border-slate-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <SiWordpress className="text-white text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    WordPress Plugin Setup
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {wordpressSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shopify Setup */}
            <Card className="shadow-md border border-slate-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <SiShopify className="text-white text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Shopify App Setup
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {shopifySteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Section */}
          <div className="mt-16 text-center">
            <Card className="bg-slate-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Need Help?
                </h3>
                <p className="text-slate-600 mb-6">
                  Our support team is here to help you get started with Giga Web Accessibility.
                </p>
                <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
