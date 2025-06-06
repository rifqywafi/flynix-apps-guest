import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import careers from "../assets/data/careers/careers.json";

export default function CareerDetail() {
  const { id } = useParams();

  // Cari data berdasarkan ID
  const selectedJob = careers.find((job) => job.id === parseInt(id));

  // Jika ID tidak ditemukan
  if (!selectedJob) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        Lowongan tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">

    <section className="px-6  py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-primary mb-8 text-center">
        {selectedJob.position}
      </h1>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 space-y-4">
        <div className="flex flex-wrap justify-between text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            {selectedJob.location}
          </span>
          <span className="flex items-center gap-2">
            <FaBriefcase className="text-primary" />
            {selectedJob.type}
          </span>
        </div>

        <p className="text-gray-700">{selectedJob.description}</p>

        <div>
          <h3 className="text-md font-semibold text-primary mb-2">
            Persyaratan:
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {selectedJob.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="bg-primary hover:bg-opacity-90 hover:cursor-pointer transition text-white font-semibold px-6 py-2 rounded-full shadow">
            Lamar Sekarang
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}
