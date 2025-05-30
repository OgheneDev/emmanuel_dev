import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Link href="https://github.com/OgheneDev" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/emmanuel-oghene-0242182ab" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:emmanueloghene72@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Oghene Emmanuel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
