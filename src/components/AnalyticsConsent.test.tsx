import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AnalyticsConsent from "./AnalyticsConsent";
import {
  denyAnalyticsConsent,
  getAnalyticsConsent,
  grantAnalyticsConsent,
  trackPageView,
} from "@/lib/analytics-init";

vi.mock("@/lib/analytics-init", () => ({
  getAnalyticsConsent: vi.fn(),
  grantAnalyticsConsent: vi.fn(),
  denyAnalyticsConsent: vi.fn(),
  trackPageView: vi.fn(),
}));

describe("AnalyticsConsent", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getAnalyticsConsent).mockReturnValue(null);
  });

  it("grants analytics consent and sends the current page view only after acceptance", async () => {
    render(
      <MemoryRouter initialEntries={["/diagnostico-tecnologia-ia?origem=teste"]}>
        <AnalyticsConsent />
      </MemoryRouter>
    );

    expect(screen.getByText(/usamos analytics/i)).toBeInTheDocument();
    expect(trackPageView).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole("button", { name: /aceitar/i }));

    expect(grantAnalyticsConsent).toHaveBeenCalled();
    expect(trackPageView).toHaveBeenCalledWith("/diagnostico-tecnologia-ia?origem=teste");
  });

  it("stores denial without starting analytics tracking", async () => {
    render(
      <MemoryRouter>
        <AnalyticsConsent />
      </MemoryRouter>
    );

    await userEvent.click(screen.getByRole("button", { name: /recusar/i }));

    expect(denyAnalyticsConsent).toHaveBeenCalled();
    expect(trackPageView).not.toHaveBeenCalled();
  });
});
