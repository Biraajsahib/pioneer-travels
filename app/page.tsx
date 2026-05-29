import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="text-3xl md:text-5xl font-black tracking-[6px]"
          >
            PIONEER TRAVELS
          </Link>

          <nav className="flex items-center gap-6 md:gap-10 text-sm md:text-xl">

            <Link
              href="/services"
              className="hover:text-yellow-400 transition"
            >
              Services
            </Link>

            <Link
              href="/fleet"
              className="hover:text-yellow-400 transition"
            >
              Fleet
            </Link>

            <a
              href="tel:+919872130111"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </a>

          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <p className="text-yellow-400 tracking-[8px] uppercase text-sm md:text-lg mb-5">
                Pioneer Travels
              </p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
                Get Multiple Services In A Single Place
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-10">
                Reliable cab solutions for Delhi pick and drop,
                airport transfers, outstation travel, local taxi rides
                and executive transportation services.
              </p>

              {/* EXPERIENCE BOXES */}
              <div className="space-y-5">

                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl px-8 py-6">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    More than 25 years of experience
                  </h3>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl px-8 py-6">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Reliable driver service
                  </h3>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-10">

              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8">
                Services
              </h2>

              <ul className="space-y-6 text-xl md:text-3xl text-gray-200">

                <li>• Airport Pickup & Drop</li>

                <li>• One Way Drop Services</li>

                <li>• Outstation Cabs</li>

                <li>• Event Transportation</li>

                <li>• Local Taxi Services</li>

              </ul>

              {/* CONTACT CTA */}
              <div className="mt-12 space-y-5">

                <a
                  href="tel:+919872130111"
                  className="block w-full bg-yellow-400 text-black text-center py-5 rounded-2xl text-xl md:text-2xl font-bold hover:scale-[1.02] transition"
                >
                  Call: +91 98721 30111
                </a>

                <a
                  href="tel:+919814100111"
                  className="block w-full bg-white/10 border border-white/10 text-white text-center py-5 rounded-2xl text-xl md:text-2xl font-bold hover:bg-white/20 transition"
                >
                  Alternate: +91 98141 00111
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* RATES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-20">

          <p className="text-yellow-400 tracking-[6px] uppercase mb-5 text-sm md:text-lg">
            One Way Rates
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Chandigarh ↔ Delhi
          </h2>

          <p className="text-gray-400 text-lg md:text-2xl">
            Reliable intercity executive mobility solutions.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* SEDAN */}
          <div className="bg-zinc-950 border border-white/10 rounded-[40px] overflow-hidden">

            <div className="p-10">

              <div className="flex items-center justify-between mb-10">

                <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">
                  Executive Sedan
                </h3>

                <div className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold">
                  Best Seller
                </div>

              </div>

              <p className="text-gray-300 text-2xl mb-10">
                Etios • Aura • Dzire
              </p>

              <div className="bg-white/10 border border-white/10 rounded-3xl p-10">

                <p className="text-gray-400 uppercase tracking-[5px] text-sm mb-5">
                  One Way Fare
                </p>

                <div className="flex items-center justify-between flex-wrap gap-6">

                  <div>
                    <h4 className="text-6xl font-black">
                      ₹3,500
                    </h4>
                  </div>

                  <div className="text-right">
                    <p className="text-gray-400 uppercase tracking-[3px] text-sm mb-2">
                      Route
                    </p>

                    <p className="text-2xl text-white">
                      Chandigarh ↔ Delhi
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* SUV */}
          <div className="bg-zinc-950 border border-white/10 rounded-[40px] overflow-hidden">

            <div className="p-10">

              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-10">
                SUV / MPV
              </h3>

              <div className="space-y-6">

                {/* CRYSTA */}
                <div className="bg-white/10 border border-white/10 rounded-3xl p-8 flex items-center justify-between">

                  <div>
                    <h4 className="text-3xl font-bold mb-2">
                      Toyota Crysta
                    </h4>

                    <p className="text-gray-400 text-xl">
                      Chandigarh ↔ Delhi
                    </p>
                  </div>

                  <div className="text-5xl font-black text-white">
                    ₹5,500
                  </div>

                </div>

                {/* ERTIGA */}
                <div className="bg-white/10 border border-white/10 rounded-3xl p-8 flex items-center justify-between">

                  <div>
                    <h4 className="text-3xl font-bold mb-2">
                      Ertiga / Rumion
                    </h4>

                    <p className="text-gray-400 text-xl">
                      Chandigarh ↔ Delhi
                    </p>
                  </div>

                  <div className="text-5xl font-black text-white">
                    ₹4,500
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/919872130111"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 transition rounded-full p-5 shadow-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0012.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.87 11.87 0 005.77 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.16-3.47-8.43zM12.08 21.8h-.01a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.74.98 1-3.64-.23-.37a9.84 9.84 0 01-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.9 6.99c0 5.46-4.44 9.9-9.88 9.9zm5.44-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.13 4.53.72.31 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </a>

    </main>
  );
}