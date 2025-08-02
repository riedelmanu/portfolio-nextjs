import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail, ExternalLink, Menu } from "lucide-react"
import {Code2, Braces, Database, TerminalSquare, Atom, FileCode, Server, LayoutPanelLeft} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <FileCode className="h-6 w-6" /> },
  { name: "React", icon: <Atom className="h-6 w-6" /> },
  { name: "Node.js", icon: <Server className="h-6 w-6" /> },
  { name: "TypeScript", icon: <Code2 className="h-6 w-6" /> },
  { name: "Next.js", icon: <LayoutPanelLeft className="h-6 w-6" /> },
  { name: "C#", icon: <Braces className="h-6 w-6" /> },
  { name: "MySQL", icon: <Database className="h-6 w-6" /> },
  { name: "Tailwind CSS", icon: <TerminalSquare className="h-6 w-6" /> },
];

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-screen-xl mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold ml-4">
            <span className="text-xl">DevPortfolio</span>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Proyectos
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Habilidades
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Sobre mí
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
       <section id="home" className="w-full min-h-screen flex items-center overflow-x-hidden">
         <div className="max-w-4xl mx-auto px-4 md:px-6">
           <div className="flex flex-col items-center justify-center text-center space-y-6">
             <div className="space-y-2">
               <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                 Manuel Ángel Riedel
               </h1>
               <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                 Estudiante de Ingeniería en Sistemas de Información con gran interés por el desarrollo de software.
               </p>
             </div>
             <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
               <Link href="#projects">
                 <Button>Ver proyectos</Button>
               </Link>
               <Link href="#contact">
                 <Button variant="outline">Contacto</Button>
               </Link>
             </div>
           </div>
         </div>
       </section>

        {/* Projects Section */}
        <section id="projects" className="w-full min-h-screen flex items-center overflow-x-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[600px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mis Proyectos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Una selección de mis trabajos más recientes y destacados en desarrollo de software.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {/* Project Card 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>NewsApp</CardTitle>
                  <CardDescription>Backend de una aplicación de noticias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/images/NET.png"
                      alt=".NET"
                      width={350}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>C#</Badge>
                    <Badge>.NET</Badge>
                    <Badge>EntityFramework</Badge>
                    <Badge>SQLServer</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <a
                    href="https://github.com/DDSW2023/NewsApp"
                    className="text-sm flex items-center gap-1 hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Github className="h-4 w-4" />
                    <span>Código</span>
                  </a>
                </CardFooter>
              </Card>

              {/* Project Card 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Proyecto2</CardTitle>
                  <CardDescription>descripción</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="proyecto2"
                      width={350}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>tecnologías</Badge>
                    <Badge>tecnologías</Badge>
                    <Badge>tecnologías</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="#" className="text-sm flex items-center gap-1 hover:text-primary">
                    <Github className="h-4 w-4" />
                    <span>Código</span>
                  </Link>
                  <Link href="#" className="text-sm flex items-center gap-1 hover:text-primary">
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </Link>
                </CardFooter>
              </Card>

              {/* Project Card 3 */}
              <Card>
                <CardHeader>
                  <CardTitle>proyecto1</CardTitle>
                  <CardDescription>descripción</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="proyecto3"
                      width={350}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>tecnologías</Badge>
                    <Badge>tecnologías</Badge>
                    <Badge>tecnologías</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="#" className="text-sm flex items-center gap-1 hover:text-primary">
                    <Github className="h-4 w-4" />
                    <span>Código</span>
                  </Link>
                  <Link href="#" className="text-sm flex items-center gap-1 hover:text-primary">
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
       <section id="skills" className="w-full min-h-screen flex items-center overflow-x-hidden">
         <div className="max-w-6xl mx-auto px-4 md:px-6">
           <div className="flex flex-col items-center justify-center space-y-4 text-center">
             <div className="space-y-2 max-w-[600px]">
               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mis Habilidades</h2>
               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                 Tecnologías y herramientas que domino para el desarrollo de software.
               </p>
             </div>
           </div> 
           <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
             {skills.map((skill) => (
               <div key={skill.name} className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                 <div className="rounded-full bg-muted p-2 text-muted-foreground">
                   {skill.icon}
                 </div>
                 <h3 className="text-lg font-bold">{skill.name}</h3>
               </div>
             ))}
           </div>
         </div>
       </section>

        {/* About Section */}
        <section id="about" className="w-full min-h-screen flex items-center overflow-x-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/perfil.jpg"
                  alt="Sobre mí"
                  width={400}
                  height={400}
                  className="rounded-lg aspect-square object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 max-w-[600px]">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre Mí</h2>
                  <p className="text-muted-foreground">
                    Tengo 22 años y actualmente estoy en el último tramo de la carrera de Ingeniería en Sistemas de Información. A lo largo de mi formación, descubrí una fuerte vocación por el desarrollo de software, especialmente en el área backend. También realicé un curso de desarrollo full stack que me permitió ampliar mi visión técnica y reforzar conocimientos prácticos en distintas capas de una aplicación.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Me considero una persona proactiva, con gran interés por seguir aprendiendo e investigando nuevas tecnologías. Disfruto enfrentar desafíos técnicos y participar activamente en proyectos donde pueda contribuir con soluciones funcionales. Si bien mi enfoque principal es el desarrollo, estoy abierto a asumir otros roles del ámbito IT como análisis de datos, QA o soporte técnico, donde pueda seguir aprendiendo y aportando.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    He formado parte de varios proyectos en equipo, donde no solo consolidé mis habilidades técnicas, sino también mi capacidad de comunicación y colaboración. Me adapto bien a entornos dinámicos y disfruto trabajar en conjunto para alcanzar objetivos comunes, colaborando desde el compromiso y la responsabilidad profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full min-h-screen flex items-center overflow-x-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contacto</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Envíame un mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y me pondré en contacto contigo lo antes posible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="grid gap-4"
                    action="https://formspree.io/f/xqabvyab"
                    method="POST"
                    >
                    <div className="grid gap-2">
                       <label htmlFor="name">Nombre</label>
                       <input id="name" name="name" placeholder="Tu nombre" required />
                     </div>
                     <div className="grid gap-2">
                       <label htmlFor="email">Email</label>
                       <input id="email" name="email" type="email" placeholder="tu@email.com" required />
                     </div>
                     <div className="grid gap-2">
                       <label htmlFor="message">Mensaje</label>
                       <textarea id="message" name="message" placeholder="Tu mensaje" required />
                     </div>
                     <Button type="submit" className="w-full">
                       Enviar mensaje
                     </Button>
                    </form>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-muted-foreground">manuelriedel002@gmail.com</p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Ubicación</h3>
                  <p className="text-muted-foreground">Concepción del Uruguay, Argentina</p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Horario de trabajo</h3>
                  <p className="text-muted-foreground">Disponibilidad horaria flexible según requerimientos del proyecto</p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Más sobre mí</h3>
                  <div className="flex space-x-4">
                    <a  href="https://github.com/riedelmanu" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </a>    
                    <a href="https://www.linkedin.com/in/manuel-riedel-997383255/" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:manuelriedel002@gmail.com" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <Mail className="h-6 w-6" />
                      <span className="sr-only">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Manuel Ángel Riedel. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
