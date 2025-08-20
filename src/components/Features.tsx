import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MessageSquare, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3,
  Heart,
  Clock,
  Sparkles
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Advanced Voice Recognition",
      description: "State-of-the-art speech processing with multilingual support and real-time transcription.",
      badge: "Voice AI",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Contextual Conversations",
      description: "AI that remembers context, understands nuance, and provides meaningful responses.",
      badge: "NLP",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and privacy protection for all your conversations and data.",
      badge: "Security",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second response times with optimized AI models and edge computing.",
      badge: "Performance",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Support for 50+ languages with cultural awareness and regional customization.",
      badge: "International",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive insights and analytics dashboard for monitoring and optimization.",
      badge: "Analytics",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "AI that understands emotions, mood, and provides appropriate empathetic responses.",
      badge: "Empathy AI",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Always-on AI companion that's ready to help whenever you need support or assistance.",
      badge: "Reliability",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Advanced Features
            </Badge>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Built for the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI solutions come packed with cutting-edge features designed to provide 
            the most advanced and user-friendly experience possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-hover p-6 bg-card/50 backdrop-blur-sm relative overflow-hidden group h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl border-glow bg-card/30 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of users who are already transforming their lives with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-medium glow-primary interactive-element">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};