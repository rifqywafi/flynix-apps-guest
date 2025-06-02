import { BiChevronDown } from "react-icons/bi"; 
import { BiChevronUp } from "react-icons/bi"; 
// import Card from "../components/Card";
import { useState } from "react";
import testimonies from "../assets/data/testimonies/testimonies.json";
import { useEffect } from "react";
import axios from "axios";

export default function LandingPage() {
  // const data = {
  //   i: "",
  //   q: "TESS",
  //   a: "Rifqy"
  // }
  const [data, setData] = useState("")
  useEffect(() => {
      axios
          .get(`https://api.adviceslip.com/advice`)
          .then((response) => {
              setData(response.data.slip)
          })
          .catch((err) => {
              
          })
    }, []) 

  return (
    <div id="landing-page" className="overflow-hidden">
      <img
        className="z-[-10] max-w-full h-auto absolute top-0 right-0"
        src="/images/vector-landing1.png"
        alt="Background Vector"
      />
      <PlaneIconBg marginT={100} marginE={75} />
      <PlaneIconBg marginT={500} marginE={300} />
      <PlaneIconBg marginT={200} marginE={600} />
      <HeroSection />
      <QuoteSection data={data} />
      <ServiceSection />
      <TestimonySection />
    </div>
  );
}

function QuoteSection({data}){
  return(
      <div className="flex flex-col mb-50 justify-center items-center">
        <div className="md:text-4xl xl:text-6xl italic">
            "{data.advice}"
        </div>
      </div>
  )
}

function PlaneIconBg({ marginT, marginE }) {
  return (
    <img
      className={`z-[-10] max-w-full h-auto absolute`}
      style={{ top: `${marginT}px`, right: `${marginE}px` }}
      src="/images/airplane2.png"
      alt=""
    />
  );
}

function HeroSection() {
  return (
    <div
      id="hero-section"
      className="mt-5 xl:mt-none xl:justify-start justify-center flex flex-row items-center mx-35 min-h-screen relative max-w-screen-xl"
    >
      {/* Hero Content di Kiri */}
      <div id="hero-content" className="xl:w-1/2 z-10 text-center md:text-left">
        <div
          id="hero-tagline"
          className="font-opensans font-bold text-secondary"
        >
          PILIHAN TERBAIK UNTUK LIBURANMU
        </div>
        <div
          id="hero-header"
          className="mt-4 leading-tight text-5xl font-volkhov text-primary xl:text-7xl font-bold"
        >
          Terbang Lebih Tinggi, Tanpa Ragu!
        </div>
        <div id="hero-desc" className="mt-4 text-lg text-gray-700">
          Lupakan ribetnya pesan tiket. Dengan FlyNix, kamu bisa temukan
          penerbangan terbaik, booking dalam hitungan detik, dan siap terbang ke
          destinasi impianmu — mudah, cepat, dan nyaman.
        </div>
        <div id="hero-cta" className="mt-4">
          <button className="bg-sides text-white py-2 px-6 rounded-md hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 transition">
            Lebih Lanjut
          </button>
        </div>
      </div>
      <img
        className="absolute xl:block hidden left-50 z-[-5] h-auto"
        src="/images/airplane1.png"
        alt="Pesawat"
      />
    </div>
  );
}

function ServiceSection() {
  return (
    <div id="service-section" className="min-h-screen">
      <img
        src="images/service-decor1.png"
        className="absolute right-10 z-[-20]"
        alt=""
      />
      <div id="service-tag" className="text-gray-500 text-xl text-center mb-3">
        LAYANAN
      </div>
      <div
        id="services-title"
        className="text-primary text-center font-bold font-volkhov text-3xl xl:text-5xl"
      >
        LAYANAN TERBAIK KAMI
      </div>
      <div
        id="service-cards"
        className="relative mt-10 mx-35 grid xl:grid-cols-4 md:grid-cols-2 justify-center gap-10"
      >
        <img
          src="images/service-decor2.png"
          className="absolute top-[-35px] right-[-35px] z-[-10]"
          alt=""
        />
        <ServiceCard
          icon="images/satelite.png"
          title="Calculated Weather"
          desc="Prediksi cuaca yang tepat, memperkecil kemungkinan delay"
        />
        <ServiceCard
          icon="images/airplane2.png"
          title="Best Flights"
          desc="Prediksi cuaca yang tepat, memperkecil kemungkinan delay"
        />
        <ServiceCard
          icon="images/mic.png"
          title="Local Events"
          desc="Beberapa event menarik untuk penerbangan lokal"
        />
        <ServiceCard
          icon="images/gear.png"
          title="Customization"
          desc="Kustomisasi pengalaman penerbangan anda"
        />
        <img
          src="images/service-decor2.png"
          className="absolute bottom-[-35px] left-[-35px] z-[-10]"
          alt=""
        />
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <div
        id="service"
        className="flex min-h-65 flex-col gap-5 justify-center text-center"
      >
        <div id="serice-icon" className="flex justify-center max-h-20">
          <img src={icon} alt="" />
        </div>
        <div id="service-title" className="font-opensans font-semibold">
          {title}
        </div>
        <div id="service-desc" className="text-gray-500">
          {desc}
        </div>
      </div>
    </div>
  );
}

function TestimonySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimony = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
  };

  const nextTestimony = () => {
    setActiveIndex((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
  };

  const setTestimony = (index) => {
    setActiveIndex(index);
  };
  return (
    <div id="testimony-section" className="xl:mt-0 min-h-[50vh] flex flex-col gap-15 xl:gap-5 xl:flex-row mx-35">
      <div id="testimony-text" className="w-1/2 text-left">
        <div
          id="testimony-tag"
          className="text-gray-500 text-xl mb-3"
        >
          Testimoni
        </div>
        <div
          id="testimony-header"
          className="text-primary font-bold font-volkhov text-3xl xl:text-5xl"
        >
          Apa yang Mereka Katakan Tentang Kami?
        </div>
        <div className="flex gap-2 mt-4">
          {testimonies.map((t, id) => (
            <button
              key={id}
              onClick={() => setTestimony(id)}
              className={`w-3 h-3 rounded-full ${
                id === activeIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row items-start">
        <div id="testimony-content" className="relative">
          <TestimonyCard {...testimonies[activeIndex]} />
        </div>
        <div id="testimonies-navigation" className="flex-col flex items-center gap-20 justify-center w-20">
          <button
              onClick={prevTestimony}
              className="text-gray-400 hover:text-secondary text-4xl hover:cursor-pointer"
            >
              <BiChevronUp />
          </button>
          <button
              onClick={nextTestimony}
              className="text-gray-400 hover:text-secondary text-4xl hover:cursor-pointer"
            >
              <BiChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}

function TestimonyCard({ content, name, img, address }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <div id="testimony-card-content" className="text-gray-500 relative ">
        <img src={img} className="object-cover absolute top-[-70px] left-[-70px] rounded-full border-2 w-[75px] h-[75px] z-20" alt="" />
        <div id="testimony-card-content" className="mb-4">
          {content}
        </div>
        <div id="testimony-name" className="font-semibold">
          {name}
        </div>
        <div id="testimony-address" className="font-sm">
          {address}
        </div>
      </div>
    </div>
  );
}
