import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-metadata";
import { TrackedAnchor } from "@/components/TrackedLink";

const WhatsAppButton = () => {
  return (
    <Button
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-large hover:shadow-glow transition-all duration-300 hover:scale-110"
      size="icon"
      asChild
    >
      <TrackedAnchor
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        eventName="whatsapp_click"
        eventLabel="WhatsApp floating"
        eventLocation="floating_button"
      aria-label="Conversar com a CraftCode pelo WhatsApp"
    >
      <MessageCircle size={24} />
      </TrackedAnchor>
    </Button>
  );
};

export default WhatsAppButton;
