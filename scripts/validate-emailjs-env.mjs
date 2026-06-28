const requiredKeys = [
  "VITE_EMAILJS_SERVICE_ID",
  "VITE_EMAILJS_TEMPLATE_ID",
  "VITE_EMAILJS_PUBLIC_KEY",
];

const placeholderValues = new Set([
  "",
  "service_default",
  "template_default",
  "public_key_default",
  "development_public_key",
  "your_public_key",
]);

if (process.env.VITE_REQUIRE_EMAILJS !== "true") {
  process.exit(0);
}

const missingKeys = requiredKeys.filter((key) => {
  const value = String(process.env[key] ?? "").trim();
  return placeholderValues.has(value);
});

if (missingKeys.length > 0) {
  console.error(`EmailJS is required for this build, but these variables are missing or placeholder values: ${missingKeys.join(", ")}`);
  process.exit(1);
}
