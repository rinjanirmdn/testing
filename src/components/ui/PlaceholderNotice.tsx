/** Catatan kecil yang menegaskan bahwa konten di sekitarnya masih placeholder. */
export function PlaceholderNotice({ text, name }: { text: string; name: string }) {
  return (
    <p
      data-placeholder={name}
      className="border-l-2 border-navy-900 bg-paper px-4 py-3 text-sm leading-relaxed text-muted"
    >
      {text}
    </p>
  );
}
