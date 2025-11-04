export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(163,230,53,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex rounded-full border border-lime-200 bg-lime-50 px-3 py-1 text-xs font-medium text-lime-700">
              Hidup Sehat, Rasa Alami
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              Lemovita — Brand sehat dengan rasa yang jujur dan desain minimalis
            </h1>
            <p className="mt-5 text-neutral-600">
              Pilihan produk natural untuk mendukung gaya hidup aktif dan seimbang.
              Dari sari lemon murni hingga pemanis rendah kalori dan superfood.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Lihat Produk
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:border-neutral-400"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
