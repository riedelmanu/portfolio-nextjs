import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail, ExternalLink, Menu } from "lucide-react"

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
<section id="home" className="w-full overflow-x-hidden py-12 md:py-24 lg:py-32 xl:py-48">
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
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 overflow-x-hidden">
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
                  <CardTitle>E-commerce Platform</CardTitle>
                  <CardDescription>Plataforma de comercio electrónico completa</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="E-commerce Project"
                      width={350}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>MongoDB</Badge>
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

              {/* Project Card 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Task Manager</CardTitle>
                  <CardDescription>Aplicación de gestión de tareas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Task Manager Project"
                      width={350}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Next.js</Badge>
                    <Badge>Prisma</Badge>
                    <Badge>PostgreSQL</Badge>
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
                  <CardTitle>Weather App</CardTitle>
                  <CardDescription>Aplicación de pronóstico del tiempo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Weather App Project"
                      width={350}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Vue.js</Badge>
                    <Badge>Tailwind</Badge>
                    <Badge>API</Badge>
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
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 overflow-x-hidden">
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
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-muted p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <path d="M13 2v7h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">JavaScript</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-muted p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <path d="M13 2v7h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">React</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-muted p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <path d="M13 2v7h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Node.js</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-muted p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <path d="M13 2v7h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">TypeScript</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-muted p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <path d="M13 2v7h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Next.js</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-muted p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <path d="M13 2v7h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">MongoDB</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-muted p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <path d="M13 2v7h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">PostgreSQL</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="rounded-full bg-muted p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <path d="M13 2v7h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Tailwind CSS</h3>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 overflow-x-hidden">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut debitis magnam nostrum sapiente delectus. Dignissimos inventore nostrum tempora consequatur? Quis expedita, illo eligendi necessitatibus quam quos aliquid officia perspiciatis.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est et quae deserunt aspernatur itaque reprehenderit voluptate suscipit eveniet, iusto qui odit dicta id architecto quos. Unde veniam earum itaque autem!
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores inventore earum amet aut eius voluptatibus totam repudiandae culpa, veniam similique consequatur delectus consectetur aliquam nam ipsam aperiam sequi dignissimos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
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
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nombre
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tu mensaje"
                      />
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
                  <h3 className="text-xl font-bold">Otras formas de contacto</h3>
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
            &copy; {new Date().getFullYear()} DevPortfolio. Todos los derechos reservados.
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
