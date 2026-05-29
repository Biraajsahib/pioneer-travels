import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#060606] text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            href="/"
            className="text-3xl md:text-5xl font-black tracking-[6px]"
          >
            PIONEER TRAVELS
          </Link>

          <nav className="flex items-center gap-8 text-sm md:text-base text-gray-300">

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

            <a
              href="tel:+919872130111"
              className="hover:text-yellow-400 transition duration-300"
            >
              Contact
            </a>

          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#060606]" />

        {/* GOLD AMBIENT LIGHT */}
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-yellow-500/10 blur-[180px] rounded-full" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[8px] text-yellow-400 text-xs md:text-sm mb-6">
                Pioneer Travels
              </p>

              <h1
                className="
                text-[52px]
                md:text-[72px]
                lg:text-[88px]
                leading-[0.95]
                tracking-[-2px]
                font-semibold
                mb-8
              "
                style={{
                  fontFamily:
                    "Georgia, Times New Roman, serif",
                }}
              >
                Get Multiple Services In A Single Place
              </h1>

              <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-12 font-light">
                Reliable cab solutions for Delhi pickup and drop,
                airport transfers, outstation travel, local taxi rides
                and executive transportation services.
              </p>

              {/* FEATURE BOXES */}
              <div className="space-y-5">

                <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-[28px] px-8 py-6">

                  <h3 className="text-xl md:text-2xl font-medium">
                    More than 25 years of experience
                  </h3>

                </div>

                <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-[28px] px-8 py-6">

                  <h3 className="text-xl md:text-2xl font-medium">
                    Reliable driver service
                  </h3>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-white/[0.06] backdrop-blur-2xl border border-white/10 rounded-[38px] p-10">

              <h2
                className="text-4xl md:text-5xl mb-10 text-yellow-400"
                style={{
                  fontFamily:
                    "Georgia, Times New Roman, serif",
                }}
              >
                Services
              </h2>

              <ul className="space-y-6 text-lg md:text-2xl text-gray-200 font-light">

                <li>• Airport Pickup & Drop</li>

                <li>• One Way Drop Services</li>

                <li>• Outstation Cabs</li>

                <li>• Event Transportation</li>

                <li>• Local Taxi Services</li>

              </ul>

              {/* CONTACT BUTTONS */}
              <div className="mt-12 space-y-5">

                <a
                  href="tel:+919872130111"
                  className="
                    block
                    text-center
                    bg-yellow-400
                    text-black
                    rounded-2xl
                    py-5
                    text-lg
                    md:text-xl
                    font-semibold
                    hover:scale-[1.01]
                    transition
                  "
                >
                  Call: +91 98721 30111
                </a>

                <a
                  href="tel:+919814100111"
                  className="
                    block
                    text-center
                    bg-white/[0.06]
                    border
                    border-white/10
                    rounded-2xl
                    py-5
                    text-lg
                    md:text-xl
                    font-medium
                    hover:bg-white/[0.09]
                    transition
                  "
                >
                  Alternate: +91 98141 00111
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* RATES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-yellow-400 text-xs md:text-sm mb-6">
            One Way Rates
          </p>

          <h2
            className="
            text-[48px]
            md:text-[70px]
            leading-tight
            mb-5
            font-semibold
          "
            style={{
              fontFamily:
                "Georgia, Times New Roman, serif",
            }}
          >
            Chandigarh ↔ Delhi
          </h2>

          <p className="text-gray-400 text-base md:text-xl font-light">
            Reliable intercity executive mobility solutions.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* SEDAN */}
          <div className="bg-[#0b0b0b] border border-white/10 rounded-[36px] p-10">

            <div className="flex items-center justify-between mb-10">

              <div>
                <h3
                  className="text-4xl md:text-5xl text-yellow-400 leading-tight"
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                  }}
                >
                  Executive Sedan
                </h3>

                <p className="text-gray-400 text-lg mt-4">
                  Etios • Aura • Dzire
                </p>
              </div>

              <div className="bg-yellow-400 text-black px-5 py-3 rounded-full text-sm font-semibold">
                Best Seller
              </div>

            </div>

            <div className="bg-white/[0.06] border border-white/10 rounded-[30px] p-8">

              <p className="uppercase tracking-[6px] text-gray-400 text-xs mb-6">
                One Way Fare
              </p>

              <div className="flex items-center justify-between flex-wrap gap-8">

                <h4 className="text-5xl md:text-6xl font-semibold">
                  ₹3,500
                </h4>

                <div className="text-right">
                  <p className="uppercase tracking-[4px] text-gray-500 text-xs mb-2">
                    Route
                  </p>

                  <p className="text-lg md:text-xl text-gray-300">
                    Chandigarh ↔ Delhi
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* SUV */}
          <div className="bg-[#0b0b0b] border border-white/10 rounded-[36px] p-10">

            <h3
              className="text-4xl md:text-5xl text-yellow-400 mb-10"
              style={{
                fontFamily:
                  "Georgia, Times New Roman, serif",
              }}
            >
              SUV / MPV
            </h3>

            <div className="space-y-6">

              {/* CRYSTA */}
              <div className="bg-white/[0.06] border border-white/10 rounded-[28px] p-7 flex items-center justify-between">

                <div>

                  <h4 className="text-2xl md:text-3xl font-medium mb-2">
                    Toyota Crysta
                  </h4>

                  <p className="text-gray-400 text-base md:text-lg">
                    Chandigarh ↔ Delhi
                  </p>

                </div>

                <div className="text-4xl md:text-5xl font-semibold">
                  ₹5,500
                </div>

              </div>

              {/* ERTIGA */}
              <div className="bg-white/[0.06] border border-white/10 rounded-[28px] p-7 flex items-center justify-between">

                <div>

                  <h4 className="text-2xl md:text-3xl font-medium mb-2">
                    Ertiga / Rumion
                  </h4>

                  <p className="text-gray-400 text-base md:text-lg">
                    Chandigarh ↔ Delhi
                  </p>

                </div>

                <div className="text-4xl md:text-5xl font-semibold">
                  ₹4,500
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/919872130111"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed
          bottom-6
          right-6
          z-50
          bg-[#25D366]
          hover:scale-105
          transition-all
          duration-300
          w-16
          h-16
          rounded-full
          flex
          items-center
          justify-center
          shadow-[0_10px_40px_rgba(37,211,102,0.35)]
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
        >
          <path d="M19.11 17.21c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.19.29-.74.94-.91 1.13-.17.19-.33.22-.62.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.44 1.04 2.82 1.19 3.02.14.19 2.04 3.11 4.95 4.36.69.3 1.24.47 1.66.6.7.22 1.34.19 1.84.11.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.11-.26-.18-.55-.33z"/>
          <path d="M16.01 3C8.83 3 3 8.83 3 16c0 2.53.74 5 2.13 7.11L3 29l6.08-2.07A12.93 12.93 0 0016.01 29C23.18 29 29 23.17 29 16S23.18 3 16.01 3zm0 23.67c-2.07 0-4.09-.56-5.85-1.62l-.42-.25-3.61 1.23 1.18-3.52-.27-.44A10.61 10.61 0 015.33 16c0-5.88 4.79-10.67 10.68-10.67 2.85 0 5.52 1.11 7.53 3.12A10.57 10.57 0 0126.67 16c0 5.89-4.79 10.67-10.66 10.67z"/>
        </svg>

      </a>

    </main>
  );
}