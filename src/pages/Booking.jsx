import { BsChevronCompactRight } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import provincesData from "../assets/data/products/provinces.json";
import { ContainerCol } from "../components/Container";
import Header from "../components/Header";
import flightData from "../assets/data/products/tickets.json";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// ...existing code...

export default function Booking() {
  const location = useLocation();
  const state = location.state || {};

  const [flightTypeFilter, setFlightTypeFilter] = useState(state.flightType || "");
  const [originFilter, setOriginFilter] = useState(state.origin || "");
  const [destinationFilter, setDestinationFilter] = useState(state.destination || "");
  const [departureDateFilter, setDepartureDateFilter] = useState("");
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    if (flightTypeFilter === "Domestik") {
      setProvinces(provincesData);
    }
  }, [flightTypeFilter]);

  const isVisible = flightData.filter((flight) => {
    const matchOrigin = originFilter
      ? flight.origin.toLowerCase().includes(originFilter.toLowerCase())
      : true;
    const matchDestination = destinationFilter
      ? flight.destination.toLowerCase().includes(destinationFilter.toLowerCase())
      : true;
    const matchDepartureDate = departureDateFilter
      ? flight.departureDate === departureDateFilter
      : true;
    const matchFlightType = flightTypeFilter
      ? flight.flightType.toLowerCase() === flightTypeFilter.toLowerCase()
      : true;

    return (
      matchOrigin && matchDestination && matchDepartureDate && matchFlightType
    );
  });


  return (
    <ContainerCol>
      <Header title="Pesan Tiket" />
      <div className="min-h-[75vh] flex flex-col items-center gap-6 justify-center mb-20">
        <div className="w-[75vw]">
          <select
            value={flightTypeFilter}
            onChange={(e) => {
              setFlightTypeFilter(e.target.value);
              setOriginFilter("");
              setDestinationFilter("");
            }}
            className="p-2 border-2 rounded-lg w-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-0 hover:cursor-pointer"
          >
            <option value="" disabled>
              Pilih Tipe Penerbangan
            </option>
            <option value="Domestik">Domestik</option>
            <option value="Internasional">Internasional</option>
          </select>
        </div>
        <div className="flex w-[75vw] flex-col md:flex-row gap-4 mb-6">
          {flightTypeFilter && (
            <>
              {flightTypeFilter === "Domestik" ? (
                <>
                  <select
                    value={originFilter}
                    onChange={(e) => setOriginFilter(e.target.value)}
                    className="p-2 border w-full rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-0 hover:cursor-pointer"
                  >
                    <option value="">Pilih Provinsi Asal</option>
                    {provinces.map((prov) => (
                      <option key={prov.id} value={prov.name}>
                        {prov.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={destinationFilter}
                    onChange={(e) => setDestinationFilter(e.target.value)}
                    className="p-2 border w-full rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-0"
                  >
                    <option value="">Pilih Provinsi Tujuan</option>
                    {provinces.map((prov) => (
                      <option key={prov.id} value={prov.name}>
                        {prov.name}
                      </option>
                    ))}
                  </select>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Asal (misal: Singapore)"
                    value={originFilter}
                    onChange={(e) => setOriginFilter(e.target.value)}
                    className="p-2 w-full border rounded-lg bg-white placeholder-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-0 hover:cursor-pointer"
                  />
                  <input
                    type="text"
                    placeholder="Tujuan (misal: Tokyo)"
                    value={destinationFilter}
                    onChange={(e) => setDestinationFilter(e.target.value)}
                    className="p-2 border rounded-lg bg-white placeholder-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-0 hover:cursor-pointer"
                  />
                </>
              )}
              <input
                type="date"
                value={departureDateFilter}
                onChange={(e) => setDepartureDateFilter(e.target.value)}
                className="p-2 border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-0 hover:cursor-pointer"
              />
            </>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-10">
          {isVisible.length > 0 ? (
            <>
              {isVisible.map((flight, index) => (
                <div
                  key={index}
                  className="bg-white border-s-4 border-s-secondary rounded-e-2xl shadow-2xl px-6 pb-3 mb-6"
                >
                  <div className="flex flex-row gap-4">
                    <div>
                      <div className="flex flex-row gap-4 my-2 items-center rounded-md px-3 py-1 bg-ternary">
                        <AiFillHome className="text-primary" />
                        {flight.flightType}
                      </div>
                      <p className="font-medium">
                        Tipe Pesawat:{" "}
                        <span className="text-secondary font-semibold">
                          {flight.aircraftType}
                        </span>
                      </p>
                      <p className="font-medium">
                        Rute:{" "}
                        <span className="text-secondary font-semibold">
                          {flight.route}
                        </span>
                      </p>
                      <p className="font-medium">
                        Tanggal Berangkat:{" "}
                        <span className="text-secondary font-semibold">
                          {flight.departureDate}
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-3 mt-3">
                        {flight.classes.map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-primary rounded-md text-sm px-2 py-1 text-white flex flex-col text-center"
                          >
                            <div className="text-ternary">{item.classType}</div>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <Link to={`/booking/${flight.id}`}>
                        <BsChevronCompactRight className="text-6xl text-primary hover:text-gray-300 hover:cursor-pointer" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className="text-center text-gray-500">
              Tidak ada hasil yang sesuai dengan filter yang dipilih.
            </p>
          )}
        </div>
      </div>
    </ContainerCol>
  );
}