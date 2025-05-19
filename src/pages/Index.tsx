
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, BookText, Heart, HandHeart, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      prayer: ""
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simular envio
    toast({
      title: "Oración recibida",
      description: "Tu petición será llevada a la Gruta de Lourdes"
    });
    
    // Redirect to loading page instead of confirmation
    setTimeout(() => {
      navigate("/salvando");
      setIsSubmitting(false);
    }, 1500);
    };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
        <HandHeart className="text-[#5f9ea0]" size={24} />
      </div>
      <h1 className="text-xl font-playfair font-semibold text-[#5f9ea0]">Voluntarios de Lourdes</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
      <a href="#como-funciona" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">¿Cómo funciona?</a>
      <a href="#por-que-lourdes" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">¿Por qué Lourdes?</a>
      <a href="#formulario" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Formulario de oración</a>
        </nav>

        <div className="md:hidden">
      <Button variant="ghost" size="sm">
        <span className="sr-only">Abrir menú</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </Button>
        </div>
      </div>
      </header>

      <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-[#333333]">
        🕊 Los milagros ocurren cada día en la Gruta de Lourdes
      </h2>
      <p className="text-xl md:text-2xl font-playfair mb-6 text-[#5f9ea0]">
        Envía tu petición de oración a la Sagrada Gruta de Lourdes, Francia
      </p>
      <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
        Cada año, más de 6 millones de peregrinos viajan a la Gruta de Lourdes en busca de sanación, 
        paz e intervención divina. Ahora, tu oración puede ser entregada en este lugar milagroso desde donde estés. 
        Permítenos llevar tu mensaje a este santuario sagrado, donde ya han ocurrido innumerables milagros.
      </p>
      <Button 
        asChild
        className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
      >
        <a href="#formulario">
        ➡️ Enviar mi petición de oración
        </a>
      </Button>
        </div>
      </section>

      {/* Prayer Delivery */}
      <section className="py-16 px-2 sm:px-4 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <div className="bg-[#f4d58d]/10 border border-[#f4d58d]/30 p-8 rounded-xl shadow-sm">
        <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">
        Tu oración, entregada en la Gruta de Lourdes
        </h3>
        <p className="text-lg mb-6 leading-relaxed">
        Una vez al mes, realizamos nuestro viaje a la Gruta de Lourdes con las peticiones de oración. 
        Si completas el formulario a continuación, entregaremos personalmente tu oración en nuestra próxima visita. 
        Recibirás fotos por correo electrónico como prueba de que tu oración fue entregada en este lugar sagrado.
        </p>
        
        <div className="my-8 rounded-xl overflow-hidden shadow-lg">
        <img 
        src="/img01.jpg" 
        alt="Gruta de Lourdes" 
        className="w-full max-w-none aspect-video object-cover"
        />
        </div>
        
        <div className="flex justify-center">
        <Button 
        asChild
        className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
        >
        <a href="#formulario">
        ➡️ Enviar mi petición de oración
        </a>
        </Button>
        </div>
      </div>
        </div>
      </section>

       {/* Prayer Form */}
    <section id="formulario" className="py-16 px-2 sm:px-4 bg-blue-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-full sm:max-w-2xl">
      <h3 className="text-3xl font-playfair font-semibold mb-10 text-center text-[#333333]">
      Envía tu oración a la Gruta de Lourdes
      </h3>
      <Card className="w-full border-[#5f9ea0]/30 shadow-lg">
      <CardContent className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">Nombre</label>
          <Input
            id="name"
            placeholder="Escribe tu nombre"
            className="w-full border-[#5f9ea0]/30"
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Escribe tu email"
            className="w-full border-[#5f9ea0]/30"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Email inválido",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="prayer" className="block text-sm font-medium">Tu petición de oración</label>
          <Textarea
            id="prayer"
            placeholder="Escribe tu oración aquí..."
            className="w-full min-h-[150px] border-[#5f9ea0]/30"
            {...register("prayer", { required: "La petición de oración es obligatoria" })}
          />
          {errors.prayer && <p className="text-red-500 text-sm">{errors.prayer.message}</p>}
        </div>

        <div className="pt-4">
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando tu oración...
              </span>
            ) : (
              "Enviar mi oración"
            )}
          </Button>
        </div>
      </form>
      </CardContent>
      </Card>
      </div>
    </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-16 md:py-24 px-2 sm:px-4 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-5xl">
      <h3 className="text-3xl font-playfair font-semibold mb-12 text-center text-[#333333]">¿Cómo funciona?</h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
        <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
        <BookText className="text-[#5f9ea0]" size={32} />
        </div>
        <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 1</h4>
        <p className="text-center">Imprimimos tu oración con cuidado. Tu oración será cuidadosamente impresa en una nota especial.</p>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
        <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
        <MapPin className="text-[#5f9ea0]" size={32} />
        </div>
        <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 2</h4>
        <p className="text-center">Entregamos tu oración en la Gruta de Lourdes. En la Gruta, la oración será colocada en la Caja de Oraciones, donde se hará una bendición especial. Este momento sagrado será fotografiado.</p>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
        <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
        <Mail className="text-[#5f9ea0]" size={32} />
        </div>
        <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 3</h4>
        <p className="text-center">Recibes la confirmación. Recibirás fotos de la entrega directamente en tu correo electrónico tan pronto como lleguemos al lugar en la visita mensual.</p>
        </div>
      </div>
        </div>
      </section>

      {/* Miracles Await You */}
      <section className="py-16 px-2 sm:px-4 bg-blue-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">Los milagros te esperan</h3>
      <p className="text-lg mb-6 leading-relaxed">
        Al enviar tu oración a la Gruta de Lourdes, te unes a miles de personas que ya han buscado la gracia divina en este santuario. 
        Ten la tranquilidad de saber que tu oración fue colocada en un lugar tocado por la Virgen María, donde los milagros forman parte de la vida diaria.
      </p>
      <p className="text-lg mb-8 leading-relaxed">
        Ya sea que busques sanación, paz, amor o claridad, entregar tu oración en Lourdes es un profundo gesto espiritual. 
        Este momento sagrado permanecerá contigo para siempre, como prueba de que hiciste algo extraordinario para honrar a Dios.
      </p>
      <div className="flex justify-center">
        <Button 
        asChild
        className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
        >
        <a href="#formulario">
        ➡️ Enviar mi oración ahora
        </a>
        </Button>
      </div>
        </div>
      </section>

      {/* Experience the Blessings of Lourdes */}
      <section className="py-16 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">Vive las bendiciones de Lourdes sin salir de casa</h3>
      <p className="text-lg mb-8 text-center leading-relaxed">
        No necesitas viajar a Lourdes para recibir las bendiciones de este lugar sagrado. 
        Al permitirnos llevar tu oración, ahorras tiempo y dinero, y aún así recibes los beneficios espirituales de este sitio santo.
      </p>
      
      <div className="my-8 rounded-xl overflow-hidden shadow-lg">
        <img 
        src="/img02.webp" 
        alt="Paisaje sereno que representa las bendiciones de Lourdes" 
        className="w-full max-w-none aspect-video object-cover"
        />
      </div>
        </div>
      </section>

      {/* Share the Blessings */}
      <section className="py-16 px-2 sm:px-4 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <div className="bg-[#5f9ea0]/5 border border-[#5f9ea0]/10 p-8 rounded-xl shadow-sm">
        <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">Comparte las bendiciones con quienes amas</h3>
        <p className="text-lg mb-6 text-center leading-relaxed">
        Si no necesitas un milagro en este momento, envía una oración por alguien que sí lo necesita. 
        Ofrece este acto de amor a un ser querido y permite que la gracia divina llegue también a su vida.
        </p>
        <div className="flex justify-center">
        <Button 
        asChild
        className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
        >
        <a href="#formulario">
        ➡️ Enviar una oración por un ser querido
        </a>
        </Button>
        </div>
      </div>
        </div>
      </section>

      {/* Why the Grotto of Lourdes */}
      <section id="por-que-lourdes" className="py-16 px-2 sm:px-4 bg-blue-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">¿Por qué la Gruta de Lourdes?</h3>
      
      <div className="my-8 rounded-xl overflow-hidden shadow-lg">
        <img 
        src="/img03.webp" 
        alt="Interior de catedral representando la Gruta de Lourdes" 
        className="w-full max-w-none aspect-video object-cover"
        />
      </div>
      
      <Card className="border-[#f4d58d]/30 shadow-lg">
        <CardContent className="p-8">
        <div className="flex justify-center mb-8">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
        <Heart className="text-[#5f9ea0]" size={48} />
        </div>
        </div>
        <p className="text-lg mb-0 leading-relaxed text-center">
        Durante más de un siglo, la Gruta de Lourdes ha sido un destino de peregrinación, 
        conocida por sus curaciones milagrosas y su fuerte conexión espiritual. 
        Los peregrinos reportan profundas transformaciones después de visitar el sitio. 
        Ahora tú también puedes hacer que tu oración sea colocada directamente en este espacio sagrado.
        </p>
        </CardContent>
      </Card>
        </div>
      </section>

      {/* Main CTA */}
      <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
      <h3 className="text-3xl font-playfair font-semibold mb-6 text-[#333333]">
        Recibe el regalo de los milagros hoy
      </h3>
      <p className="text-lg mb-8 max-w-3xl mx-auto">
        Coloca tu oración en la Gruta de Lourdes y confía en el poder de la intervención divina. 
        Tu oración, entregada en persona, formará parte de la tradición sagrada de este lugar santo.
      </p>
      <a
        href="#formulario"
        className="inline-block px-6 py-4 bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white rounded-lg text-lg font-medium shadow-md hover:shadow-lg text-center leading-tight"
      >
        ➡️ Enviar mi oración<br />a la Gruta de Lourdes
      </a>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#333333] text-gray-300 py-12 px-2 sm:px-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h4 className="font-playfair text-xl mb-4 text-white">Voluntarios de Lourdes</h4>
        <p className="text-sm leading-relaxed mb-6">
        Los Voluntarios de Lourdes forman parte del Ministerio de Devociones. No somos representantes oficiales 
        del Santuario de Lourdes. Somos simplemente voluntarios que dedican tiempo y esfuerzo 
        para llevar las bendiciones de Nuestra Señora de Lourdes a quienes lo necesitan.
        </p>
        <p className="text-sm leading-relaxed">
        El contenido enviado (correos electrónicos, ebooks y otros materiales) es solo para fines informativos y 
        espirituales. Para asuntos médicos, legales o psicológicos, consulta a un profesional calificado.
        </p>
      </div>
      <div className="md:pl-8">
        <h4 className="font-playfair text-xl mb-4 text-white">Enlaces importantes</h4>
        <ul className="space-y-2">
        <li>
        <a href="#" className="text-sm hover:text-[#f4d58d] transition-colors">Términos y condiciones</a>
        </li>
        <li>
        <a href="#" className="text-sm hover:text-[#f4d58d] transition-colors">Política de privacidad</a>
        </li>
        <li>
        <a href="#" className="text-sm hover:text-[#f4d58d] transition-colors">Contáctanos</a>
        </li>
        </ul>
        <div className="mt-8">
        <p className="text-sm text-gray-400">&copy; 2025 Voluntarios de Lourdes. Todos los derechos reservados.</p>
        </div>
      </div>
        </div>
      </div>
      </footer>
      </div>
    );
};

export default Index;
