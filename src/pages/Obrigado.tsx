import { Check, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Gracias= () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <HandHeart className="text-[#5f9ea0]" size={24} />
            </div>
            <h1 className="text-xl font-playfair font-semibold text-[#5f9ea0]">
              Voluntarios de Lourdes
            </h1>
          </div>
        </div>
      </header>

      {/* Agradecimento */}
      <main className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-md">
          <Check className="text-green-600" size={36} />
        </div>
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#333333] mb-4">
          🙏 ¡Gracias por tu oración!
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-xl">
          Tu petición fue recibida y será llevada a la Gruta de Lourdes en nuestra próxima visita mensual.
          Pronto recibirás un correo con fotos como confirmación.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
        >
          ⬅️ Volver al inicio
        </Button>
      </main>

      {/* Footer */}
      <footer className="bg-[#333333] text-gray-300 py-12 px-4">
        <div className="mx-auto max-w-screen-lg grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-playfair text-xl mb-4 text-white">Voluntarios de Lourdes</h4>
            <p className="text-sm leading-relaxed mb-6">
              Los Voluntarios de Lourdes forman parte del Ministerio de Devociones. No somos representantes oficiales
              del Santuario de Lourdes. Somos voluntarios que dedican su tiempo para llevar las bendiciones de Nuestra Señora.
            </p>
            <p className="text-sm leading-relaxed">
              El contenido enviado es solo con fines espirituales. Consulta a profesionales para orientación médica, legal o psicológica.
            </p>
          </div>
          <div className="md:pl-8">
            <h4 className="font-playfair text-xl mb-4 text-white">Enlaces importantes</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-[#f4d58d] transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="text-sm hover:text-[#f4d58d] transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-sm hover:text-[#f4d58d] transition-colors">Contáctanos</a></li>
            </ul>
            <div className="mt-8">
              <p className="text-sm text-gray-400">&copy; 2025 Voluntarios de Lourdes. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gracias;