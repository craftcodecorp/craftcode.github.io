import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Header from "./Header";
import Footer from "./Footer";

vi.mock("@/lib/analytics-init", () => ({
  trackConversionEvent: vi.fn(),
}));

describe("public navigation", () => {
  it("uses the diagnostic label and keeps the content hub out of the header", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("link", { name: /diagnóstico/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /agendar diagnóstico/i })).toHaveAttribute("href", "/diagnostico-tecnologia-ia");
    expect(screen.queryByRole("link", { name: /conteúdos/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^método$/i })).not.toBeInTheDocument();
  });

  it("keeps footer legal links aligned with existing public routes", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /privacidade/i })).toHaveAttribute("href", "/privacidade");
    expect(screen.queryByRole("link", { name: /termos/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /conteúdos/i })).not.toBeInTheDocument();
  });
});
