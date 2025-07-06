import { FaPlaneDeparture, FaGlobeAsia, FaLeaf, FaSmile } from "react-icons/fa";
import { ContainerCol } from "../components/Container";

export default function AboutUs() {
  return (
    <ContainerCol>
      {/* Background Decorative Images */}
      <div className="pointer-events-none select-none">
        <img
          src="images/about-us1.jpg"
          alt=""
          className="hidden md:block absolute top-0 left-0 w-56 h-56 object-cover rounded-3xl opacity-30 blur-[2px] -z-10"
        />
        <img
          src="images/about-us2.jpg"
          alt=""
          className="hidden md:block absolute top-20 right-0 w-40 h-40 object-cover rounded-2xl opacity-20 blur-[1px] -z-10"
        />
        <img
          src="images/about-us3.jpg"
          alt=""
          className="hidden md:block absolute bottom-0 left-10 w-44 h-44 object-cover rounded-2xl opacity-20 blur-[1px] -z-10"
        />
        <img
          src="images/about-us4.jpg"
          alt=""
          className="hidden md:block absolute bottom-10 right-10 w-36 h-36 object-cover rounded-2xl opacity-25 blur-[1px] -z-10"
        />
      </div>

      {/* Judul */}
      <div className="w-full text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight drop-shadow">
          Tentang <span className="text-secondary">FlyNix</span>
        </h1>
      </div>

<div className="mb-10">
      {/* Section Informasi */}
      <section className="flex flex-col md:flex-row items-center gap-8  px-5 xl:px-36">
        <img
          src="images/about-us1.jpg"
          alt="FlyNix"
          className="w-100 h-auto object-cover rounded-2xl shadow-lg mb-6 md:mb-0"
        />
        <div className="flex-1 text-center md:text-left">
          <p className="text-lg leading-relaxed text-gray-700">
            FlyNix adalah maskapai penerbangan modern yang berdedikasi untuk memberikan pengalaman terbang terbaik bagi seluruh pelanggan kami.
            Dengan jaringan penerbangan domestik dan internasional yang luas, kami mengutamakan <span className="font-semibold text-primary">keselamatan</span>, <span className="font-semibold text-primary">kenyamanan</span>, dan <span className="font-semibold text-primary">pelayanan pelanggan</span> yang unggul.
          </p>
        </div>
      </section>

      {/* Section Sejarah */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8  px-5 xl:px-36">
        <img
          src="images/about-us3.jpg"
          alt="Sejarah FlyNix"
          className="w-96 max-w-full h-auto object-cover rounded-2xl shadow-lg mb-6 md:mb-0"
        />
        <div className="flex-1 text-center md:text-left">
          <p className="text-base text-gray-700">
            Didirikan pada tahun 2025, FlyNix memulai operasinya dengan hanya beberapa rute domestik. Berkat komitmen terhadap inovasi dan pelayanan, FlyNix berkembang pesat dan kini melayani puluhan destinasi di dalam dan luar negeri. 
            <br className="hidden md:block" />
            Dengan filosofi <span className="font-semibold text-primary">"Terbang Lebih Tinggi, Tanpa Ragu!"</span>, FlyNix terus berinovasi untuk memberikan pengalaman perjalanan udara yang aman, nyaman, dan terjangkau bagi semua kalangan.
          </p>
        </div>
      </section>
</div>

      {/* Section Visi & Misi */}
      <section className="flex flex-col md:flex-row items-start justify-center gap-8 px-5 xl:px-36">
        {/* Visi */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <h2 className="text-2xl font-semibold mb-3 text-primary flex items-center gap-2 justify-center md:justify-end">
            <FaGlobeAsia className="text-secondary" /> Visi Kami
          </h2>
          <p className="text-base text-gray-700 mb-8 text-center md:text-right">
            Menjadi maskapai penerbangan pilihan utama di Asia Tenggara yang mengutamakan inovasi, kenyamanan, dan pelayanan pelanggan kelas dunia.
          </p>
        </div>
        {/* Gambar tengah */}
        <div className="flex-shrink-0 flex flex-col items-center justify-start pt-2">
          <img
            src="images/about-us2.jpg"
            alt="Visi & Misi"
            className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-primary mb-4"
          />
          <span className="block text-primary font-bold">FlyNix</span>
        </div>
        {/* Misi */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-semibold mb-3 text-secondary flex items-center gap-2 justify-center md:justify-start">
            <FaLeaf className="text-primary" /> Misi Kami
          </h2>
          <ul className="text-base text-gray-700 flex flex-col items-center md:items-start gap-2">
            <li>
              Menyediakan layanan penerbangan yang aman dan efisien.
            </li>
            <li>
              Mengutamakan kepuasan dan kenyamanan pelanggan.
            </li>
            <li>
              Mendukung pengembangan teknologi dan keberlanjutan lingkungan.
            </li>
            <li>
              Membangun budaya kerja yang profesional dan ramah.
            </li>
          </ul>
        </div>
      </section>

      {/* Komitmen */}
      <div className="max-w-3xl mx-auto mt-14 text-base text-gray-700 bg-blue-50/70 rounded-xl p-6 shadow-inner text-center">
        <p>
          FlyNix berkomitmen untuk terus berkembang dan menjadi bagian dari kemajuan industri penerbangan nasional maupun internasional.
          <br />
          <span className="font-semibold text-primary">Terima kasih telah mempercayakan perjalanan Anda bersama kami.</span>
        </p>
      </div>
    </ContainerCol>
  );
}