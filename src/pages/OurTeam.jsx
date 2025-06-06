import OurTeamData from "../assets/data/team/our-team.json";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Header from "../components/Header";
import { ContainerCol } from "../components/Container";
import { Link } from "react-router-dom";

export default function OurTeam() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedSkill: "",
    selectedCountry: "",
  });
  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();

  const filteredTeams = OurTeamData.filter((team) => {
    const matchesSearch =
      team.name.toLowerCase().includes(_searchTerm) ||
      team.position.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedSkill
      ? team.skills.includes(dataForm.selectedSkill)
      : true;

    const matchesCountry = dataForm.selectedCountry
      ? team.address.country.includes(dataForm.selectedCountry)
      : true;

    return matchesSearch && matchesTag && matchesCountry;
  });

  const allSkills = [...new Set(OurTeamData.flatMap((team) => team.skills))];
  const allCountry = [
    "Indonesia",
    "Malaysia",
    "China",
    "Japan",
    "South Korea",
    "Norway",
  ];
  return (
    <ContainerCol>
      <Header title="Tim Kami" />
      <div className="mx-10">
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={dataForm.searchTerm}
          placeholder="Search Name or Position"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div className="flex flex-wrap justify-between">
          <select
            name="selectedSkill"
            onChange={handleChange}
            value={dataForm.selectedSkill}
            className="xl:w-1/2 w-full p-2 border border-gray-300 rounded mb-4"
          >
            <option value="">All Skills</option>
            {allSkills.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
          <select
            name="selectedCountry"
            onChange={handleChange}
            value={dataForm.selectedCountry}
            className="w-1/2 p-2 border border-gray-300 rounded mb-4"
          >
            <option value="">All Country</option>
            {allCountry.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="p-8 justify-center grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {filteredTeams.map((item) => (
          <Link to={`/our-team/${item.id}`}>

          <div className="bg-white rounded-2xl shadow-xl p-6" key={item.id}>
            <div className="flex flex-row pb-2 justify-center">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-auto h-60 rounded-lg object-cover"
                />
              </div>
              <div className="p-2 m-2 flex justify-center text-center items-center flex-col">
                <div className="text-3xl font-bold text-gray-800">
                  {item.name}
                </div>
                <div className="text-gray-600">{item.position}</div>
                <div className="flex flex-wrap justify-center mt-2 gap-3">
                  {item.skills.map((skill) => (
                    <div className="text-white px-2 text-sm font-bold bg-blue-400 rounded-lg">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
           
          </div>
          </Link>
        ))}
      </div>
    </ContainerCol>
  );
}
