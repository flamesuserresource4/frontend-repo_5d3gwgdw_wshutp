import { ShoppingBag } from "lucide-react";

const products = [
  {
    name: "Sari Lemon",
    desc: "Sari lemon murni kaya vitamin C untuk detoks dan imun tubuh.",
    tags: ["Natural", "Vitamin C", "Imun"],
  },
  {
    name: "Cuka Apel",
    desc: "Fermentasi apel dengan manfaat pencernaan dan metabolisme.",
    tags: ["Fermentasi", "Pencernaan"],
  },
  {
    name: "Colla10000",
    desc: "Minuman kolagen 10.000 mg untuk kulit sehat dan elastis.",
    tags: ["Kolagen", "Kecantikan"],
  },
  {
    name: "Gula Stevia",
    desc: "Pemanis alami nol kalori, aman untuk diet dan diabetes.",
    tags: ["Zero Calorie", "Stevia"],
  },
  {
    name: "Aren Stevia",
    desc: "Perpaduan gula aren dan stevia—manis seimbang, kalori lebih rendah.",
    tags: ["Rendah Kalori", "Aren"],
  },
  {
    name: "Stevita Zerocal",
    desc: "Pemanis stevia tanpa kalori untuk minuman dan masakan.",
    tags: ["Zero Calorie", "Stevia"],
  },
  {
    name: "Stevita Drops",
    desc: "Stevia cair praktis—cukup beberapa tetes untuk rasa manis.",
    tags: ["Liquid", "Praktis"],
  },
  {
    name: "Chia Seed",
    desc: "Superfood tinggi serat dan omega-3 untuk energi tahan lama.",
    tags: ["Superfood", "Serat Tinggi"],
  },
  {
    name: "Profiber (Minuman Protein)",
    desc: "Minuman protein tinggi serat untuk kenyang lebih lama.",
    tags: ["Protein", "Serat"],
  },
];

function ProductCard({ name, desc, tags }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">{name}</h3>
          <p className="mt-1 text-sm text-neutral-600">{desc}</p>
        </div>
        <div className="h-10 w-10 shrink-0 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center">
          <ShoppingBag className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        <a
          href="mailto:hello@lemovita.id?subject=Pemesanan%20Produk%20Lemovita"
          className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Pesan Sekarang
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:border-neutral-400"
        >
          Detail
        </a>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Koleksi Produk Lemovita
            </h2>
            <p className="mt-1 text-neutral-600">
              Produk natural untuk kebutuhan harian—pilih yang sesuai tujuanmu.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
