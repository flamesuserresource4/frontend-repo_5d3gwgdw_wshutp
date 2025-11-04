import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-14">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Filosofi Lemovita</h2>
                <p className="mt-3 text-neutral-600">
                  Kami percaya kesehatan berasal dari kebiasaan sederhana yang konsisten.
                  Lemovita menghadirkan bahan-bahan alami dengan komposisi jujur,
                  desain minimalis, dan rasa yang nyaman dikonsumsi setiap hari.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
                <ul className="space-y-3 text-sm text-neutral-700">
                  <li>• Bahan alami, tanpa tambahan yang tidak perlu</li>
                  <li>• Rasa seimbang untuk konsumsi harian</li>
                  <li>• Pilihan untuk berbagai kebutuhan: energi, diet, kecantikan</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
