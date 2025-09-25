import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, BookOpen, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-gradient-primary shadow-card border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">
                Biblioteca USM
              </h1>
              <p className="text-sm text-primary-foreground/80">
                Universidad Técnica Federico Santa María
              </p>
            </div>
          </div>

          {/* Quick Search */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar libros, autores, temas..."
                className="pl-10 bg-white/90 border-white/20"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a
              href="#reservas"
              className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium"
            >
              Reservar Salas
            </a>
            <a
              href="#catalogo"
              className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium"
            >
              Catálogo
            </a>
            <a
              href="#recursos"
              className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium"
            >
              Recursos Científicos
            </a>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" size="sm">
              <User className="w-4 h-4 mr-2" />
              Acceso USM
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="sm" className="lg:hidden border-white/20 text-primary-foreground hover:bg-white/10">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};