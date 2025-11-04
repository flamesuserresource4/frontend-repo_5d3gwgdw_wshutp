import { Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Lemovita</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Brand sehat dengan komitmen kualitas dan rasa alami.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-900">Bantuan</h4>
            <ul className="mt-2 space-y-2 text-sm text-neutral-600">
              <li>Konsultasi produk</li>
              <li>Resep & inspirasi</li>
              <li>Kerjasama reseller</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-900">Kontak</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-700">
              <a
                href="mailto:hello@lemovita.id"
                className="inline-flex items-center gap-2 hover:text-neutral-900"
              >
                <Mail className="h-4 w-4" /> hello@lemovita.id
              </a>
              <a
                href="https://instagram.com/lemovita"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-neutral-900"
              >
                <Instagram className="h-4 w-4" /> @lemovita
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Lemovita. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
