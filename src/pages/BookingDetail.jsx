import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { GiGymBag } from "react-icons/gi";
import { BiWifi } from "react-icons/bi";
import { BsBuildingsFill } from "react-icons/bs";
import { GiBusDoors } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiCalendarAlt } from "react-icons/bi";
import { BsFillAirplaneFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import flightData from "../assets/data/products/tickets.json";
import { useParams } from "react-router-dom";
import { ContainerCol } from "../components/Container";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

export default function BookingDetail() {
  const { id } = useParams();
  const flightDataDetail = flightData.find((item) => item.id === id);

  return (
    <div className="min-h-screen">
      <ContainerCol>
        <Header title="Pesan Tiket" />
        <div className="flex flex-row items-center w-auto">
        <BackButton to="/booking"/>
        </div>
        {flightDataDetail ? (
          <>
            <div className="flex flex-row max-h-[10vh]">
              <div className="flex items-center rounded-s-lg justify-center text-white px-3 py-2 bg-primary">
                {flightDataDetail.flightType}
              </div>
              <div className="rounded-e-lg px-3 py-2 border-s-10 border-s-secondary bg-gray-200 flex flex-row gap-3">
                <div className="flex items-center gap-2">
                  <MdFlightTakeoff className=" text-3xl" />
                  <span>{flightDataDetail.origin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineArrowRight className=" text-3xl" />
                </div>
                <div className="flex items-center gap-2">
                  <MdFlightLand className=" text-3xl" />
                  <span>{flightDataDetail.destination}</span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-2xl p-5">
              <div className="flex flex-wrap gap-10">
                <p className="font-medium flex flex-row gap-3 items-center">
                  <BsFillAirplaneFill className="text-3xl text-gray-500" />
                  <span className="text-primary font-semibold">
                    {flightDataDetail.aircraftType}
                  </span>
                </p>
                <p className="font-medium flex flex-row gap-3 items-center">
                  <BiCalendarAlt className="text-3xl text-gray-500" />
                  <span className="text-primary font-semibold">
                    {flightDataDetail.departureDate}
                  </span>
                </p>
                <p className="font-medium flex flex-row gap-3 items-center">
                  <div className="relative p-2">
                    <MdFlightTakeoff className="text-gray-500 text-3xl" />
                    <AiOutlineClockCircle className="text-xl absolute right-0 top-1 text-gray-500" />
                  </div>
                  <span className="text-primary font-semibold">
                    {flightDataDetail.boardingTime}
                  </span>
                </p>
                <p className="font-medium flex flex-row gap-3 items-center">
                  <div className="relative p-2">
                    <MdFlightLand className="text-gray-500 text-3xl" />
                    <AiOutlineClockCircle className="text-xl absolute right-0 top-1 text-gray-500" />
                  </div>
                  <span className="text-primary font-semibold">
                    {flightDataDetail.arrivalTime}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-3 my-5">
                {flightDataDetail.classes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center self-start"
                  >
                    <div className="bg-primary rounded-t-lg text-sm p-2 text-white flex flex-col min-w-25 self-start text-center">
                      <div className="text-white">{item.classType}</div>
                    </div>
                    <div className="flex flex-wrap bg-gray-200 justify-start w-full p-2 gap-5">
                      <p className="font-medium flex flex-row gap-3 items-center">
                        <GiBusDoors className="text-3xl text-gray-500" />
                        <span className="text-primary font-semibold">
                          {item.gate}
                        </span>
                      </p>
                      <p className="font-medium flex flex-row gap-3 items-center">
                        <BsBuildingsFill className="text-3xl text-gray-500" />
                        <span className="text-primary font-semibold">
                          {item.terminal}
                        </span>
                      </p>
                      <p className="font-medium flex flex-row gap-3 items-center">
                        <BiWifi className="text-3xl text-gray-500" />
                        <span className="text-primary font-semibold">
                          {item.wifiAvailable ? "Wifi" : "Non-Wifi"}
                        </span>
                      </p>
                      <p className="font-medium flex flex-row gap-3 items-center">
                        <GiGymBag className="text-3xl text-gray-500" />
                        <span className="text-primary font-semibold">
                          Max {item.maxBaggage}
                        </span>
                      </p>
                      <p className="font-medium flex flex-row gap-3 items-center">
                        <RiRefund2Line className="text-3xl text-gray-500" />
                        <span className="text-primary font-semibold">
                          {item.refundable ? "Bisa Refund" : "Non-Refund"}
                        </span>
                      </p>
                      <p className="font-medium flex flex-row gap-3 items-center">
                        <MdOutlineAirlineSeatReclineNormal className="text-3xl text-gray-500" />
                        <span className="text-primary font-semibold">
                          {item.seatAvailable} Orang
                        </span>
                      </p>
                      {/* Total Fare + Button */}
                      <div className="flex flex-row items-center gap-4">
                        <p className="font-medium flex flex-row gap-3 items-center">
                          <FaMoneyBillWaveAlt className="text-3xl text-gray-500" />
                          <span className="text-primary font-semibold">
                            Rp{item.totalFare.toLocaleString("id-ID")}
                          </span>
                        </p>
                        <button className="bg-primary hover:cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-primary/90">
                          Pesan Sekarang
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-grow flex justify-center items-center w-full">
            <div className="text-gray-400 text-2xl text-center">
              Data tidak ditemukan!
            </div>
          </div>
        )}
      </ContainerCol>
    </div>
  );
}
