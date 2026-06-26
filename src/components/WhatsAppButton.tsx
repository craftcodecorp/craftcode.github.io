import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-metadata";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-large hover:shadow-glow transition-all duration-300 hover:scale-110"
      size="icon"
      aria-label="Conversar com a CraftCode pelo WhatsApp"
    >
      <MessageCircle size={24} />
    </Button>
  );
};

export default WhatsAppButton;
