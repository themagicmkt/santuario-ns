import { HandHeart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Upsell = () => {
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

      {/* Conteúdo Principal */}
      <main className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#333333] mb-6">
          ¡Felicidades! Acabas de asegurar tu pedido para Lourdes.
        </h2>
        <p className="text-lg mb-6">
          Ahora solo necesitas esperar. Te avisaremos por correo electrónico cuando tu carta sea llevada hasta la Gruta…
        </p>
        <p className="text-lg mb-6">
          Como viste anteriormente, nuestro grupo viaja todos los meses a la Gruta de Lourdes para entregar miles de cartas con pedidos de oración.
        </p>
        <p className="text-lg mb-6">
          Este trabajo es completamente voluntario, y solo pedimos una pequeña contribución mensual para mantener esta misión viva.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-10 text-left shadow">
          <h3 className="text-2xl font-playfair font-semibold mb-4 text-center">
            ¿Quieres que tu carta sea llevada todos los meses?
          </h3>
          <p className="text-base leading-relaxed mb-4">
            Cada mes, podrás enviarnos una nueva carta con tu intención o agradecimiento. Nosotros la llevaremos a la Gruta de Lourdes por ti.
          </p>
          <p className="text-base leading-relaxed">
            Cuantas más veces se presenta una intención, más fuerza espiritual se acumula. Así funciona la fe persistente.
          </p>
        </div>

        {/* Planos */}
        <section className="grid md:grid-cols-3 gap-6 my-12 text-left">
          {/* Plan Solidario */}
          <div className="border border-[#5f9ea0]/30 rounded-xl p-6 shadow hover:shadow-lg transition-all">
            <h4 className="text-xl font-playfair font-semibold text-[#5f9ea0] mb-2">🔸 Plan Solidario</h4>
            <p className="text-2xl font-bold mb-4">$3,90 <span className="text-sm font-normal">al mes</span></p>
            <p className="text-sm mb-4">Aunque estés pasando por dificultades económicas, este plan fue creado para que nadie quede fuera.</p>
            <Button className="w-full bg-[#5f9ea0] text-white hover:bg-[#4e8a8c]">Elegir Plan Solidario</Button>
          </div>

          {/* Plan Sostenible */}
          <div className="border border-[#5f9ea0]/30 rounded-xl p-6 shadow-lg scale-105 bg-blue-50">
            <h4 className="text-xl font-playfair font-semibold text-[#5f9ea0] mb-2">🔸 Plan Sostenible</h4>
            <p className="text-2xl font-bold mb-4">$6,90 <span className="text-sm font-normal">al mes</span></p>
            <p className="text-sm mb-4">Cubre el costo total de tu carta y aún nos brinda un pequeño apoyo para seguir adelante.</p>
            <Button className="w-full bg-[#5f9ea0] text-white hover:bg-[#4e8a8c]">Elegir Plan Sostenible</Button>
          </div>

          {/* Plan de Apoyo */}
          <div className="border border-[#5f9ea0]/30 rounded-xl p-6 shadow hover:shadow-lg transition-all">
            <h4 className="text-xl font-playfair font-semibold text-[#5f9ea0] mb-2">🔸 Plan de Apoyo</h4>
            <p className="text-2xl font-bold mb-4">$12,90 <span className="text-sm font-normal">al mes</span></p>
            <p className="text-sm mb-4">Ideal para quienes desean contribuir más y apoyar a otros fieles a enviar sus oraciones.</p>
            <Button className="w-full bg-[#5f9ea0] text-white hover:bg-[#4e8a8c]">Elegir Plan de Apoyo</Button>
          </div>
        </section>

        <p className="text-sm text-gray-500 mt-6 italic">
          Independientemente del plan que elijas, tu carta será entregada con el mismo amor y devoción.
        </p>
      </main>

      {/* Rodapé */}
      <footer className="bg-[#333333] text-gray-300 py-12 px-4">
        <div className="mx-auto max-w-screen-lg grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-playfair text-xl mb-4 text-white">Voluntarios de Lourdes</h4>
            <p className="text-sm leading-relaxed mb-6">
              Los Voluntarios de Lourdes forman parte del Ministerio de Devociones. No somos representantes oficiales del Santuario.
            </p>
            <p className="text-sm leading-relaxed">
              Nuestro contenido tiene fines espirituales. Para orientación médica o psicológica, consulta a un profesional.
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

export default Upsell;