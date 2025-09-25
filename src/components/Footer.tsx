import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Biblioteca USM
                </h3>
                <p className="text-sm text-muted-foreground">
                  Universidad Santa María
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Tu centro de recursos académicos y de investigación, comprometido con la excelencia educativa.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Servicios
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#reservas" className="text-muted-foreground hover:text-primary transition-colors">
                  Reserva de Salas
                </a>
              </li>
              <li>
                <a href="#catalogo" className="text-muted-foreground hover:text-primary transition-colors">
                  Catálogo de Libros
                </a>
              </li>
              <li>
                <a href="#recursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Recursos Científicos
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Préstamos Interbibliotecarios
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Asesoría en Investigación
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Formación de Usuarios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contacto
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  Av. Universidad, Caracas 1080, Venezuela
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  +58 212 555-0123
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  biblioteca@usm.edu.ve
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <p>Lun - Vie: 7:00 AM - 10:00 PM</p>
                  <p>Sáb - Dom: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Mantente Informado
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Recibe notificaciones sobre nuevos recursos, eventos y servicios de la biblioteca.
            </p>
            <div className="space-y-3">
              <Input placeholder="Tu correo electrónico" />
              <Button className="w-full bg-gradient-primary hover:shadow-hover">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2024 Biblioteca USM. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Ayuda
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};