import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Mail } from "lucide-react";

export default function ContactSection() {
  const { data: contactInfo } = useQuery({
    queryKey: ["/api/contact"],
  });

  const handleWhatsApp = () => {
    const phone = contactInfo?.whatsapp || "+1234567890";
    const message = "Hola! Me interesa conocer más sobre Cuatro Cero. ¿Podrían darme más información?";
    const whatsappUrl = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInstagram = () => {
    const instagram = contactInfo?.instagram || "@cuatrocero";
    const instagramUrl = `https://instagram.com/${instagram.replace('@', '')}`;
    window.open(instagramUrl, "_blank");
  };

  const handleEmail = () => {
    const email = contactInfo?.email || "contacto@cuatrocero.com";
    const subject = "Consulta sobre Cuatro Cero";
    const body = "Hola! Me interesa conocer más sobre la plataforma Cuatro Cero.";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para revolucionar tu club?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contáctanos y descubre cómo Cuatro Cero puede transformar la gestión de tu equipo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
              <p className="text-gray-300 mb-6">Chatea directamente con nuestro equipo</p>
              <Button 
                className="bg-accent text-primary hover:bg-accent-cuatro transition-colors font-semibold"
                onClick={handleWhatsApp}
              >
                Escribir Ahora
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Instagram</h3>
              <p className="text-gray-300 mb-6">Síguenos para contenido exclusivo</p>
              <Button 
                variant="outline"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors font-semibold"
                onClick={handleInstagram}
              >
                {contactInfo?.instagram || "@cuatrocero"}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-gray-300 mb-6">Soporte técnico y consultas</p>
              <Button 
                variant="outline"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors font-semibold"
                onClick={handleEmail}
              >
                {contactInfo?.email || "contacto@cuatrocero.com"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
