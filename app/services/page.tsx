export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-28">

      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* CITY TO CITY */}
        <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">

          <h2 className="text-2xl font-bold mb-6 text-yellow-400">
            City to City
          </h2>

          <div className="space-y-4 text-gray-300">

            <div>
              <h3 className="font-semibold text-white mb-2">
                Executive Sedan
              </h3>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">
                Executive SUV / MPV
              </h3>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">
                Luxury Fleet
              </h3>
            </div>

          </div>
        </div>

        {/* INTRA CITY */}
        <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">

          <h2 className="text-2xl font-bold mb-6 text-yellow-400">
            Intra City
          </h2>

          <div className="space-y-4 text-gray-300">

            <div>
              <h3 className="font-semibold text-white mb-2">
                Executive Sedan
              </h3>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">
                Executive SUV / MPV
              </h3>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">
                Luxury Fleet
              </h3>
            </div>

          </div>
        </div>

        {/* AIRPORT */}
        <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">

          <h2 className="text-2xl font-bold mb-6 text-yellow-400">
            Airport Transfers
          </h2>

          <div className="space-y-4 text-gray-300">

            <div>
              <h3 className="font-semibold text-white mb-2">
                Executive Sedan
              </h3>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">
                Executive SUV / MPV
              </h3>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">
                Luxury Fleet
              </h3>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}