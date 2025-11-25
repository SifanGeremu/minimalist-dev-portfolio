import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogData = [
  {
    id: "1",
    title: "Modern Web Development Best Practices",
    summary: "Explore the latest trends and techniques in building scalable web applications with modern frameworks and tools.",
    image: blog1,
    date: "March 15, 2024",
    content: `
      <h2>Introduction</h2>
      <p>Modern web development has evolved significantly over the past few years. In this article, we'll explore the best practices that every developer should follow.</p>
      
      <h2>Key Principles</h2>
      <p>Building scalable web applications requires careful consideration of architecture, performance, and maintainability. Here are some essential principles to follow...</p>
      
      <h2>Framework Selection</h2>
      <p>Choosing the right framework is crucial for project success. Consider factors like team expertise, project requirements, and long-term maintenance...</p>
      
      <h2>Conclusion</h2>
      <p>By following these best practices, you'll be well-equipped to build modern, scalable web applications that stand the test of time.</p>
    `
  },
  {
    id: "2",
    title: "SEO Optimization Strategies for 2024",
    summary: "Learn essential SEO tactics to improve your website's visibility and ranking in search engine results.",
    image: blog2,
    date: "March 10, 2024",
    content: `
      <h2>Understanding SEO</h2>
      <p>Search Engine Optimization is more important than ever in 2024. Let's dive into the strategies that will help your website rank higher.</p>
      
      <h2>Technical SEO</h2>
      <p>Technical optimization forms the foundation of good SEO. Focus on site speed, mobile responsiveness, and proper indexing...</p>
      
      <h2>Content Strategy</h2>
      <p>Quality content remains king. Create valuable, relevant content that addresses user intent and provides real solutions...</p>
      
      <h2>Future Trends</h2>
      <p>Stay ahead of the curve by understanding emerging SEO trends and adapting your strategy accordingly.</p>
    `
  },
  {
    id: "3",
    title: "Building Cross-Platform Mobile Apps",
    summary: "A comprehensive guide to developing mobile applications that work seamlessly across iOS and Android.",
    image: blog3,
    date: "March 5, 2024",
    content: `
      <h2>Cross-Platform Development</h2>
      <p>Building apps that work on multiple platforms can save time and resources while reaching a wider audience.</p>
      
      <h2>Choosing Your Framework</h2>
      <p>React Native, Flutter, and other frameworks offer different advantages. We'll help you choose the right one for your needs...</p>
      
      <h2>Performance Considerations</h2>
      <p>Ensuring your cross-platform app performs well on both iOS and Android requires careful optimization and testing...</p>
      
      <h2>Deployment</h2>
      <p>Learn how to deploy your app to both the App Store and Google Play Store efficiently.</p>
    `
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogData.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border-subtle z-50">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Button>
        </div>
      </nav>
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          
          <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {post.summary}
          </p>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
