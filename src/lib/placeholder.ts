/** Pola token placeholder, mis. "{{JUMLAH_EVENT}}". */
export const PLACEHOLDER_PATTERN = /\{\{([A-Z0-9_]+)\}\}/;

/** `true` bila string masih mengandung token placeholder. */
export function isPlaceholder(value: string | undefined | null): boolean {
  return !value || PLACEHOLDER_PATTERN.test(value);
}

/** Memecah teks menjadi potongan teks biasa dan token placeholder. */
export function splitPlaceholders(text: string): { type: "text" | "token"; value: string }[] {
  return text
    .split(/(\{\{[A-Z0-9_]+\}\})/g)
    .filter(Boolean)
    .map((part) => {
      const match = part.match(/^\{\{([A-Z0-9_]+)\}\}$/);
      return match ? { type: "token" as const, value: match[1] } : { type: "text" as const, value: part };
    });
}
