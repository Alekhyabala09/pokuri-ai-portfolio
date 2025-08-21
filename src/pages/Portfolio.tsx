import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Code, 
  Database, 
  Monitor, 
  Settings,
  Award,
  Calendar,
  Building,
  GraduationCap,
  Trophy,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  
  const skills = {
    programming: ['C', 'Python', 'SQL', 'DSA'],
    web: ['HTML', 'CSS', 'Streamlit'],
    tools: ['VS Code', 'Jupyter Notebook', 'GitHub', 'Excel', 'MS Word'],
    environment: ['Windows']
  };
  
  const projects = [
    {
      title: 'Smart Event Ticketing System',
      tech: 'Flask',
      description: 'Developed an event booking system with real-time tracking, secure payments, and user authentication.',
      period: 'Feb 2025 – Mar 2025',
      status: 'Recent'
    },
    {
      title: 'Data Download Duplicate Alert System',
      tech: 'Python',
      description: 'Designed a file download monitor using hashing algorithms with real-time duplicate detection alerts.',
      period: 'Oct 2024 – Jan 2025',
      status: 'Completed'
    },
    {
      title: 'Intrusion Detection System',
      tech: 'Python',
      description: 'Built a network traffic scanner to detect malicious keywords and suspicious patterns.',
      period: 'Dec 2023 – Feb 2024',
      status: 'Completed'
    }
  ];
  
  const experience = [
    {
      title: 'State Level Hackathon',
      organization: 'GM University',
      description: 'Collaborated in a 24-hour hackathon to design innovative solutions, strengthening teamwork and problem-solving skills.',
      date: 'Dec 2024',
      type: 'Competition'
    },
    {
      title: 'Web Development Workshop',
      organization: 'Training Institute',
      description: 'Gained hands-on training in responsive design, layout structuring, and styling techniques.',
      date: '2024',
      type: 'Workshop'
    }
  ];
  
  const education = [
    {
      degree: 'B.E. in AI & ML',
      institution: 'Ballari Institute of Technology and Management',
      location: 'Ballari, India',
      period: '2022–2026',
      grade: 'CGPA: 8.33'
    },
    {
      degree: 'PUC',
      institution: 'Sri Venkateshwara Junior College',
      location: 'Rayadurg, India',
      period: '2020–2022',
      grade: 'GPA: 65.8'
    }
  ];
  
  const achievements = [
    'Active coder on LeetCode, improving problem-solving speed',
    'Developed multiple academic projects with real-world applications',
    'Represented college at a state-level hackathon'
  ];
  
  const certifications = [
    {
      title: 'DSA',
      issuer: 'Infosys Springboard',
      date: 'Mar 2024'
    },
    {
      title: 'Python Programming',
      issuer: 'EZTS',
      date: 'May 2024'
    },
    {
      title: 'HTML & CSS',
      issuer: 'BITM',
      date: 'Nov 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gradient">Pokuri Alekhya</div>
            <div className="hidden md:flex space-x-6">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="space-y-4 fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">Pokuri Alekhya</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary-glow">
                Aspiring AI & ML Engineer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate about building intelligent software solutions and solving real-world challenges
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="animate-pulse-glow"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                <MessageCircle className="w-5 h-5" />
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src={profilePhoto} 
                    alt="Pokuri Alekhya"
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto card-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aspiring Artificial Intelligence and Machine Learning Engineer with a strong foundation in 
                  <strong className="text-primary"> C, Python, SQL, and Data Structures</strong>. 
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate about developing practical software solutions, solving logical challenges, and 
                  continuously strengthening technical expertise. Hands-on experience with 
                  <strong className="text-primary"> Flask, web technologies, and system design</strong>, 
                  eager to apply skills in real-world applications.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Problem Solver', 'Team Player', 'Quick Learner', 'Innovation Focused'].map((trait) => (
                    <Badge key={trait} variant="outline" className="px-4 py-2">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Skills & Technologies</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="card-gradient card-hover">
                <CardHeader className="text-center">
                  <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Programming</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills.programming.map((skill) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span>{skill}</span>
                        <CheckCircle className="w-4 h-4 text-success" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient card-hover">
                <CardHeader className="text-center">
                  <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills.web.map((skill) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span>{skill}</span>
                        <CheckCircle className="w-4 h-4 text-success" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient card-hover">
                <CardHeader className="text-center">
                  <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills.tools.map((skill) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm">{skill}</span>
                        <CheckCircle className="w-4 h-4 text-success" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient card-hover">
                <CardHeader className="text-center">
                  <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Environment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills.environment.map((skill) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span>{skill}</span>
                        <CheckCircle className="w-4 h-4 text-success" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="card-gradient card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant={project.status === 'Recent' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      {project.tech}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{project.period}</span>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Experience</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <Card className="card-gradient">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Building className="w-5 h-5 text-primary" />
                            {exp.title}
                          </CardTitle>
                          <CardDescription>{exp.organization}</CardDescription>
                        </div>
                        <Badge variant="outline">{exp.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">{exp.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.date}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Education</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <Card className="card-gradient">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        {edu.degree}
                      </CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">{edu.period}</div>
                          <div className="text-sm font-medium text-primary">{edu.grade}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Achievements</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-gradient card-hover text-center">
                  <CardHeader>
                    <Trophy className="w-12 h-12 text-primary mx-auto" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Certifications</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-gradient card-hover">
                  <CardHeader className="text-center">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="outline">{cert.date}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Let's Connect</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
              <p className="mt-4 text-muted-foreground">Ready to collaborate on exciting AI/ML projects</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">alekhya.pokuri.1@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+91 91825 30172</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">Rayadurg, India</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => window.open('https://linkedin.com/in/pokuri-alekhya', '_blank')}
                    className="glow-on-hover"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => window.open('https://leetcode.com/u/Alekhyabala08/', '_blank')}
                    className="glow-on-hover"
                  >
                    <Code className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => window.open('https://github.com', '_blank')}
                    className="glow-on-hover"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>Send Message</CardTitle>
                  <CardDescription>Let's discuss opportunities and collaborations</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                    <Button type="submit" variant="hero" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">© 2025 Pokuri Alekhya. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button 
                variant="portfolio" 
                size="sm"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;