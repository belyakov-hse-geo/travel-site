import { useEffect } from "react";

export default function TravelAgencyWebsite() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//tourvisor.ru/module/init.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const tours = [
    {
      country: "Турция",
      price: "от €420",
      image:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      country: "Мальдивы",
      price: "от €1490",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      country: "Таиланд",
      price: "от €890",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold tracking-tight">
            БЕЛЯКОВЫ ПРО ТУРЫ
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition">
              О нас
            </a>

            <a href="#tours" className="hover:text-blue-600 transition">
              Туры
            </a>

            <a href="#search" className="hover:text-blue-600 transition">
              Поиск
            </a>

            <a href="#contacts" className="hover:text-blue-600 transition">
              Контакты
            </a>
          </nav>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-2xl text-sm shadow-lg">
            Подобрать тур
          </button>

        </div>
      </header>

      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6 max-w-4xl text-white">

          <p className="uppercase tracking-[6px] text-sm mb-4 opacity-90">
            Премиальное турагентство
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Путешествия, которые хочется повторить
          </h2>

          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Подберём идеальный тур: от Мальдив до Европы —
            быстро, удобно и без стресса.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold transition shadow-2xl">
              Подобрать тур
            </button>

            <button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 px-8 py-4 rounded-2xl text-lg font-semibold transition">
              Связаться
            </button>

          </div>
        </div>
      </section>

      <section id="search" className="py-24 bg-gray-50 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold mb-4">
              Поиск туров
            </h3>

            <p className="text-gray-600 text-lg">
              Найдите лучшие предложения онлайн
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">

            <div className="rounded-2xl overflow-hidden">

              <div className="tv-search-form tv-moduleid-9977498"></div>

            </div>

          </div>

        </div>

      </section>

      <section id="tours" className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">

            <div>
              <p className="text-blue-600 font-semibold mb-2">
                Популярные направления
              </p>

              <h3 className="text-4xl font-bold">
                Горящие туры
              </h3>
            </div>

            <button className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition px-5 py-3 rounded-2xl">
              Смотреть все
            </button>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {tours.map((tour, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
              >

                <div className="h-72 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.country}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">

                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-2xl font-bold">
                      {tour.country}
                    </h4>

                    <span className="text-blue-600 font-semibold">
                      {tour.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Премиальные отели, трансферы и поддержка включены.
                  </p>

                  <button className="w-full bg-gray-900 hover:bg-blue-600 text-white py-3 rounded-2xl transition font-medium">
                    Смотреть предложения
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      <section id="about" className="py-24 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop"
              alt="travel"
              className="rounded-3xl shadow-2xl h-[500px] object-cover w-full"
            />
          </div>

          <div>

            <p className="text-blue-600 font-semibold mb-3">
              Почему выбирают нас
            </p>

            <h3 className="text-5xl font-bold leading-tight mb-6">
              Путешествуйте легко вместе с профессионалами
            </h3>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Мы помогаем находить лучшие туры, выгодные цены и
              комфортный отдых без лишних забот.
            </p>

          </div>

        </div>

      </section>

      <footer
        id="contacts"
        className="bg-black text-white py-14 px-6"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          <div>
            <h4 className="text-2xl font-bold mb-4">
              Беляковы про туры
            </h4>

            <p className="text-gray-400 leading-relaxed">
              Современное турагентство с подбором лучших туров и поддержкой 24/7.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">
              Контакты
            </h5>

            <div className="space-y-2 text-gray-400">
              <p>Telegram: @belyakov_tours</p>
              <p>WhatsApp: +420 123 456 789</p>
              <p>Instagram: @belyakov_tours</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2026 Беляковы про туры
        </div>

      </footer>

    </div>
  );
}