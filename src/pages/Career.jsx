import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import careers from "../assets/data/careers/careers.json";
import Header from "../components/Header";
import { ContainerCol } from "../components/Container";
import { Link } from "react-router-dom";

export default function Career() {
  return (
    <ContainerCol>
      <div id="section-why-work-here" className=" my-15 flex flex-col">
        <div className="text-3xl text-center mb-10 font-volkhov text-primary font-bold">
          Kenapa Harus Bekerja Dengan Kami?
        </div>
        <div id="why-work-here-card" className="flex flex-wrap justify-center">
          <WhyCard
            img="images/growth.png"
            title="Perkembangan Cepat"
            desc="Lorem Ipsum"
          />
          <WhyCard
            img="images/support.png"
            title="Kolaborasi Tim"
            desc="Lorem Ipsum"
          />
          <WhyCard
            img="images/star 1.png"
            title="Lingkungan Sehat"
            desc="Lorem Ipsum"
          />
          <WhyCard
            img="images/teamwork.png"
            title="Mentor Eksklusif"
            desc="Lorem Ipsum"
          />
          <WhyCard
            img="images/badge.png"
            title="Keuntungan Lainnya"
            desc="Lorem Ipsum"
          />
        </div>
      </div>
      <Header title="Posisi yang Tersedia" />
      <div
        id="section-career"
        className="justify-center flex flex-col gap-10 mb-10"
      >
        <div className="grid lg:grid-cols-2 gap-10">
          {careers.map((c) => (
            <Link to={`/career/${c.id}`}>
              <CareerCard position={c.position} />
            </Link>
          ))}
        </div>
        <div className="mx-auto">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
        </div>
      </div>
    </ContainerCol>
  );
}

function CareerCard({ position }) {
  return (
    <div className="p-3 flex justify-between items-center hover:cursor-pointer hover:bg-secondary hover:text-white font-bold bg-gray-200">
      <div id="career-position">{position}</div>
      <div id="career-cta">
        <div className="rounded-full bg-white p-3">
          <AiOutlineArrowRight className="text-black" />
        </div>
      </div>
    </div>
  );
}

function WhyCard({ img, title, desc }) {
  return (
    <div className="p-3 flex flex-col justify-center items-center w-[25vw]">
      <div id="why-icon" className="">
        <img src={img} alt="" />
      </div>
      <div id="why-title" className="font-bold text-xl">
        {title}
      </div>
      <div id="why-desc">{desc}</div>
    </div>
  );
}
