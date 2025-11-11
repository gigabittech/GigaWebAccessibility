import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-6 pt-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Setup Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get started with Giga Web Accessibility in just a few simple steps
            </p>
          </div>

          <div className="space-y-8">
            {/* WordPress Setup */}
            <Card className="bg-card border border-border shadow-2xl backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <SiWordpress className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    WordPress Plugin Setup
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {wordpressSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1 shadow-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 text-lg">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shopify Setup */}
            <Card className="bg-card border border-border shadow-2xl backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <SiShopify className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Shopify App Setup
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {shopifySteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1 shadow-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 text-lg">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Section */}
          <div className="mt-20 text-center">
            <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Need Help?
                </h3>
                <p className="text-muted-foreground mb-8 text-lg max-w-lg mx-auto leading-relaxed">
                  Our support team is here to help you get started with Giga Web Accessibility.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
