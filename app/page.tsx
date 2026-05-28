import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <h1 className="text-3xl md:text-4xl font-black tracking-[4px] uppercase">
            Pioneer Travels
          </h1>

          <div className="hidden md:flex gap-10 text-sm text-gray-300">

            <Link
              href="/services"
              className="hover:text-yellow-400 transition duration-300"
            >
              Services
            </Link>

            <Link
              href="/fleet"
              className="hover:text-yellow-400 transition duration-300"
            >
              Fleet
            </Link>

            <Link
              href="/contact"
              className="hover:text-yellow-400 transition duration-300"
            >
              Contact
            </Link>

          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

        {/* BACKGROUND IMAGE */}
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop"
          alt="Luxury Travel"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-32 pb-20">

          <p className="uppercase tracking-[7px] text-yellow-400 mb-8 text-sm md:text-base text-center">
            Pioneer Travels
          </p>

          <h1 className="text-4.8xl md:text-[75px] font-black leading-[0.85] tracking-tight text-center">

            Get Multiple Services

            <br />

            In A Single Place

          </h1>

          {/* MAIN GRID */}
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">

            {/* LEFT SIDE */}
            <div>

              <p className="text-1.5xl md:text-2xl text-gray-170 leading-relaxed">

                Reliable cab solutions for Delhi pick and drop, airport transfers,
                outstation travel, local taxi rides and
                executive transportation services.

              </p>

              {/* EXPERIENCE BADGES */}
              <div className="mt-10 flex flex-col gap-5">

                <div className="bg-white/10 backdrop-blur-md border border-white/10 px-8 py-5 rounded-2xl">

                  <p className="text-xl font-semibold">
                    More than 25 years of experience
                  </p>

                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/10 px-8 py-5 rounded-2xl">

                  <p className="text-xl font-semibold">
                    Reliable driver service
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-10">

              <h3 className="text-3xl font-bold text-yellow-400 mb-8">
                Services
              </h3>

              <div className="space-y-6 text-2xl text-gray-100">

                <p>• Delhi Pickup & Drop</p>

                <p>• One Way Drop Services</p>

                <p>• Outstation Cabs</p>

                <p>• Event Transportation</p>

                <p>• Local Taxis</p>

              </div>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">

            <Link
              href="/fleet"
              className="bg-yellow-400 text-black px-12 py-5 rounded-full text-lg font-semibold hover:scale-105 transition duration-300 text-center"
            >
              Explore Fleet
            </Link>

            <Link
              href="/services"
              className="border border-white/20 backdrop-blur-md bg-white/5 px-12 py-5 rounded-full text-lg hover:bg-white hover:text-black transition duration-300 text-center"
            >
              View Services
            </Link>

          </div>

          {/* CONTACT */}
          <div className="mt-14 text-center">

            <p className="text-4xl font-bold text-white">
              +91 9872130111 ;
              +91 9917600079
            </p>

            <p className="text-gray-300 mt-3 text-lg">
              Available 24×7 for bookings
            </p>

          </div>

        </div>

      </section>

      {/* ONE WAY RATES */}
      <section className="py-28 px-6 bg-zinc-950">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-yellow-400 mb-5 text-sm">
              One Way Rates
            </p>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Chandigarh to Delhi
              <br />
              Delhi to Chandigarh
            </h2>

            <p className="text-gray-400 text-xl">
              Premium executive rides with transparent pricing.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* EXECUTIVE SEDAN */}
            <div className="bg-black border border-white/10 rounded-[40px] overflow-hidden hover:border-yellow-400/40 transition duration-500">

              <div className="relative h-[340px] bg-white">

                <Image
                  src="/cars/etios.png"
                  alt="Toyota Etios"
                  fill
                  className="object-contain p-8"
                />

              </div>

              <div className="p-10">

                <div className="flex items-center justify-between mb-6">

                  <h3 className="text-4xl font-bold text-yellow-400">
                    Executive Sedan
                  </h3>

                  <div className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold">
                    Best Seller
                  </div>

                </div>

                <p className="text-gray-300 text-lg mb-8">
                  Etios • Aura • Dzire
                </p>

                <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 flex justify-between items-center">

                  <div>

                    <p className="text-2xl font-semibold">
                      Executive Sedan
                    </p>

                    <p className="text-gray-400 mt-1">
                      Chandigarh ↔ Delhi
                    </p>

                  </div>

                  <p className="text-4xl font-bold text-yellow-400">
                    ₹3,500
                  </p>

                </div>

              </div>
            </div>

            {/* SUV / MPV */}
            <div className="bg-black border border-white/10 rounded-[40px] overflow-hidden hover:border-yellow-400/40 transition duration-500">

              <div className="relative h-[340px] bg-white">

                <Image
                  src="/cars/innova.png"
                  alt="Toyota Innova Crysta"
                  fill
                  className="object-contain p-8"
                />

              </div>

              <div className="p-10">

                <h3 className="text-4xl font-bold mb-8 text-yellow-400">
                  SUV / MPV
                </h3>

                <div className="space-y-5">

                  {/* CRYSTA */}
                  <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 flex justify-between items-center">

                    <div>

                      <p className="text-2xl font-semibold">
                        Toyota Crysta
                      </p>

                      <p className="text-gray-400 mt-1">
                        Chandigarh ↔ Delhi
                      </p>

                    </div>

                    <p className="text-4xl font-bold text-yellow-400">
                      ₹5,500
                    </p>

                  </div>

                  {/* ERTIGA */}
                  <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 flex justify-between items-center">

                    <div>

                      <p className="text-2xl font-semibold">
                        Ertiga / Rumion
                      </p>

                      <p className="text-gray-400 mt-1">
                        Chandigarh ↔ Delhi
                      </p>

                    </div>

                    <p className="text-4xl font-bold text-yellow-400">
                      ₹4,500
                    </p>

                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES + FLEET */}
      <section className="py-28 px-6 bg-black">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* SERVICES */}
          <div className="bg-zinc-950 rounded-[40px] p-12 border border-white/10 hover:border-yellow-400/30 transition duration-500">

            <h2 className="text-5xl font-bold mb-10">
              Services
            </h2>

            <div className="space-y-6 text-xl text-gray-300">

              <p>• Airport Pickup & Drop</p>

              <p>• One Way Drop Services</p>

              <p>• Outstation Cabs</p>

              <p>• Event Transportation</p>

              <p>• Local Taxis</p>

            </div>

            <Link
              href="/services"
              className="inline-block mt-12 text-yellow-400 text-xl hover:underline"
            >
              View Services →
            </Link>

          </div>

          {/* FLEET */}
          <div className="bg-zinc-950 rounded-[40px] p-12 border border-white/10 hover:border-yellow-400/30 transition duration-500">

            <h2 className="text-5xl font-bold mb-10">
              Fleet
            </h2>

            <div className="space-y-6 text-xl text-gray-300">

              <p>• Executive Sedan</p>

              <p>• SUV / MPV Fleet</p>

              <p>• Premium Vehicles</p>

              <p>• Luxury Travel Options</p>

            </div>

            <Link
              href="/fleet"
              className="inline-block mt-12 text-yellow-400 text-xl hover:underline"
            >
              Explore Fleet →
            </Link>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 bg-black text-center">

        <p className="text-yellow-400 text-3xl font-bold mb-4">
          +91 9872130111 ;
          +91 9917600079
        </p>

        <p className="text-gray-400 text-lg">
          Pioneer Travels • Premium Intercity Mobility
        </p>

      </footer>

    </main>
  );
}