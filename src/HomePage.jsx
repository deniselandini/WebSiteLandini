export default function HomePage() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 space-y-4 md:space-y-0">
          <div>
            <div className="text-xl font-bold text-green-700">STUDIO TECNICO</div>
            <h1 className="text-3xl font-extrabold text-blue-900">STUDIO TECNICO ASSOCIATO</h1>
            <p className="text-gray-600 mt-2">Progettazione, rilievi e consulenze tecniche per privati e imprese</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition">Scopri i nostri servizi</button>
            <button className="bg-blue-900 text-white px-5 py-2 rounded-full shadow hover:bg-blue-800 transition">Richiedi un preventivo</button>
          </div>
        </div>
        <img src="https://via.placeholder.com/1200x400?text=Immagine+Edificio+Moderno" alt="Edificio moderno" className="w-full object-cover h-64" />
      </header>

      {/* About Us */}
      <section id="about" className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <img src="https://via.placeholder.com/500x350?text=Professionisti" alt="Team" className="rounded-3xl shadow-xl hover:scale-105 transform transition" />
        <div>
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Chi siamo</h2>
          <p className="text-gray-700 text-lg mb-6">
            Siamo una studio assodao di geometri con experienza plartennale, ci occupiamo di progettatione, protiche edilizie e consulese per occcompangare i nostri clienti in ogn ifase del processo edilizio.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition">Conssci li nostro team</button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-12">I nostri servizi</h2>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                icon: "🏗️",
                title: "URBANISTICA",
                desc: "1)	sviluppo di piani attuativi in genere, piani di recupero e piani di lottizzazione."
              },
              {
                icon: "📐",
                title: "Pratiche edilize e catastall",
                desc: "Pennessi di costruite, aggiornamento catausa, divisioni iinmobiliani"
              },
              {
                icon: "🌱",
                title: "Sicurezza ed energia",
                desc: "Coordinamento deta alcureraa, certilessioni energettche"
              },
              {
                icon: "📊",
                title: "Perizie e consulenze",
                desc: "Petide estimative volulazioni tsermiche, comenzieei"
              }
            ].map((service, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-xl text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-12">I nostri progetti</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((proj) => (
            <div key={proj} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition">
              <img src={`https://via.placeholder.com/400x250?text=Progetto+${proj}`} alt={`Progetto ${proj}`} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg text-blue-900 mb-1">Progetto {proj}</h3>
                <p className="text-gray-700 text-sm">Descrizione breve del progetto realizzato.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}