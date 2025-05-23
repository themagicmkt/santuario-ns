import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, BookText, Heart, HandHeart } from "lucide-react";
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

    try {
      await fetch("https://santuario-api-portugues.vercel.app/api/activecampaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email
        })
      });

      toast({
        title: "Oração recebida",
        description: "Sua intenção será levada ao Santuário Nacional de Aparecida"
      });

      setTimeout(() => {
        navigate("/salvando");
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      console.error("Erro ao enviar para ActiveCampaign", error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar sua oração. Tente novamente.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
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
            <a href="#formulario" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Formulário de oração</a>
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
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-[#333333]">
              🕊 Milagres acontecem todos os dias no Santuário Nacional de Aparecida
            </h2>
            <p className="text-xl md:text-2xl font-playfair mb-6 text-[#5f9ea0]">
              Envie sua intenção de oração ao Santuário de Nossa Senhora Aparecida, no Brasil
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Todos os anos, milhões de fiéis visitam o Santuário Nacional de Aparecida em busca de cura, paz e graças divinas. Agora, sua oração pode ser levada até esse local sagrado sem que você precise sair de casa. Permita que levemos sua intenção até os pés da Padroeira do Brasil.
            </p>
            <Button 
              asChild
              className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <a href="#formulario">
                ➡️ Enviar minha intenção de oração
              </a>
            </Button>
          </div>
        </section>

        {/* Continuação abaixo... */}

                {/* Prayer Delivery */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="bg-[#f4d58d]/10 border border-[#f4d58d]/30 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">
                Sua oração, entregue no Santuário Nacional
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Uma vez por mês, realizamos nossa peregrinação ao Santuário Nacional de Aparecida com as intenções de oração recebidas. 
                Ao preencher o formulário abaixo, levaremos sua prece pessoalmente em nossa próxima visita. 
                Você receberá fotos por e-mail como confirmação da entrega no altar de Nossa Senhora Aparecida.
              </p>

              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/img01.jpg" 
                  alt="Santuário Nacional de Aparecida" 
                  className="w-full max-w-none aspect-video object-cover"
                />
              </div>

              <div className="flex justify-center">
                <Button 
                  asChild
                  className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <a href="#formulario">
                    ➡️ Enviar minha intenção de oração
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Formulário */}
        <section id="formulario" className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg sm:max-w-2xl">
            <h3 className="text-3xl font-playfair font-semibold mb-10 text-center text-[#333333]">
              Envie sua oração ao Santuário de Aparecida
            </h3>
            <Card className="w-full border-[#5f9ea0]/30 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">Nome</label>
                    <Input
                      id="name"
                      placeholder="Digite seu nome"
                      className="w-full border-[#5f9ea0]/30"
                      {...register("name", { required: "O nome é obrigatório" })}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
                    <Input
                      id="email"
                      placeholder="Digite seu e-mail"
                      className="w-full border-[#5f9ea0]/30"
                      {...register("email", {
                        required: "O e-mail é obrigatório",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "E-mail inválido"
                        }
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="prayer" className="block text-sm font-medium">Sua intenção de oração</label>
                    <Textarea
                      id="prayer"
                      placeholder="Escreva sua oração aqui..."
                      className="w-full min-h-[150px] border-[#5f9ea0]/30"
                      {...register("prayer", { required: "A oração é obrigatória" })}
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
                          Enviando sua oração...
                        </span>
                      ) : (
                        "Enviar minha oração"
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

                {/* Como funciona */}
        <section id="como-funciona" className="py-16 md:py-24 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-5xl">
            <h3 className="text-3xl font-playfair font-semibold mb-12 text-center text-[#333333]">Como funciona?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <BookText className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 1</h4>
                <p className="text-center">Sua oração é impressa com cuidado e preparada com respeito e fé.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 2</h4>
                <p className="text-center">Levamos sua oração ao Santuário Nacional de Aparecida. Ela será colocada diante da imagem de Nossa Senhora com uma bênção especial. Esse momento será registrado em foto.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 3</h4>
                <p className="text-center">Você recebe a confirmação por e-mail com fotos da entrega da sua oração no Santuário.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Milagres */}
        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">Milagres te esperam</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Ao enviar sua oração ao Santuário Nacional de Aparecida, você se une a milhões de devotos que confiam na intercessão da Padroeira do Brasil.
              Tenha a certeza de que sua intenção será acolhida com fé em um lugar abençoado.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Seja por cura, paz, proteção ou agradecimento, entregar sua oração em Aparecida é um gesto profundo de fé.
              Esta entrega espiritual permanecerá marcada em sua vida como prova de sua confiança em Deus.
            </p>
            <div className="flex justify-center">
              <Button 
                asChild
                className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                <a href="#formulario">
                  ➡️ Enviar minha oração agora
                </a>
              </Button>
            </div>
          </div>
        </section>

       {/* Viva as Bênçãos de Lourdes */}
<section className="py-16 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
  <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
    <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">
      Viva as bênçãos de Lourdes sem sair de casa
    </h3>
    <p className="text-lg mb-8 text-center leading-relaxed">
      Você não precisa viajar até Lourdes para receber as bênçãos deste lugar sagrado. 
      Ao nos permitir levar a sua oração, você economiza tempo e dinheiro, e ainda assim recebe os benefícios espirituais deste local santo.
    </p>
    <div className="my-8 rounded-xl overflow-hidden shadow-lg">
      <img 
        src="/img04.jpg" 
        alt="Paisagem serena representando as bênçãos de Lourdes" 
        className="w-full max-w-none aspect-video object-cover"
      />
    </div>
  </div>
</section>

{/* Compartilhe as Bênçãos */}
<section className="py-16 px-2 sm:px-4 bg-white">
  <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
    <div className="bg-[#5f9ea0]/5 border border-[#5f9ea0]/10 p-8 rounded-xl shadow-sm">
      <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">
        Compartilhe as bênçãos com quem você ama
      </h3>
      <p className="text-lg mb-6 text-center leading-relaxed">
        Se você não precisa de um milagre neste momento, envie uma oração por alguém que precisa. 
        Ofereça esse ato de amor a um ente querido e permita que a graça divina também alcance a vida dele.
      </p>
      <div className="flex justify-center">
        <a
          href="#formulario"
          className="inline-block px-6 py-4 bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white rounded-lg text-lg font-medium shadow-md hover:shadow-lg text-center leading-tight"
        >
          ➡️ Enviar uma oração<br />por um ente querido
        </a>
      </div>
    </div>
  </div>
</section>

     

       {/* Why the Grotto of Lourdes */}
      <section id="por-que-lourdes" className="py-16 px-2 sm:px-4 bg-blue-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
      <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">Santuário Nacional de Aparecida?</h3>
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/img03.webp" 
                alt="Interior da Basílica de Aparecida" 
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
                  O Santuário Nacional de Nossa Senhora Aparecida é o maior centro de peregrinação mariana da América Latina, onde milhões de fiéis testemunham graças e milagres todos os anos. 
                  Ao permitir que sua oração chegue até esse altar sagrado, você faz parte dessa tradição de fé que transforma vidas.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Chamada final */}
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-[#333333]">
              Receba a bênção de Nossa Senhora Aparecida
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Envie sua oração ao Santuário Nacional de Aparecida e confie na poderosa intercessão da Mãe de Deus. 
              Sua fé é o primeiro passo para um milagre.
            </p>
            <a
              href="#formulario"
              className="inline-block px-6 py-4 bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white rounded-lg text-lg font-medium shadow-md hover:shadow-lg text-center leading-tight"
            >
              ➡️ Enviar minha oração<br />ao Santuário de Aparecida
            </a>
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

export default Index;