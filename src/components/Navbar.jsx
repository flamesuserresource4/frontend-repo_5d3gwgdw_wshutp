import { Leaf, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-lime-500/20 flex items-center justify-center">
              <Leaf className="h-5 w-5 text-lime-600" />
            </div>
            <span className="font-semibold tracking-tight text-neutral-900">Lemovita</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#products" className="hover:text-neutral-900">Produk</a>
            <a href="#about" className="hover:text-neutral-900">Tentang</a>
            <a href="#contact" className="hover:text-neutral-900">Kontak</a>
          </nav>

          <a
            href="mailto:hello@lemovita.id?subject=Info%20Produk%20Lemovita"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:border-neutral-400"
          >
            <Mail className="h-4 w-4" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  );
}
