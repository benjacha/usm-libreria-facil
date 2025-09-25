import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Database, FileText, Globe, Zap, Shield, Clock } from "lucide-react";

export const ScientificResources = () => {
  const databases = [
    {
      name: "IEEE Xplore Digital Library",
      description: "Base de datos líder en ingeniería eléctrica, electrónica y ciencias de la computación",
      subjects: ["Ingeniería", "Tecnología", "Ciencias de la Computación"],
      access: "Acceso completo",
      type: "premium",
      icon: "⚡"
    },
    {
      name: "PubMed",
      description: "Base de datos biomédica con millones de artículos de ciencias de la vida",
      subjects: ["Medicina", "Biología", "Biomedicina"],
      access: "Acceso libre",
      type: "free",
      icon: "🧬"
    },
    {
      name: "JSTOR",
      description: "Archivo digital académico con revistas, libros y fuentes primarias",
      subjects: ["Historia", "Literatura", "Ciencias Sociales"],
      access: "Acceso completo",
      type: "premium",
      icon: "📚"
    },
    {
      name: "ScienceDirect",
      description: "Plataforma de literatura científica con artículos de alta calidad",
      subjects: ["Ciencias", "Ingeniería", "Medicina"],
      access: "Acceso completo",
      type: "premium",
      icon: "🔬"
    },
    {
      name: "Scopus",
      description: "Base de datos bibliográfica con herramientas de análisis de investigación",
      subjects: ["Multidisciplinario"],
      access: "Acceso completo",
      type: "premium",
      icon: "📊"
    },
    {
      name: "arXiv",
      description: "Repositorio de preprints en física, matemáticas, ciencias de la computación",
      subjects: ["Física", "Matemáticas", "Ciencias de la Computación"],
      access: "Acceso libre",
      type: "free",
      icon: "∞"
    }
  ];

  const quickLinks = [
    { name: "Repositorio USM", icon: Database, url: "#" },
    { name: "Tesis Digitales", icon: FileText, url: "#" },
    { name: "Revistas Open Access", icon: Globe, url: "#" },
    { name: "Guías de Investigación", icon: FileText, url: "#" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Acceso Instantáneo",
      description: "Conecta directamente desde el campus o vía VPN"
    },
    {
      icon: Shield,
      title: "Acceso Seguro",
      description: "Autenticación con credenciales universitarias"
    },
    {
      icon: Clock,
      title: "24/7 Disponible",
      description: "Recursos disponibles las 24 horas del día"
    }
  ];

  return (
    <section className="py-16 bg-background" id="recursos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Recursos Científicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Accede a las principales bases de datos académicas y recursos de investigación mundial
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center border-0 shadow-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Databases */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {databases.map((db) => (
            <Card key={db.name} className="hover:shadow-hover transition-all duration-300 border-0 shadow-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{db.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{db.name}</CardTitle>
                      <Badge 
                        className={db.type === 'premium' ? 'bg-primary' : 'bg-secondary'}
                      >
                        {db.access}
                      </Badge>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {db.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {db.subjects.map((subject) => (
                    <Badge key={subject} variant="outline" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full" variant={db.type === 'premium' ? 'default' : 'secondary'}>
                  Acceder a {db.name}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Accesos Rápidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-center space-y-2 hover:shadow-card"
                >
                  <link.icon className="w-8 h-8" />
                  <span className="text-sm font-medium">{link.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="text-center mt-12">
            <div className="bg-gradient-hero rounded-2xl p-8 border-l-4 border-secondary">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                ¿Necesitas ayuda con tu investigación?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestros bibliotecarios especializados pueden ayudarte a encontrar los recursos
                más adecuados para tu proyecto de investigación en la USM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:shadow-hover">
                  Agendar Consulta
                </Button>
                <Button size="lg" className="bg-gradient-secondary hover:shadow-hover text-secondary-foreground">
                  Guías de Investigación
                </Button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};