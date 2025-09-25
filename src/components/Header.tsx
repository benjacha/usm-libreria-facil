import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, BookOpen, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-card shadow-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Biblioteca USM
              </h1>
              <p className="text-sm text-muted-foreground">
                Universidad Santa María
              </p>
            </div>
          </div>

          {/* Quick Search */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar libros, autores, temas..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a
              href="#reservas"
              className="text-foreground hover:text-primary transition-colors"
            >
              Reservar Salas
            </a>
            <a
              href="#catalogo"
              className="text-foreground hover:text-primary transition-colors"
            >
              Catálogo
            </a>
            <a
              href="#recursos"
              className="text-foreground hover:text-primary transition-colors"
            >
              Recursos Científicos
            </a>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Ingresar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="sm" className="lg:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};