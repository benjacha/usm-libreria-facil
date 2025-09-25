import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Search, Globe, ArrowRight, BookOpen, Users, Database } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Tu biblioteca
            <span className="bg-gradient-usm bg-clip-text text-transparent"> USM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sistema integral de biblioteca universitaria. Reserva salas, encuentra recursos académicos 
            y accede a bases de datos científicas de la Universidad Técnica Federico Santa María.
          </p>
        </div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Reserva de Salas */}
          <Card className="group hover:shadow-hover transition-all duration-300 animate-slide-up border-0 shadow-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Reserva de Salas
              </h3>
              <p className="text-muted-foreground mb-6">
                Reserva salas de estudio individuales o grupales. Ve disponibilidad en tiempo real.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Users className="w-4 h-4 text-secondary" />
                  <span>Salas para 1-8 personas</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-secondary" />
                  <span>Disponibilidad inmediata</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-primary hover:shadow-hover">
                Reservar Ahora
                <Calendar className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Búsqueda de Libros */}
          <Card className="group hover:shadow-hover transition-all duration-300 animate-slide-up border-0 shadow-card" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                <Search className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Catálogo de Libros
              </h3>
              <p className="text-muted-foreground mb-6">
                Busca en nuestro extenso catálogo de libros físicos y digitales con filtros avanzados.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <BookOpen className="w-4 h-4 text-secondary" />
                  <span>+50,000 títulos disponibles</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-secondary" />
                  <span>Búsqueda inteligente</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-secondary hover:shadow-hover text-secondary-foreground">
                Buscar Libros
                <Search className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Recursos Científicos */}
          <Card className="group hover:shadow-hover transition-all duration-300 animate-slide-up border-0 shadow-card" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Recursos Científicos
              </h3>
              <p className="text-muted-foreground mb-6">
                Accede a bases de datos especializadas, revistas científicas y repositorios académicos.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Database className="w-4 h-4 text-primary" />
                  <span>Bases de datos especializadas</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Acceso 24/7</span>
                </div>
              </div>
              <Button variant="outline" className="w-full hover:bg-secondary hover:text-secondary-foreground hover:shadow-hover border-primary">
                Explorar Recursos
                <Globe className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-float">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Libros</div>
          </div>
          <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl font-bold text-secondary mb-2">25</div>
            <div className="text-sm text-muted-foreground">Salas de Estudio</div>
          </div>
          <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Bases de Datos</div>
          </div>
          <div className="text-center animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Acceso Online</div>
          </div>
        </div>
      </div>
    </section>
  );
};