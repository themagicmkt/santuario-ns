import { useEffect } from "react";

declare global {
  interface Window {
    checkoutElements?: unknown;
  }
}
import { HandHeart } from "lucide-react";

const Downsell = () => {
  useEffect(() => {
    const existing = document.getElementById("hotmart-widget-loader");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "hotmart-widget-loader";
    script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    script.async = true;
    script.onload = () => {
      if (window.checkoutElements) {
        (window.checkoutElements as {
          init: (id: string, options: { styles: { button: Record<string, string | number> } }) => {
            mount: (selector: string) => void;
          };
        }).init("salesFunnel", {
          styles: {
            button: {
              backgroundColor: "#4E8A8C",
              color: "#fff",
              fontSize: "16px",
              padding: "12px 24px",
              borderRadius: "8px",
              width: "100%",
              fontWeight: "600"
            }
          }
        }).mount("#hotmart-sales-funnel");
      }
    };
    document.body.appendChild(script);
  }, []);

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

      {/* Conteúdo */}
      <main className="py-16 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#333333] mb-6">
          Entendemos que $12,90 al mes puede no ser posible en este momento...
        </h2>
        <p className="text-lg mb-6">
          Pero eso no significa que debas renunciar a ver tu oración en la Gruta de Lourdes.
        </p>
        <p className="text-lg mb-6">
          Por eso, queremos hacer algo especial solo para ti. Hemos abierto una opción más accesible.
        </p>
        <p className="text-lg mb-6 font-semibold text-[#5f9ea0]">
          Por solo $6,90 al mes, seguiremos llevando tu oración todos los meses. El mismo amor. El mismo destino sagrado.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-10 text-center shadow max-w-md mx-auto">
          <h3 className="text-2xl font-playfair font-semibold mb-4">Una oportunidad especial para ti</h3>
          <p className="text-base leading-relaxed mb-4">
            Acepta esta segunda oportunidad por solo <strong>$6,90 al mes</strong> y forma parte de nuestra misión mensual a Lourdes.
          </p>
          <p className="text-base leading-relaxed">
            Sin mensualidades. Sin compromisos. Solo fe.
          </p>

          {/* Widget de downsell */}
          <div id="hotmart-sales-funnel" className="mt-6" />
        </div>

        <p className="text-sm text-gray-500 mt-8 italic">
          Esta es tu señal. No la ignores.
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

export default Downsell;