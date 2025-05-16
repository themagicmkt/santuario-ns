
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, HeartPulse, Gift, HandHeart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Confirmation = () => {

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
      <a href="#contribuicao" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Contribuir</a>
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
      <div className="w-20 h-20 mx-auto mb-6 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center">
        <HeartPulse className="text-[#5f9ea0]" size={40} />
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-[#333333]">
        Tu petición de oración ha sido recibida para la Sagrada Gruta de Lourdes
      </h2>
      </div>
      </section>
      
      {/* Personal Greeting Section */}
      <section className="py-16 px-2 sm:px-4 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
        Querido hermano/hermana en Cristo,
      </h3>
      
      <div className="flex flex-col gap-8">
        <div>
        <p className="text-lg mb-4 leading-relaxed">
        Soy el Padre Afonso Freitas y hoy te escribo con gran alegría y esperanza en mi corazón. Durante muchos años, mi esposa y yo hemos tenido la bendición de servir como voluntarios en la Gruta de Lourdes, un lugar donde los milagros de sanación ocurren cada día.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
        Siempre que estoy frente a la Gruta, me conmueven los testimonios de personas que han encontrado sanación, paz y restauración en cuerpo y espíritu. Este lugar sagrado, donde la Virgen María apareció, es conocido mundialmente por su poder divino de sanar. Por la gracia de Dios, tenemos el privilegio de llevar tus oraciones a este lugar milagroso.
        </p>
        </div>
        <div className="my-8 rounded-xl overflow-hidden shadow-lg">
        <img 
        src="/img04.webp" 
        alt="Gruta de Lourdes" 
        className="w-full max-w-none aspect-video object-cover"
        />
        </div> </div>
      </div>
      </section>
      
      {/* Lourdes: A Place of Miracles */}
      <section className="py-16 px-2 sm:px-4 bg-blue-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
        Lourdes: Un lugar de milagros
        </h3>
        
        <p className="text-lg mb-4 leading-relaxed">
        Amigo, he sido testigo personalmente del poder sanador de la oración en Lourdes. He visto personas encontrar alivio de enfermedades crónicas, recuperarse físicamente y alcanzar una paz interior que solo Dios puede ofrecer. Es como si el Cielo tocara la Tierra en Lourdes — y cada oración elevada allí es recibida con compasión y misericordia divina.
        </p>
        
        <p className="text-lg leading-relaxed">
        La sanación en Lourdes no es solo física — también es espiritual y emocional. Miles de peregrinos buscan la intervención divina y, a través de la intercesión de la Virgen María, reciben milagros más allá de lo que podrían imaginar.
        </p>
      </div>
      </div>
      </section>
      
      {/* Prayer Journey Steps */}
      <section id="como-funciona" className="py-16 md:py-24 px-2 sm:px-4 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-5xl">
      <h3 className="text-3xl font-playfair font-semibold mb-12 text-center text-[#333333]">
        El recorrido de tu oración
      </h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
        <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
        <Mail className="text-[#5f9ea0]" size={32} />
        </div>
        <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 1</h4>
        <p className="text-center">Tu oración es impresa con respeto y cuidado.</p>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
        <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
        <MapPin className="text-[#5f9ea0]" size={32} />
        </div>
        <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 2</h4>
        <p className="text-center">Tu oración es entregada personalmente en la Gruta de Lourdes, colocada en un lugar sagrado donde ya han ocurrido milagros. También realizamos una bendición especial para ti.</p>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
        <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
        <Check className="text-[#5f9ea0]" size={32} />
        </div>
        <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 3</h4>
        <p className="text-center">Recibirás por correo electrónico las fotos de tu oración colocada en la Gruta tan pronto como lleguemos al sitio sagrado, durante la visita mensual.</p>
        </div>
      </div>
      </div>
      </section>
      
      {/* What Makes Lourdes Extraordinary */}
      <section id="por-que-lourdes" className="py-16 px-2 sm:px-4 bg-blue-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">
        ¿Qué hace a Lourdes tan extraordinario?
      </h3>
      
      <div className="flex flex-col gap-8">
        <div>
        <p className="text-lg mb-4 leading-relaxed">
        Lourdes es reconocido mundialmente como un santuario de sanación, donde los enfermos buscan alivio y restauración. Cada día, veo cómo la fe transforma vidas en este lugar. Ya sea por sanación física, paz interior o renovación espiritual, la presencia de la Virgen María se siente en cada rincón de este lugar sagrado.
        </p>
        
        <p className="text-lg leading-relaxed">
        Durante más de 160 años, millones de personas han buscado sanación aquí — y muchos han sido bendecidos con recuperaciones milagrosas. Corazones restaurados, cuerpos sanados, esperanzas renovadas. Parece que el velo entre el Cielo y la Tierra se vuelve más delgado en Lourdes, permitiendo que nuestras oraciones lleguen rápidamente a los oídos del Padre.
        </p>
        </div>
        <div className="my-8 rounded-xl overflow-hidden shadow-lg">
        <img 
        src="/img05.webp" 
        alt="Río entre montañas" 
        className="w-full max-w-none aspect-video object-cover"
        />
        </div>
      </div>
      </div>
      </section>
      
      {/* Join the Healing Chain */}
      <section className="py-16 px-2 sm:px-4 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <div className="bg-[#5f9ea0]/5 border border-[#5f9ea0]/10 p-8 rounded-xl shadow-sm">
        <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">
        Únete a esta cadena de sanación y fe
        </h3>
        
        <p className="text-lg mb-6 text-center leading-relaxed">
        Tienes la preciosa oportunidad de enviar tu oración a la Gruta de Lourdes — un lugar sagrado conocido por milagros de sanación. Imagina que tus peticiones más profundas sean llevadas con fe a esta tierra bendita. Ya sea para ti o para un ser querido, este acto de fe es más que una petición — es una conexión directa con nuestro Señor y con todos los que han sido tocados por la gracia de Lourdes.
        </p>
      </div>
      </div>
      </section>
      
      {/* Ready to Feel Lourdes' Healing Power */}
      <section className="py-16 px-2 sm:px-4 bg-blue-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
        ¿Estás listo para sentir el poder sanador de Lourdes?
      </h3>
      
      <div className="flex flex-col gap-8">
        <div className="my-8 rounded-xl overflow-hidden shadow-lg">
        <img 
        src="/img06.webp" 
        alt="Pinos" 
        className="w-full max-w-none aspect-video object-cover"
        />
        </div> <div>
        <p className="text-lg leading-relaxed">
        No hay nada como la paz y la sanación que llena el corazón cuando confiamos nuestras oraciones a Lourdes. Ya sea por sanación física, restauración espiritual o alivio emocional, este lugar santo tiene el poder de renovar por la gracia de Dios.
        </p>
        </div>
      </div>
      </div>
      </section>
      
      {/* Contribution Section */}
      <section id="contribuicao" className="py-16 px-2 sm:px-4 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0] text-center">
        Envía tu petición de oración ahora
      </h3>
      
      <p className="text-lg mb-8 text-center leading-relaxed max-w-3xl mx-auto">
        Sabemos que no todos tienen la oportunidad de dejar sus oraciones en uno de los lugares más sagrados del mundo — especialmente en tiempos financieros difíciles. Por eso decidimos ayudar a otros a enviar sus oraciones y recibir las bendiciones que merecen.
      </p>
      
      <p className="text-lg mb-10 text-center font-semibold max-w-3xl mx-auto">
        Como devotos, nunca queremos que el dinero sea un obstáculo para tus oraciones sinceras.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Option 1 */}
        <Card className="border-[#5f9ea0]/30 shadow-md hover:shadow-lg transition-all">
        <CardContent className="pt-6 px-4 pb-6">
        <div className="flex justify-center mb-4">
        <Gift className="text-[#5f9ea0]" size={32} />
        </div>
        
        <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 9.90</h3>
        <h4 className="font-sans text-lg mb-4 text-center">Necesito un poco de apoyo</h4>
        
        <p className="text-sm mb-6 text-center italic">
        "Por favor, lleva mi oración a Lourdes. En este momento, no puedo pagar el monto completo, pero deseo participar en este acto sagrado."
        </p>
        
        <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
        <a href="https://seguro.voluntariosdelourdes.online/r/O1S2XW5HJE" target="_blank" rel="noopener noreferrer">
          Incluir mi oración
        </a>
        </Button>
        
        <p className="text-xs mt-3 text-center text-gray-500">
        Es un honor incluir tu oración.
        </p>
        </CardContent>
        </Card>
        
        {/* Option 2 */}
        <Card className="border-[#5f9ea0] shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-[#5f9ea0] text-white text-xs py-1 px-3 rounded-bl-lg">
        Recomendado
        </div>
        <CardContent className="pt-6 px-4 pb-6">
        <div className="flex justify-center mb-4">
        <HeartPulse className="text-[#5f9ea0]" size={32} />
        </div>
        
        <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 19.90</h3>
        <h4 className="font-sans text-lg mb-4 text-center">Costo real de entrega</h4>
        
        <p className="text-sm mb-6 text-center italic">
        "Estoy cubriendo el costo total para llevar mi oración a la Gruta. Gracias por hacerlo posible."
        </p>
        
        <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
        <a href="https://seguro.voluntariosdelourdes.online/r/9XBO3KMO78" target="_blank" rel="noopener noreferrer">
          Entrega completa de oración
        </a>
        </Button>
        
        <p className="text-xs mt-3 text-center text-gray-500">
        Este es el costo real de la misión de entrega.
        </p>
        </CardContent>
        </Card>
        
        {/* Option 3 */}
        <Card className="border-[#f4d58d] shadow-md hover:shadow-lg transition-all">
        <CardContent className="pt-6 px-4 pb-6">
        <div className="flex justify-center mb-4">
        <Gift className="text-[#f4d58d]" size={32} />
        </div>
        
        <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 29.90</h3>
        <h4 className="font-sans text-lg mb-4 text-center">Lleva mi oración + Apoya a otro devoto</h4>
        
        <p className="text-sm mb-6 text-center italic">
        "Quiero contribuir un poco más para ayudar a alguien que tal vez no pueda. Que mi oración y mi donación traigan bendiciones a quienes lo necesitan."
        </p>
        
        <Button className="w-full bg-[#f4d58d] hover:bg-[#e3c47c] text-[#333333] px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
        <a href="https://seguro.voluntariosdelourdes.online/r/LW61SFGXDT" target="_blank" rel="noopener noreferrer">
          Enviar y ayudar
        </a>
        </Button>
        
        <p className="text-xs mt-3 text-center text-gray-500">
        Gracias por tu generosidad.
        </p>
        </CardContent>
        </Card>
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-lg font-playfair italic">
        "Ayúdense unos a otros a llevar sus cargas, y así cumplirán la ley de Cristo."
        </p>
        <p className="text-sm">– Gálatas 6:2</p>
      </div>
      </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
      <h3 className="text-3xl font-playfair font-semibold mb-6 text-[#333333]">
        Recibe el regalo de los milagros hoy
      </h3>
      <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
        Coloca tu oración en la Gruta de Lourdes y confía en el poder de la intervención divina. 
        Tu oración, entregada personalmente, formará parte de la tradición sagrada de este lugar santo.
      </p>
      </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#333333] text-gray-300 py-12 px-4">
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
        espirituales. Para asuntos médicos, legales o psicológicos, por favor busca un profesional calificado.
        </p>
      </div>
      <div className="md:pl-8">
        <h4 className="font-playfair text-xl mb-4 text-white">Enlaces importantes</h4>
        <ul className="space-y-2">
        <li>
        <Link to="/termos" className="text-sm hover:text-[#f4d58d] transition-colors">Términos y condiciones</Link>
        </li>
        <li>
        <Link to="/privacidade" className="text-sm hover:text-[#f4d58d] transition-colors">Política de privacidad</Link>
        </li>
        <li>
        <Link to="/contato" className="text-sm hover:text-[#f4d58d] transition-colors">Contáctanos</Link>
        </li>
        </ul>
        <div className="mt-8">
        <p className="text-sm text-gray-400">&copy; 2025 Voluntarios de Lourdes. Todos los derechos reservados.</p>
        </div>
      </div>
      </div>
      
      <div className="mt-8 text-center">
      
      </div>
      </div>
      </footer>

    </div>
    );
};

export default Confirmation;
