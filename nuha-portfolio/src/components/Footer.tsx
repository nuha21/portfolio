export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-rose-blush/30 mt-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-charcoal text-lg font-light"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Nuha Ahmed<span className="text-rose-deep">.</span>
        </p>
        <p
          className="text-xs text-charcoal-light text-center"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Built with Next.js, TypeScript & Tailwind CSS
        </p>
        <p
          className="text-xs text-charcoal/30"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
