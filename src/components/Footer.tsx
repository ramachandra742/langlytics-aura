import { Sparkles, Mail, MapPin, Phone } from "lucide-react";
const langlyticsLogo = "/lovable-uploads/00d70786-eb41-45d6-b4ec-bc40525e4f48.png";

export const Footer = () => {
  const footerSections = [
    {
      title: "Solutions",
      links: ["Voice AI Companion", "ChatMyDocs", "Custom AI Solutions"]
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "News & Updates"]
    },
    {
      title: "Resources",
      links: ["Blogs", "Help Center", "Community"]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms of Service", href: "/terms" },
        { text: "Cookie Policy", href: "/cookies" }
      ]
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={langlyticsLogo} 
                alt="Langlytics" 
                className="h-10 w-auto object-contain"
                style={{ 
                  filter: 'brightness(1.2) contrast(1.1)',
                  clipPath: 'inset(0 0 25% 0)'
                }}
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering human connection through advanced AI solutions. 
              Building the future of artificial intelligence, one conversation at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@langlytics.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 8904604850</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={section.title === "Legal" ? link.href : "#"} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {section.title === "Legal" ? link.text : link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Langlytics. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground">Powered by Advanced AI</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};