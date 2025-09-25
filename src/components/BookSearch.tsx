import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, BookOpen, Download, Eye, Heart } from "lucide-react";

export const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredBooks = [
    {
      id: 1,
      title: "Inteligencia Artificial: Un Enfoque Moderno",
      author: "Stuart Russell, Peter Norvig",
      category: "Ingeniería",
      year: 2023,
      available: true,
      format: "Físico + Digital",
      cover: "🤖"
    },
    {
      id: 2,
      title: "Principios de Economía",
      author: "N. Gregory Mankiw",
      category: "Economía",
      year: 2022,
      available: true,
      format: "Físico",
      cover: "📊"
    },
    {
      id: 3,
      title: "Química Orgánica Avanzada",
      author: "Jerry March",
      category: "Química",
      year: 2023,
      available: false,
      format: "Digital",
      cover: "⚗️"
    },
    {
      id: 4,
      title: "Historia Contemporánea de América",
      author: "María González",
      category: "Historia",
      year: 2021,
      available: true,
      format: "Físico + Digital",
      cover: "🌎"
    }
  ];

  const categories = [
    { name: "Ingeniería", count: 12450, color: "bg-primary" },
    { name: "Medicina", count: 8230, color: "bg-secondary" },
    { name: "Economía", count: 6780, color: "bg-accent" },
    { name: "Historia", count: 5440, color: "bg-primary" },
    { name: "Literatura", count: 9120, color: "bg-secondary" },
    { name: "Ciencias", count: 7890, color: "bg-accent" }
  ];

  return (
    <section className="py-16 bg-muted/30" id="catalogo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Explora Nuestro Catálogo
          </h2>
          <p className="text-lg text-muted-foreground">
            Más de 50,000 títulos académicos a tu disposición
          </p>
        </div>

        {/* Advanced Search */}
        <Card className="mb-12 border-0 shadow-card">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Buscar por título, autor, ISBN o tema..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button size="lg" className="bg-gradient-primary hover:shadow-hover px-8">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
              <Button variant="outline" size="lg">
                <Filter className="w-5 h-5 mr-2" />
                Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="featured">Destacados</TabsTrigger>
            <TabsTrigger value="categories">Por Categoría</TabsTrigger>
            <TabsTrigger value="new">Novedades</TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBooks.map((book) => (
                <Card key={book.id} className="hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                  <CardHeader className="pb-3">
                    <div className="text-6xl mb-4 text-center">{book.cover}</div>
                    <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{book.author}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{book.category}</Badge>
                        <span className="text-sm text-muted-foreground">{book.year}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{book.format}</span>
                        <Badge className={book.available ? "bg-secondary" : "bg-muted"}>
                          {book.available ? "Disponible" : "Prestado"}
                        </Badge>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="w-4 h-4 mr-1" />
                          Ver
                        </Button>
                        <Button size="sm" variant="outline">
                          <Heart className="w-4 h-4" />
                        </Button>
                        {book.format.includes("Digital") && (
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card key={category.name} className="hover:shadow-hover transition-all duration-300 cursor-pointer border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {category.count.toLocaleString()} títulos
                        </p>
                      </div>
                      <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="new">
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Próximamente
              </h3>
              <p className="text-muted-foreground">
                Esta sección mostrará las últimas adquisiciones de la biblioteca.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};