import { useState } from "react";
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
import AlertBox from "../components/AlertBox";

export default function BookingDetail() {
  const { id } = useParams();
  const flightDataDetail = flightData.find((item) => item.id === id);

  // Modal state
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  // Form state
  const [form, setForm] = useState({
    name: "",
    seats: "",
    children: "",
    baggage: "",
  });
  const [errors, setErrors] = useState({});

  // Reset form when modal closed
  const handleCloseOrderModal = () => {
    setShowOrderModal(false);
    setForm({ name: "", seats: "", children: "", baggage: "" });
    setErrors({});
    setSelectedClass(null);
  };

  // Open order modal
  const handleOrder = (item) => {
    setSelectedClass(item);
    setShowOrderModal(true);
    setForm({ name: "", seats: "", children: "", baggage: "" });
    setErrors({});
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Nama wajib diisi";
    const seats = Number(form.seats);
    const children = Number(form.children);
    const baggage = Number(form.baggage);

    if (!form.seats) newErrors.seats = "Jumlah kursi wajib diisi";
    else if (seats < 1) newErrors.seats = "Minimal 1 kursi";
    else if (seats > selectedClass.seatAvailable)
      newErrors.seats = `Maksimal ${selectedClass.seatAvailable} kursi`;

    if (form.baggage === "") newErrors.baggage = "Jumlah bagasi wajib diisi";
    else if (baggage < 0) newErrors.baggage = "Bagasi tidak boleh negatif";
    else if (baggage > parseInt(selectedClass.maxBaggage))
      newErrors.baggage = `Maksimal ${selectedClass.maxBaggage} bagasi`;

    if (form.children === "") newErrors.children = "Jumlah anak-anak wajib diisi";
    else if (children < 0) newErrors.children = "Tidak boleh negatif";
    else if (children >= seats)
      newErrors.children = "Jumlah anak-anak tidak boleh sama atau lebih dari kursi (orang dewasa)";

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors({ ...v });
    if (Object.keys(v).length > 0) return;
    setShowOrderModal(false);
    setShowSummaryModal(true);
  };

  // Calculate total price
  const getTotal = () => {
    if (!selectedClass) return 0;
    const seats = Number(form.seats);
    const children = Number(form.children);
    const adult = seats - children;
    const price = selectedClass.totalFare;
    return adult * price + children * Math.round(price * 0.6);
  };

  return (
    <div className="min-h-screen">
      <ContainerCol>
        <Header title="Pesan Tiket" />
        <div className="flex flex-row items-center w-auto">
          <BackButton to="/booking" />
        </div>
        {flightDataDetail ? (
          <>
            <div className="flex flex-row max-h-[10vh]">
              <div className="flex items-center rounded-s-lg justify-center text-white px-3 py-2 bg-primary">
                {flightDataDetail.flightType}
              </div>
              <div className="rounded-e-lg px-3 py-2 border-s-10 border-s-secondary bg-ternary flex flex-row gap-3">
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
                    <div className="flex flex-wrap bg-ternary justify-start w-full p-2 gap-5">
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
                        <button
                          className="bg-primary hover:cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-primary/90"
                          onClick={() => handleOrder(item)}
                        >
                          Pesan Sekarang
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Pemesanan DaisyUI */}
            <input type="checkbox" id="order-modal" className="modal-toggle" checked={showOrderModal} readOnly />
            <div className={`modal ${showOrderModal ? "modal-open" : ""}`}>
              <div className="modal-box">
                <h2 className="font-bold text-lg mb-4 text-primary">Form Pemesanan</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nama Pemesan</label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Masukkan nama pemesan"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && (
                      <AlertBox type="error">{errors.name}</AlertBox>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Jumlah Kursi</label>
                    <input
                      type="number"
                      className="input input-bordered w-full"
                      placeholder={`Maksimal ${selectedClass?.seatAvailable} kursi`}
                      value={form.seats}
                      onChange={e => setForm({ ...form, seats: e.target.value })}
                    />
                    {errors.seats && (
                      <AlertBox type="error">{errors.seats}</AlertBox>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Jumlah Anak-anak</label>
                    <input
                      type="number"
                      className="input input-bordered w-full"
                      placeholder="Jumlah anak-anak (jika ada)"
                      value={form.children}
                      onChange={e => setForm({ ...form, children: e.target.value })}
                    />
                    {errors.children && (
                      <AlertBox type="error">{errors.children}</AlertBox>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Jumlah Bagasi (kg)</label>
                    <input
                      type="number"
                      className="input input-bordered w-full"
                      placeholder={`Maksimal ${selectedClass?.maxBaggage} kg berat bagasi`}
                      value={form.baggage}
                      onChange={e => setForm({ ...form, baggage: e.target.value })}
                    />
                    {errors.baggage && (
                      <AlertBox type="error">{errors.baggage}</AlertBox>
                    )}
                  </div>
                  <div className="modal-action">
                    <button
                      type="button"
                      className="btn"
                      onClick={handleCloseOrderModal}
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Lanjutkan
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Modal Ringkasan DaisyUI */}
            <input type="checkbox" id="summary-modal" className="modal-toggle" checked={showSummaryModal} readOnly />
            <div className={`modal ${showSummaryModal ? "modal-open" : ""}`}>
              <div className="modal-box p-0 bg-transparent shadow-none max-w-lg">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
                  {/* Ticket Header */}
                  <div className="bg-primary text-white px-6 py-4 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg text-secondary">FlyNix</div>
                      <div className="font-bold text-xl">Tiket Pesawat</div>
                      <div className="text-xs">{flightDataDetail?.flightType} - {selectedClass?.classType}</div>
                    </div>
                    <BsFillAirplaneFill className="text-3xl opacity-60" />
                  </div>
                  {/* Ticket Body */}
                  <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-semibold text-gray-700">Nama Pemesan</div>
                      <div className="mb-2">{form.name}</div>
                      <div className="font-semibold text-gray-700">Dari</div>
                      <div className="mb-2">{flightDataDetail?.origin}</div>
                      <div className="font-semibold text-gray-700">Ke</div>
                      <div className="mb-2">{flightDataDetail?.destination}</div>
                      <div className="font-semibold text-gray-700">Tanggal</div>
                      <div className="mb-2">{flightDataDetail?.departureDate}</div>
                      <div className="font-semibold text-gray-700">Jam Berangkat</div>
                      <div className="mb-2">{flightDataDetail?.boardingTime}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">Jumlah Kursi</div>
                      <div className="mb-2">{form.seats}</div>
                      <div className="font-semibold text-gray-700">Jumlah Anak-anak</div>
                      <div className="mb-2">{form.children}</div>
                      <div className="font-semibold text-gray-700">Jumlah Bagasi</div>
                      <div className="mb-2">{form.baggage} kg</div>
                      <div className="font-semibold text-gray-700">Harga per Kursi</div>
                      <div className="mb-2">Rp{selectedClass?.totalFare.toLocaleString("id-ID")}</div>
                      <div className="font-semibold text-gray-700">Harga Anak-anak (diskon 40%)</div>
                      <div className="mb-2">Rp{selectedClass ? Math.round(selectedClass.totalFare * 0.6).toLocaleString("id-ID") : 0}</div>
                    </div>
                  </div>
                  {/* Ticket Divider */}
                  <div className="flex items-center justify-between px-6">
                    <div className="h-6 w-6 bg-white rounded-full -ml-3 border border-gray-200"></div>
                    <div className="flex-1 border-t border-dashed border-gray-300"></div>
                    <div className="h-6 w-6 bg-white rounded-full -mr-3 border border-gray-200"></div>
                  </div>
                  {/* Ticket Footer */}
                  <div className="px-6 py-4 bg-gray-50 flex flex-col items-center">
                    <div className="font-bold text-lg mb-2">
                      Total Harga: <span className="text-primary">Rp{getTotal().toLocaleString("id-ID")}</span>
                    </div>
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => setShowSummaryModal(false)}
                    >
                      Tutup
                    </button>
                  </div>
                </div>
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