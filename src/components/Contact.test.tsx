import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Contact from "./Contact";
import { submitContactForm } from "@/services/contactService";
import { trackConversionEvent } from "@/lib/analytics-init";

vi.mock("@/services/contactService", () => ({
  submitContactForm: vi.fn(),
}));

vi.mock("@/lib/analytics-init", () => ({
  trackConversionEvent: vi.fn(),
}));

describe("Contact", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("submits the diagnostic form and tracks submit and success events", async () => {
    vi.mocked(submitContactForm).mockResolvedValue({
      success: true,
      message: "Mensagem enviada com sucesso!",
    });

    render(<Contact />);

    await userEvent.type(screen.getByLabelText(/nome/i), "Ana Silva");
    await userEvent.type(screen.getByLabelText(/email/i), "ana@example.com");
    await userEvent.type(screen.getByLabelText(/empresa/i), "Empresa ABC");
    await userEvent.type(screen.getByLabelText(/setor/i), "Serviços");
    await userEvent.type(screen.getByLabelText(/principal desafio/i), "Muitas planilhas e retrabalho entre áreas.");
    await userEvent.click(screen.getByRole("button", { name: /solicitar diagnóstico/i }));

    await waitFor(() => {
      expect(submitContactForm).toHaveBeenCalledWith({
        name: "Ana Silva",
        email: "ana@example.com",
        company: "Empresa ABC",
        message: expect.stringContaining("Diagnóstico de Tecnologia e IA Aplicada"),
      });
    });

    expect(trackConversionEvent).toHaveBeenCalledWith("contact_form_submit", expect.objectContaining({
      form_name: "diagnostico_tecnologia_ia",
      conversion_goal: "diagnostico_tecnologia_ia",
    }));
    expect(trackConversionEvent).toHaveBeenCalledWith("contact_form_success", expect.objectContaining({
      form_status: "success",
    }));
    expect(await screen.findByRole("status")).toHaveTextContent(/mensagem enviada com sucesso/i);
  });

  it("shows field validation before submitting incomplete data", async () => {
    render(<Contact />);

    await userEvent.click(screen.getByRole("button", { name: /solicitar diagnóstico/i }));

    expect(await screen.findByText(/nome deve ter pelo menos 2 caracteres/i)).toBeInTheDocument();
    expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
    expect(submitContactForm).not.toHaveBeenCalled();
  });
});
