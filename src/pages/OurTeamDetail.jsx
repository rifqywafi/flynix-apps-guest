import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { AiFillPhone } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsPinMap } from "react-icons/bs";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import teamData from "./../assets/data/team/our-team.json";
import { ContainerCol } from "../components/Container";
import BackButton from "../components/BackButton";

export default function OurTeamDetail() {
  const { id } = useParams();
  const member = teamData.find((item) => item.id === parseInt(id));

  return member ? (
    <ContainerCol>
      <div className="min-h-screen">
        <Header title="Tim Kami" />
        <BackButton to="/our-team" />
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center md:flex-row gap-6 bg-white shadow-xl rounded-xl p-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-50 h-100 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold mb-1">{member.name}</h2>
              <p className="text-lg text-gray-600">{member.position}</p>
              <p className="mt-2 text-sm flex flex-row items-center gap-2">
                <BsPinMap />
                {member.address.city}, {member.address.country}
              </p>
              <p className="mt-2 text-sm flex flex-row items-center gap-2">
                <BsFillEnvelopeFill />
                {member.email}
              </p>
              <p className="mt-2 text-sm flex flex-row  items-center gap-2">
                <AiFillPhone /> {member.phone}
              </p>

              <div className="mt-4">
                <h3 className="font-semibold">Skills:</h3>
                <ul className="list-disc ml-6">
                  {member.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex gap-4">
                <a
                  href={`https://${member.socials.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-8 h-8 text-yellow-500 hover:text-gray-500 hover:shadow-lg duration-500 ease-in-out" />
                </a>
                <a
                  href={`https://twitter.com/${member.socials.twitter.replace(
                    "@",
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="w-8 h-8 text-yellow-500 hover:text-gray-500 hover:shadow-lg duration-500 ease-in-out" />
                </a>
                <a
                  href={`https://instagram.com/${member.socials.instagram.replace(
                    "@",
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-8 h-8 text-lg text-yellow-500 hover:text-gray-500 hover:shadow-lg duration-500 ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerCol>
  ) : (
    <ContainerCol>
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-center p-6">Karyawan tidak ditemukan.</p>
      </div>
    </ContainerCol>
  );
}
