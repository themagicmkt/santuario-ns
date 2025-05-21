
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
      await fetch("https://gruta-api.vercel.app/api/activecampaign", {
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
        title: "Oración recibida",
        description: "Tu petición será llevada a la Gruta de Lourdes"
      });

      setTimeout(() => {
        navigate("/salvando");
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      console.error("Erro ao enviar para ActiveCampaign", error);
      toast({
        title: "Error",
        description: "No se pudo enviar tu oración. Intenta nuevamente.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulario" className="py-16 px-2 sm:px-4 bg-blue-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg sm:max-w-2xl">
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
                <label htmlFor="email" className="block text-sm font-medium">Correo electrónico</label>
                <Input
                  id="email"
                  placeholder="Escribe tu correo"
                  className="w-full border-[#5f9ea0]/30"
                  {...register("email", {
                    required: "El correo electrónico es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Correo electrónico inválido"
                    }
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
  );
};

export default Index;
