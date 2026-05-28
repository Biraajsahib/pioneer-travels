import Link from "next/link";

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="pt-36 pb-24 px-6 border-b border-white/10">

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[6px] text-yellow-400 mb-6 text-sm">
            Pioneer Travels
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Our Fleet
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Executive and premium mobility solutions crafted for
            comfortable intercity and business travel.
          </p>

        </div>
      </section>

      {/* EXECUTIVE FLEET */}
      <section className="py-24 px-6 bg-zinc-950">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-16">

            <div>
              <p className="uppercase tracking-[5px] text-yellow-400 mb-4 text-sm">
                Fleet Category
              </p>

              <h2 className="text-5xl font-bold">
                Executive Fleet
              </h2>
            </div>

            <div className="hidden md:block w-32 h-[1px] bg-yellow-400"></div>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* SEDAN */}
            <div className="bg-black border border-white/10 rounded-[40px] p-10 hover:border-yellow-400/40 transition duration-500">

              <h3 className="text-4xl font-bold text-yellow-400 mb-10">
                Executive Sedan
              </h3>

              <div className="space-y-6 text-2xl text-gray-300">

                <p>• Toyota Etios</p>

                <p>• Maruti Dzire</p>

                <p>• Hyundai Aura</p>

                <p>• Honda Amaze</p>

              </div>

            </div>

            {/* SUV / MPV */}
            <div className="bg-black border border-white/10 rounded-[40px] p-10 hover:border-yellow-400/40 transition duration-500">

              <h3 className="text-4xl font-bold text-yellow-400 mb-10">
                SUV / MPV Fleet
              </h3>

              <div className="space-y-6 text-2xl text-gray-300">

                <p>• Toyota Innova Crysta</p>

                <p>• Maruti Ertiga</p>

                <p>• Toyota Rumion</p>

                <p>• Kia Carens</p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* LUXURY FLEET */}
      <section className="py-24 px-6 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-16">

            <div>
              <p className="uppercase tracking-[5px] text-yellow-400 mb-4 text-sm">
                Premium Collection
              </p>

              <h2 className="text-5xl font-bold">
                Luxury Fleet
              </h2>
            </div>

            <div className="hidden md:block w-32 h-[1px] bg-yellow-400"></div>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* LUXURY SEDAN */}
            <div className="bg-zinc-950 border border-white/10 rounded-[40px] p-10 hover:border-yellow-400/40 transition duration-500">

              <h3 className="text-4xl font-bold text-yellow-400 mb-10">
                Luxury Sedans
              </h3>

              <div className="space-y-6 text-2xl text-gray-300">

                <p>• Mercedes E-Class</p>

                <p>• BMW 5 Series</p>

                <p>• Audi A6</p>

                <p>• Toyota Camry</p>

              </div>

            </div>

            {/* LUXURY SUV */}
            <div className="bg-zinc-950 border border-white/10 rounded-[40px] p-10 hover:border-yellow-400/40 transition duration-500">

              <h3 className="text-4xl font-bold text-yellow-400 mb-10">
                Luxury SUVs
              </h3>

              <div className="space-y-6 text-2xl text-gray-300">

                <p>• Toyota Fortuner</p>

                <p>• Range Rover</p>

                <p>• MG Gloster</p>

                <p>• Premium SUV Collection</p>

              </div>

            </div>

          </div>

          <div className="text-center mt-20">

            <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto">
              Additional executive and luxury vehicles are available
              upon request based on travel requirements and availability.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-10 bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300"
            >
              Contact For Fleet Booking
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}