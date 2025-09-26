import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Wifi, Monitor, Coffee, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

export const QuickAccess = () => {
  const availableRooms = [
    {
      id: 1,
      name: "Sala Individual A1",
      capacity: 1,
      nextAvailable: "Ahora",
      amenities: ["Wifi", "Silencioso"],
      status: "available"
    },
    {
      id: 2,
      name: "Sala Grupal B3",
      capacity: 6,
      nextAvailable: "14:30",
      amenities: ["Wifi", "Proyector", "Pizarra"],
      status: "soon"
    },
    {
      id: 3,
      name: "Sala Colaborativa C2",
      capacity: 4,
      nextAvailable: "16:00",
      amenities: ["Wifi", "Monitor", "Café"],
      status: "later"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-secondary text-secondary-foreground';
      case 'soon': return 'bg-accent text-accent-foreground';
      case 'later': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Wifi': return <Wifi className="w-3 h-3" />;
      case 'Proyector': 
      case 'Monitor': return <Monitor className="w-3 h-3" />;
      case 'Café': return <Coffee className="w-3 h-3" />;
      case 'Silencioso': return <Volume2 className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <section className="py-16 bg-background" id="reservas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Salas Disponibles Ahora
          </h2>
          <p className="text-lg text-muted-foreground">
            Reserva tu espacio de estudio ideal en segundos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {availableRooms.map((room) => (
            <Card key={room.id} className="hover:shadow-hover transition-all duration-300 border-0 shadow-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{room.name}</CardTitle>
                  <Badge className={getStatusColor(room.status)}>
                    {room.status === 'available' ? 'Disponible' : 
                     room.status === 'soon' ? 'Pronto' : 'Más tarde'}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  Capacidad: {room.capacity} persona{room.capacity > 1 ? 's' : ''}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>Disponible: {room.nextAvailable}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-1 bg-muted px-2 py-1 rounded-full text-xs">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/reservas">
                    <Button 
                      className={`w-full ${
                        room.status === 'available' 
                          ? 'bg-gradient-primary hover:shadow-hover' 
                          : 'bg-gradient-secondary hover:shadow-hover text-secondary-foreground'
                      }`}
                      disabled={room.status === 'later'}
                    >
                      {room.status === 'available' ? 'Reservar Ahora' : 
                       room.status === 'soon' ? 'Reservar para 14:30' : 'Ver Horarios'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/reservas">
            <Button variant="outline" size="lg">
              Ver Todas las Salas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};