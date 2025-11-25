import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import heroPortrait from "@/assets/hero-portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    const whatsappNumber = "1234567890"; // Replace with your WhatsApp number
    const message = `New Contact Form Submission:\n\nName: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    form.reset();
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack shopping platform with payment integration and admin dashboard",
      image: project1,
      tags: ["React", "Node.js", "Stripe"]
    },
    {
      title: "Banking App",
      description: "Secure mobile banking application with real-time transactions",
      image: project2,
      tags: ["React Native", "Firebase", "Plaid"]
    },
    {
      title: "Social Network",
      description: "Modern social platform with real-time messaging and content sharing",
      image: project3,
      tags: ["Next.js", "GraphQL", "PostgreSQL"]
    },
    {
      title: "Fitness Tracker",
      description: "Workout planning and progress tracking application",
      image: project4,
      tags: ["React", "Express", "MongoDB"]
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search and filters",
      image: project5,
      tags: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      title: "Food Delivery App",
      description: "Restaurant ordering system with real-time delivery tracking",
      image: project6,
      tags: ["Flutter", "Django", "Redis"]
    }
  ];

  const blogPosts = [
    {
      id: "1",
      title: "Modern Web Development Best Practices",
      summary: "Explore the latest trends and techniques in building scalable web applications with modern frameworks and tools.",
      image: blog1,
      date: "March 15, 2024"
    },
    {
      id: "2",
      title: "SEO Optimization Strategies for 2024",
      summary: "Learn essential SEO tactics to improve your website's visibility and ranking in search engine results.",
      image: blog2,
      date: "March 10, 2024"
    },
    {
      id: "3",
      title: "Building Cross-Platform Mobile Apps",
      summary: "A comprehensive guide to developing mobile applications that work seamlessly across iOS and Android.",
      image: blog3,
      date: "March 5, 2024"
    }
  ];

  const skills = [
    { category: "Programming", items: ["JavaScript", "TypeScript", "Python", "Java"] },
    { category: "Frontend", items: ["React", "Vue", "Next.js", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Django", "Laravel", "Express"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] }
  ];

  const experience = [
    { 
      company: "Tech Innovators Inc.",
      logo: "https://placehold.co/60x60/6366f1/ffffff?text=TI",
      role: "Senior Full-Stack Developer",
      period: "2020 - Present",
      description: "Leading development of enterprise-scale applications, mentoring junior developers, and architecting cloud solutions."
    },
    { 
      company: "Digital Solutions Co.",
      logo: "https://placehold.co/60x60/8b5cf6/ffffff?text=DS",
      role: "Full-Stack Developer",
      period: "2018 - 2020",
      description: "Built responsive web applications and RESTful APIs, optimized database performance and deployment pipelines."
    },
    { 
      company: "StartUp Studios",
      logo: "https://placehold.co/60x60/ec4899/ffffff?text=SS",
      role: "Frontend Developer",
      period: "2016 - 2018",
      description: "Developed user interfaces for multiple products, implemented responsive designs and improved site performance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border-subtle z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Portfolio</h2>
          
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border-subtle">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>Portfolio</a>
              <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>Blog</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={heroPortrait} 
                alt="Professional portrait" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight">
                <span className="text-foreground font-outline text-shadow-lg">JOHN</span><br />
                <span className="text-foreground">SMITH</span>
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary" className="text-sm py-2 px-4">Web Developer</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">App Developer</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">SEO Optimizer</Badge>
              </div>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Crafting digital experiences that blend beautiful design with powerful functionality. 
                Specialized in building scalable web applications and mobile solutions.
              </p>

              <Button size="lg" className="group">
                Get in touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-background-subtle">
        <div className="container mx-auto px-6">
          <blockquote className="text-center max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl italic text-muted-foreground leading-relaxed">
              "The only way to do great work is to love what you do."
            </p>
            <footer className="mt-6 text-lg text-muted-foreground">— Steve Jobs</footer>
          </blockquote>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 8 years of experience building 
                digital products. I specialize in creating elegant solutions that solve real-world 
                problems and deliver exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                My approach combines clean code practices, modern technologies, and a deep 
                understanding of user needs to create applications that not only work flawlessly 
                but also delight users at every interaction.
              </p>

              <Card className="p-8 border-border-subtle hover:shadow-2xl transition-all duration-300">
                <div className="mb-8">
                  <h3 className="font-bold text-3xl mb-2">Work Experience</h3>
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className={`${index !== experience.length - 1 ? "pb-8 border-b border-border-subtle" : ""}`}>
                      <div className="flex items-start gap-4 mb-4">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-14 h-14 rounded-lg object-cover border border-border-subtle"
                        />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                            <h4 className="font-bold text-xl">{exp.company}</h4>
                            <span className="text-xs text-muted-foreground font-semibold px-3 py-1 bg-background-subtle rounded-full whitespace-nowrap">{exp.period}</span>
                          </div>
                          <p className="text-base font-semibold text-primary mb-3">{exp.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-8 border-border-subtle hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background via-background-subtle to-background sticky top-24">
                <div className="mb-8">
                  <h3 className="font-bold text-3xl mb-2">Tech Stack</h3>
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.category} className="group">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <p className="text-sm font-bold text-foreground uppercase tracking-wider">{skill.category}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 pl-5">
                        {skill.items.map((item) => (
                          <div 
                            key={item} 
                            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background-subtle border border-border-subtle hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default group-hover:border-primary/50"
                          >
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg">
                              {item.substring(0, 2).toUpperCase()}
                            </div>
                            <span className="text-xs font-semibold text-center">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 bg-background-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing expertise across different technologies and industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-border-subtle hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="lg">
                      View Project
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Blog Posts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development and technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden border-border-subtle hover:shadow-lg transition-shadow group">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {post.summary}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto font-semibold group"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    Read more
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Drop me a message and let's create something amazing together.
              </p>
            </div>

            <Card className="p-8 md:p-12 border-border-subtle shadow-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project or idea..." 
                            {...field} 
                            className="min-h-[150px] resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full md:w-auto gap-2 font-semibold">
                    Send Message
                    <Send size={18} />
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background-subtle border-t border-border-subtle">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Let's work together</h3>
              <p className="text-muted-foreground">Get in touch for opportunities or collaborations</p>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Github size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Mail size={20} />
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border-subtle text-center text-sm text-muted-foreground">
            <p>© 2024 John Smith. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
