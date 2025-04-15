import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import profile from "../../JackSonguPortfolio/public/propic.jpg";
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code,
  Server,
  Database,
  Layout,
  Smartphone,
  ChevronRight,
  Download,
  Award,
  Calendar,
  ExternalLink,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-black/70 border-b border-gray-800">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-5 w-5 text-purple-500" />
            <span className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400 relative">
              JackSongu
              <span className="absolute top-0 left-1/4 h-1 w-1 bg-white rounded-full animate-pulse"></span>
              <span
                className="absolute top-1 right-1/4 h-1.5 w-1.5 bg-white rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></span>
              <span
                className="absolute bottom-1 left-1/3 h-1 w-1 bg-white rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#certifications"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              Certifications
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white">
            Hire Me
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_50%,rgba(124,58,237,0.15),rgba(16,185,129,0.05))]"></div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection animation="fade-right" className="space-y-4">
                <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300">
                  Software Engineer
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-400">
                    Songu Jacob Aondofe
                  </span>
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Developing reliable web applications using the latest technologies. Dedicated to crafting clean and
                  effective solutions for challenging problems.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white">
                    View My Work
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-700 text-purple-300 hover:bg-purple-900/40 hover:opacity-90 transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </Button>
                </div>
                <div className="flex gap-4 mt-6">
                  <Link href="https://github.com/aondofe014704" className="text-gray-400 hover:text-purple-400">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://www.linkedin.com/in/songu-jacob-340a971b8/" className="text-gray-400 hover:text-purple-400">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="https://x.com/jack_songu" className="text-gray-400 hover:text-purple-400">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="text-gray-400 hover:text-purple-400">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-left" className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-pulse-slow"></div>
                  <div
                    className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-pulse-medium"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full animate-float-slow"></div>
                  <div className="absolute -bottom-6 -left-2 w-6 h-6 bg-green-500/20 rounded-full animate-float-medium"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-300/30 rounded-full animate-float-fast"></div>

                  {/* Profile image */}
                  <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-gray-800 shadow-[0_0_15px_rgba(124,58,237,0.5)] z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-green-500/10 z-20"></div>
                    <Image
                      src="https://res.cloudinary.com/dejlekubm/image/upload/v1744655846/propic_tubkqd.jpg"
                      alt="Profile"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-green-500 mt-4 mb-8 rounded-full"></div>
            </AnimatedSection>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection animation="fade-right" className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-[0_0_25px_rgba(124,58,237,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-green-500/10 z-10"></div>
                  <Image src="https://res.cloudinary.com/dejlekubm/image/upload/v1744655846/propic_tubkqd.jpg" alt="About me" fill className="object-cover" />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-left" className="space-y-4">
                <p className="text-gray-300 md:text-lg">
                I'm a passionate software engineer with 5+ years of experience building high-impact web applications and digital products. 
                While I specialize in crafting sleek, responsive frontends with React, Flutter and Next.js, 
                I’m equally comfortable architecting scalable backends and automating infrastructure. 
                From pixel-perfect UIs to robust APIs and smooth CI/CD pipelines, 
                I bring a full-stack mindset and a DevOps edge to every project.
                </p>
                <p className="text-gray-300 md:text-lg">
                My journey into software development began in Semicolon Africa, 
                where I became hooked on creating intuitive, user-friendly interfaces. 
                That early passion grew into a career focused on building scalable, 
                high-performance applications across the stacks. 
                I’ve worked with startups and established companies to deliver robust, 
                accessible digital experiences — using React and Next.js on the frontend, 
                with Java and Spring Boot driving the backend. For media-heavy applications, 
                I’ve integrated Cloudinary as an end-to-end solution for managing images and video uploads, 
                transformations, optimizations, and seamless delivery. I’m all about clean code, smart architecture, 
                and crafting solutions that scale beautifully in the cloud.
                </p>
                <p className="text-gray-300 md:text-lg">
                  When I'm not coding, you can find me watching football, reading tech blogs, reading programming books
                  or experimenting with new technologies. I'm always eager to learn and grow as a developer.
                </p>
                <div className="pt-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white">
                    Learn More
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-black">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-green-500 mt-4 mb-8 rounded-full"></div>
              <p className="max-w-[600px] text-gray-300 md:text-lg">
                I've worked with a variety of technologies and frameworks to create responsive and efficient
                applications.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="border-none bg-gray-900 shadow-md hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-purple-900/50">
                        <Layout className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Frontend</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">React</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">Next.js</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">TypeScript</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">Tailwind CSS</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">HTML5</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">CSS3</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">JavaScript</Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="border-none bg-gray-900 shadow-md hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-green-900/50">
                        <Server className="h-6 w-6 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Backend</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">Java</Badge>
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">Spring Boot</Badge>
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">Python</Badge>
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">Django</Badge>
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">Express</Badge>
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">REST APIs</Badge>
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">Spring Boot</Badge>
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">Node.js</Badge>
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">PostMan</Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="border-none bg-gray-900 shadow-md hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-purple-900/50">
                        <Database className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Database</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">MongoDB</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">PostgreSQL</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">MySQL</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">Firebase</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">Supabase</Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="border-none bg-gray-900 shadow-md hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-green-900/50">
                        <Smartphone className="h-6 w-6 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Mobile</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">React Native</Badge>
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">Flutter</Badge>
                      <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800">Responsive Design</Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={500} className="md:col-span-2 lg:col-span-1">
                <Card className="border-none bg-gray-900 shadow-md hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-purple-900/50">
                        <Code className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">DevOps</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">Git</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">Docker</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">AWS</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">Vercel</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">CI/CD</Badge>
                      <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800">Jest</Badge>                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-green-500 mt-4 mb-8 rounded-full"></div>
              <p className="max-w-[600px] text-gray-300 md:text-lg">
                Here are some of my recent projects that showcase my skills and expertise.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="border-none bg-gray-900 shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-purple-900/50">
                        <Code className="h-5 w-5 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">E-Commerce Platform</h3>
                    </div>
                    <div className="mb-4">
                      <Badge className="bg-purple-900/50 text-purple-300">Web App</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      A full-stack e-commerce platform with product management, cart functionality, and payment
                      integration.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-purple-700 text-purple-300">
                        React
                      </Badge>
                      <Badge variant="outline" className="border-purple-700 text-purple-300">
                        Node.js
                      </Badge>
                      <Badge variant="outline" className="border-purple-700 text-purple-300">
                        MongoDB
                      </Badge>
                      <Badge variant="outline" className="border-purple-700 text-purple-300">
                        Stripe
                      </Badge>
                    </div>
                    <div className="flex gap-2 mt-6">
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white"
                        size="sm"
                      >
                        View Demo
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white"
                        size="sm"
                      >
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Project 2 */}
              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="border-none bg-gray-900 shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-green-900/50">
                        <Smartphone className="h-5 w-5 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Task Management App</h3>
                    </div>
                    <div className="mb-4">
                      <Badge className="bg-green-900/50 text-green-300">Mobile App</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      A task management application with real-time updates, notifications, and team collaboration
                      features.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-green-700 text-green-300">
                        React Native
                      </Badge>
                      <Badge variant="outline" className="border-green-700 text-green-300">
                        Firebase
                      </Badge>
                      <Badge variant="outline" className="border-green-700 text-green-300">
                        Redux
                      </Badge>
                    </div>
                    <div className="flex gap-2 mt-6">
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white"
                        size="sm"
                      >
                        View Demo
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white"
                        size="sm"
                      >
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Project 3 */}
              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="border-none bg-gray-900 shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-purple-900/50">
                        <Server className="h-5 w-5 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">AI Content Generator</h3>
                    </div>
                    <div className="mb-4">
                      <Badge className="bg-purple-900/50 text-purple-300">Web App</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">
                      An AI-powered content generation tool that helps users create blog posts, social media content,
                      and more.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-purple-700 text-purple-300">
                        Next.js
                      </Badge>
                      <Badge variant="outline" className="border-purple-700 text-purple-300">
                        OpenAI API
                      </Badge>
                      <Badge variant="outline" className="border-purple-700 text-purple-300">
                        Tailwind CSS
                      </Badge>
                    </div>
                    <div className="flex gap-2 mt-6">
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white"
                        size="sm"
                      >
                        View Demo
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white"
                        size="sm"
                      >
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
            <AnimatedSection animation="fade-up" delay={400} className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white">
                View All Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 md:py-24 bg-black">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-green-500 mt-4 mb-8 rounded-full"></div>
              <p className="max-w-[600px] text-gray-300 md:text-lg">
                Professional certifications and achievements that validate my expertise and knowledge.
              </p>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {/* Certification 1 */}
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="border-none bg-gray-900 shadow-md hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-purple-900/50 mt-1">
                        <Award className="h-6 w-6 text-purple-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">AWS Certified Solutions Architect</h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Issued: January 2023</span>
                        </div>
                        <p className="text-gray-300">
                          Validates expertise in designing and deploying scalable systems on AWS, including best
                          practices for security and cost optimization.
                        </p>
                        <Button className="mt-2 bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white">
                          <ExternalLink className="h-4 w-4 mr-2" /> View Credential
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Certification 2 */}
              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="border-none bg-gray-900 shadow-md hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-green-900/50 mt-1">
                        <Award className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">
                          Meta Frontend Developer Professional Certificate
                        </h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Issued: March 2022</span>
                        </div>
                        <p className="text-gray-300">
                          Comprehensive program covering React, JavaScript, HTML/CSS, and modern frontend development
                          practices.
                        </p>
                        <Button className="mt-2 bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white">
                          <ExternalLink className="h-4 w-4 mr-2" /> View Credential
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Certification 3 */}
              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="border-none bg-gray-900 shadow-md hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-purple-900/50 mt-1">
                        <Award className="h-6 w-6 text-purple-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Google Professional Data Engineer</h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Issued: September 2022</span>
                        </div>
                        <p className="text-gray-300">
                          Certification for designing and building data processing systems, creating machine learning
                          models, and ensuring solution quality.
                        </p>
                        <Button className="mt-2 bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white">
                          <ExternalLink className="h-4 w-4 mr-2" /> View Credential
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Certification 4 */}
              <AnimatedSection animation="fade-up" delay={400}>
                <Card className="border-none bg-gray-900 shadow-md hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-green-900/50 mt-1">
                        <Award className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">MongoDB Certified Developer Associate</h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Issued: May 2023</span>
                        </div>
                        <p className="text-gray-300">
                          Validates skills in developing applications using MongoDB, including data modeling, querying,
                          and performance optimization.
                        </p>
                        <Button className="mt-2 bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white">
                          <ExternalLink className="h-4 w-4 mr-2" /> View Credential
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-green-500 mt-4 mb-8 rounded-full"></div>
              <p className="max-w-[600px] text-gray-300 md:text-lg">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedSection animation="fade-right">
                <Card className="border-none bg-gray-900 shadow-md">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="fade-left" className="space-y-6">
                <AnimatedSection animation="fade-up" delay={100}>
                  <Card className="border-none bg-gray-900 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-purple-900/50">
                          <Mail className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">Email</h3>
                          <p className="text-gray-300">songujack@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={200}>
                  <Card className="border-none bg-gray-900 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-green-900/50">
                          <Linkedin className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">LinkedIn</h3>
                          <p className="text-gray-300">linkedin.com/in/jacksongu</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={300}>
                  <Card className="border-none bg-gray-900 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-purple-900/50">
                          <Github className="h-6 w-6 text-purple-400"/>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">GitHub</h3>
                          <p className="text-gray-300">github.com/aondofe014704</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-black border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection animation="fade-up" delay={100}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code className="h-5 w-5 text-purple-500" />
                  <span className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400 relative">
                    JackSongu
                    <span className="absolute top-0 left-1/4 h-1 w-1 bg-white rounded-full animate-pulse"></span>
                    <span
                      className="absolute top-1 right-1/4 h-1.5 w-1.5 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></span>
                    <span
                      className="absolute bottom-1 left-1/3 h-1 w-1 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></span>
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Building exceptional digital experiences with modern technologies.
                </p>
                <div className="flex gap-4">
                  <Link href="https://github.com/aondofe014704" className="text-gray-400 hover:text-purple-400">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://www.linkedin.com/in/songu-jacob-340a971b8/" className="text-gray-400 hover:text-purple-400">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="https://x.com/jack_songu" className="text-gray-400 hover:text-purple-400">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="text-gray-400 hover:text-purple-400">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#about" className="text-gray-400 hover:text-purple-400">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#skills" className="text-gray-400 hover:text-purple-400">
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" className="text-gray-400 hover:text-purple-400">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="#certifications" className="text-gray-400 hover:text-purple-400">
                      Certifications
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-gray-400 hover:text-purple-400">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-purple-400">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-purple-400">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-purple-400">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-purple-400">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Subscribe to my newsletter for the latest updates and articles.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700/80 hover:to-green-600/80 hover:opacity-90 transition-all duration-300 text-white">
                    Subscribe
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Jack Songu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
