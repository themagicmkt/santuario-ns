import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, HeartPulse, Gift, HandHeart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Cabeçalho */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <HandHeart className="text-[#5f9ea0]" size={24} />
            </div>
            <h1 className="text-xl font-playfair font-semibold text-[#5f9ea0]">Voluntários de Aparecida</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#como-funciona" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Como funciona?</a>
            <a href="#por-que-aparecida" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Por que Aparecida?</a>
            <a href="#contribuicao" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Contribuir</a>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Abrir menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Seção Hero */}
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <div className="w-20 h-20 mx-auto mb-6 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center">
              <HeartPulse className="text-[#5f9ea0]" size={40} />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-[#333333]">
              Sua intenção de oração foi recebida para o Santuário Nacional de Aparecida
            </h2>
          </div>
        </section>

        {/* Saudação personalizada */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
              Querido(a) irmão(ã) em Cristo,
            </h3>

            <div className="flex flex-col gap-8">
              <div>
                <p className="text-lg mb-4 leading-relaxed">
                  Sou o Padre Afonso Freitas, e hoje escrevo com alegria e esperança no coração. Há muitos anos, minha esposa e eu temos a graça de servir como voluntários no Santuário Nacional de Nossa Senhora Aparecida, um lugar onde milagres acontecem diariamente.
                </p>
                <p className="text-lg mb-4 leading-relaxed">
                  Sempre que estou diante da Imagem de Nossa Senhora Aparecida, emociono-me com os testemunhos de fé, cura e restauração. Este Santuário é reconhecido em todo o Brasil por sua ligação divina com Maria Santíssima, e por graça de Deus, temos o privilégio de levar até lá as suas intenções.
                </p>
              </div>
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/img04.jpg" 
                  alt="Santuário Nacional de Aparecida" 
                  className="w-full max-w-none aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </section>

                {/* Aparecida: Um lugar de milagres */}
        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
                Aparecida: Um lugar de milagres
              </h3>

              <p className="text-lg mb-4 leading-relaxed">
                Amigo(a), sou testemunha viva do poder da oração em Aparecida. Vi pessoas alcançarem cura, livramentos e paz interior que só podem vir de Deus. É como se o Céu tocasse a Terra naquele altar — e cada oração feita ali é acolhida com amor pela Mãe de Jesus.
              </p>

              <p className="text-lg leading-relaxed">
                As bênçãos recebidas no Santuário não são apenas físicas — são espirituais, emocionais e familiares. Milhares de devotos confiam suas causas a Nossa Senhora Aparecida e recebem graças que superam todo entendimento humano.
              </p>
            </div>
          </div>
        </section>

        {/* Etapas da entrega da oração */}
        <section id="como-funciona" className="py-16 md:py-24 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-5xl">
            <h3 className="text-3xl font-playfair font-semibold mb-12 text-center text-[#333333]">
              O caminho da sua oração
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 1</h4>
                <p className="text-center">Sua oração é impressa com carinho e respeito.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 2</h4>
                <p className="text-center">Levamos sua oração pessoalmente ao Santuário Nacional de Aparecida, e ela é colocada diante da Imagem de Nossa Senhora, com uma bênção especial para você.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 3</h4>
                <p className="text-center">Você receberá por e-mail as fotos da entrega da sua oração no Santuário, assim que concluirmos nossa visita mensal.</p>
              </div>
            </div>
          </div>
        </section>

                {/* Por que Aparecida? */}
        <section id="por-que-aparecida" className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">
              Por que o Santuário de Aparecida é tão especial?
            </h3>

            <div className="flex flex-col gap-8">
              <div>
                <p className="text-lg mb-4 leading-relaxed">
                  Aparecida é o coração da fé mariana no Brasil. Milhões de devotos vão até lá todos os anos em busca de milagres, paz e respostas. Ali, diante da imagem original da Padroeira, muitas graças já foram alcançadas.
                </p>

                <p className="text-lg leading-relaxed">
                  Por mais de 300 anos, o povo brasileiro tem encontrado consolo aos pés de Nossa Senhora Aparecida. São inúmeros relatos de curas físicas, transformações espirituais e reencontros com a fé. É como se o Céu estivesse mais perto ali, e nossas orações fossem direto ao coração de Maria.
                </p>
              </div>
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/img05.jpg" 
                  alt="Basílica de Aparecida e devotos" 
                  className="w-full max-w-none aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Corrente de fé */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="bg-[#5f9ea0]/5 border border-[#5f9ea0]/10 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">
                Junte-se a essa corrente de fé e milagres
              </h3>

              <p className="text-lg mb-6 text-center leading-relaxed">
                Você tem agora a oportunidade de enviar sua oração até o altar de Nossa Senhora Aparecida. Imagine sua intenção sendo colocada com carinho e fé nesse lugar abençoado. Seja por você ou por alguém que você ama, esse gesto é um ato de amor e entrega a Deus.
              </p>
            </div>
          </div>
        </section>

        {/* Está pronto para sentir o poder da fé? */}
        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
              Você está pronto para sentir o poder da intercessão de Nossa Senhora Aparecida?
            </h3>

            <div className="flex flex-col gap-8">
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/img06.jpg" 
                  alt="Interior do Santuário com fiéis em oração" 
                  className="w-full max-w-none aspect-video object-cover"
                />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  Nada se compara à paz que sentimos quando confiamos nossas intenções ao cuidado de Maria. Seja por saúde, reconciliação, trabalho, cura interior ou gratidão — entregar sua oração no Santuário é um gesto profundo de fé que pode mudar tudo.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Seção de contribuição */}

        
        <section id="contribuicao" className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0] text-center">
              Envie sua oração agora mesmo
            </h3>

            <p className="text-lg mb-8 text-center leading-relaxed max-w-3xl mx-auto">
              Sabemos que nem todos conseguem ir pessoalmente ao Santuário de Aparecida — seja por distância, saúde ou finanças. Por isso, decidimos ajudar pessoas de todo o Brasil a entregarem suas orações nesse lugar sagrado.
            </p>

            <p className="text-lg mb-10 text-center font-semibold max-w-3xl mx-auto">
              Queremos que sua fé seja ouvida, independentemente da sua condição financeira.
            </p>
<div className="grid md:grid-cols-3 gap-6">
  {/* Opção 1 */}
  <Card className="border-[#5f9ea0]/30 shadow-md hover:shadow-lg transition-all">
    <CardContent className="pt-6 px-4 pb-6">
      <div className="flex justify-center mb-4">
        <Gift className="text-[#5f9ea0]" size={32} />
      </div>

      <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 9,90</h3>
      <h4 className="font-sans text-lg mb-4 text-center">Preciso de ajuda</h4>

      <p className="text-sm mb-6 text-center italic">
        "Por favor, leve minha oração até o Santuário. Neste momento, não consigo contribuir com o valor total, mas gostaria muito de participar."
      </p>

      <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
        <a href="https://pay.hotmart.com/D99772325D?off=vl1cwh1g&checkoutMode=10" target="_blank" rel="noopener noreferrer">
          Enviar oração com apoio
        </a>
      </Button>

      <p className="text-xs mt-3 text-center text-gray-500">
        Será uma honra incluir sua oração.
      </p>
    </CardContent>
  </Card>

  {/* Opção 2 */}
  <Card className="border-[#5f9ea0] shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
    <div className="absolute top-0 right-0 bg-[#5f9ea0] text-white text-xs py-1 px-3 rounded-bl-lg">
      Recomendado
    </div>
    <CardContent className="pt-6 px-4 pb-6">
      <div className="flex justify-center mb-4">
        <HeartPulse className="text-[#5f9ea0]" size={32} />
      </div>

      <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 19,90</h3>
      <h4 className="font-sans text-lg mb-4 text-center">Valor real da entrega</h4>

      <p className="text-sm mb-6 text-center italic">
        "Estou contribuindo com o valor necessário para que minha oração seja entregue pessoalmente no Santuário de Aparecida. Agradeço por tornar isso possível."
      </p>

      <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
        <a href="https://pay.hotmart.com/D99772325D?off=s28ne4e9&checkoutMode=10" target="_blank" rel="noopener noreferrer">
          Entregar minha oração
        </a>
      </Button>

      <p className="text-xs mt-3 text-center text-gray-500">
        Esse é o valor real da missão de entrega.
      </p>
    </CardContent>
  </Card>

  {/* Opção 3 */}
  <Card className="border-[#f4d58d] shadow-md hover:shadow-lg transition-all">
    <CardContent className="pt-6 px-4 pb-6">
      <div className="flex justify-center mb-4">
        <Gift className="text-[#f4d58d]" size={32} />
      </div>

      <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 29,90</h3>
      <h4 className="font-sans text-lg mb-4 text-center">Envie minha oração + ajude outro devoto</h4>

      <p className="text-sm mb-6 text-center italic">
        "Quero ajudar outra pessoa que talvez não tenha condições de contribuir agora. Que minha doação leve bênçãos a quem precisa."
      </p>

      <Button className="w-full bg-[#f4d58d] hover:bg-[#e3c47c] text-[#333333] px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
        <a href="https://pay.hotmart.com/D99772325D?off=bdpspyby&checkoutMode=10" target="_blank" rel="noopener noreferrer">
          Enviar e abençoar outro
        </a>
      </Button>

      <p className="text-xs mt-3 text-center text-gray-500">
        Obrigado pela sua generosidade.
      </p>
    </CardContent>
  </Card>
</div>
            {/* Aqui permanecem os Cards com valores e botões de contribuição (não alterados no código funcional) */}
            {/* ... */}

            <div className="mt-10 text-center">
              <p className="text-lg font-playfair italic">
                "Ajudem uns aos outros a carregar os seus fardos, e, assim, cumpram a lei de Cristo."
              </p>
              <p className="text-sm">– Gálatas 6:2</p>
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-[#333333]">
              Receba hoje mesmo as bênçãos da Mãe Aparecida
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Envie sua oração ao Santuário Nacional de Aparecida e confie na poderosa intercessão de Nossa Senhora.
              A sua fé será acolhida com amor neste lugar sagrado.
            </p>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer id="contato" className="bg-gray-800 text-gray-300">
  <div className="max-w-screen-lg mx-auto px-6 py-12">
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {/* Branding */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-marian-blue p-2 rounded-xl">
            <HandHeart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold text-white">
              Voluntários de Aparecida
            </h3>
            <p className="text-sm text-marian-blue">Levando sua fé até os pés da Padroeira do Brasil</p>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed">
          Somos um grupo independente de devotos católicos comprometidos em levar intenções de oração ao Santuário Nacional de Nossa Senhora Aparecida.
        </p>
      </div>

      {/* Contato */}
      <div>
        <h4 className="font-playfair text-lg font-semibold text-white mb-4">
          Contato
        </h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-marian-blue" />
            <a href="mailto:contato@voluntariosdeaparecida.org" className="hover:text-white transition-colors">
              contato@voluntariosdeaparecida.org
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-marian-blue" />
            <a href="https://wa.me/5511999999999" className="hover:text-white transition-colors">
              +55 11 99999-9999
            </a>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div>
        <h4 className="font-playfair text-lg font-semibold text-white mb-4">
          Informações Legais
        </h4>
        <div className="space-y-2">
          <a href="#" className="block hover:text-white transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="block hover:text-white transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </div>

    {/* Aviso Legal */}
    <div className="border-t border-gray-700 pt-8">
      <div className="bg-gray-700 rounded-xl p-6 mb-6">
        <h4 className="font-playfair text-lg font-semibold text-white mb-3">
          Aviso Legal Importante
        </h4>
        <p className="text-gray-300 leading-relaxed text-sm">
          O projeto Voluntários de Aparecida é uma iniciativa devocional independente e não possui vínculo oficial com o Santuário Nacional de Nossa Senhora Aparecida, 
          a Arquidiocese de Aparecida ou qualquer instituição religiosa oficial. Nossa missão é puramente espiritual e voluntária. 
          Não prometemos milagres, apenas entregamos com fé as intenções enviadas ao altar da Mãe Aparecida.
        </p>
      </div>

      <div className="text-center text-gray-400">
        <p>&copy; 2025 Voluntários de Aparecida. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">
          Desenvolvido com fé para levar esperança a quem mais precisa.
        </p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Confirmation;
