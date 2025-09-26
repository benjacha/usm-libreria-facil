import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Clock, Users, MapPin, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Reservas() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30", "18:00", "18:30"
  ];

  const availableRooms = [
    {
      id: 1,
      name: "Sala Individual A1",
      capacity: 1,
      floor: "Piso 2",
      availableSlots: ["09:00", "10:30", "14:00", "15:30", "17:00"],
      status: "available"
    },
    {
      id: 2,
      name: "Sala Grupal B3",
      capacity: 6,
      floor: "Piso 3",
      availableSlots: ["11:00", "13:30", "16:00", "18:00"],
      status: "available"
    },
    {
      id: 3,
      name: "Sala Colaborativa C2",
      capacity: 4,
      floor: "Piso 1",
      availableSlots: ["09:30", "12:00", "15:00", "17:30"],
      status: "available"
    },
    {
      id: 4,
      name: "Sala Estudio D1",
      capacity: 2,
      floor: "Piso 2",
      availableSlots: ["10:00", "14:30", "16:30"],
      status: "available"
    }
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-CL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isWithinThreeDays = (date: Date) => {
    const today = new Date();
    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(today.getDate() + 3);
    return date >= today && date <= threeDaysFromNow;
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday = 0, Saturday = 6
  };

  const isDisabledDate = (date: Date) => {
    return !isWithinThreeDays(date) || isWeekend(date);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-hover">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Reserva de Salas</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calendar Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Seleccionar Fecha</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Puedes reservar hasta 3 días adelante
                </p>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  disabled={isDisabledDate}
                  className="rounded-md border w-full"
                  modifiersClassNames={{
                    disabled: "text-muted-foreground/30"
                  }}
                />
                
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <p className="text-sm font-medium mb-1">Fecha seleccionada:</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(selectedDate)}
                    {isToday(selectedDate) && (
                      <Badge variant="secondary" className="ml-2">Hoy</Badge>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rooms List */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Salas Disponibles</h2>
              <p className="text-muted-foreground">
                {isToday(selectedDate) 
                  ? "Salas disponibles para hoy" 
                  : `Salas disponibles para ${formatDate(selectedDate)}`}
              </p>
            </div>

            <div className="grid gap-6">
              {availableRooms.map((room) => (
                <Card key={room.id} className="hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{room.name}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            Capacidad: {room.capacity} persona{room.capacity > 1 ? 's' : ''}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {room.floor}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-secondary text-secondary-foreground">
                        {room.availableSlots.length} horarios disponibles
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-3 flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          Horarios Disponibles (30 min cada uno)
                        </h4>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                          {room.availableSlots.map((slot) => (
                            <Button
                              key={slot}
                              variant="outline"
                              size="sm"
                              className="text-xs hover:bg-primary hover:text-primary-foreground"
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <Button 
                          className="w-full bg-gradient-primary hover:shadow-hover"
                          size="lg"
                        >
                          Reservar {room.name}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}