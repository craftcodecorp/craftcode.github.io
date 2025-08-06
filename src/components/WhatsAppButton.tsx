import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as soluções da CraftCode.", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-large hover:shadow-glow transition-all duration-300 hover:scale-110"
      size="icon"
    >
      <MessageCircle size={24} />
    </Button>
  );
};

export default WhatsAppButton;