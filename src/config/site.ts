/**
 * ÚNICO ARQUIVO A EDITAR.
 * Troque foto, nome, descrição e link aqui.
 */

export const siteConfig = {
  name: "Ju Vilela",
  description: "✨ Conteúdo exclusivo • Acesso privado • Apenas para maiores de 18 anos",
  /**
   * FOTO DE PERFIL — SUBSTITUA A URL ABAIXO PELA FOTO DEFINITIVA DA CRIADORA.
   * (é o único lugar onde a imagem é definida)
   */
  photo: "/ju-vilela-profile.png",
  seoTitle: "Ju Vilela — Links Oficiais",
  seoDescription: "Acesse o canal oficial de Ju Vilela no Telegram. Conteúdo exclusivo +18.",
  links: {
    telegram: "https://t.me/+yoHzuWmgpeZiYjBh",
  },
  turnstile: {
    /**
     * Chave pública (site key) do Cloudflare Turnstile.
     * Defina VITE_TURNSTILE_SITE_KEY ou troque o valor abaixo.
     * O padrão é a chave de teste da Cloudflare (sempre aprova).
     */
    siteKey: import.meta.env["VITE_TURNSTILE_SITE_KEY"] ?? "1x00000000000000000000AA",
    /** Duração da sessão verificada, em horas. */
    sessionHours: 6,
  },
} as const;
