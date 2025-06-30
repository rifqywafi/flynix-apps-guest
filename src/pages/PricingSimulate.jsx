import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../services/supabaseService";
import Header from "../components/Header";
import { ContainerCol } from "../components/Container";
import BackButton from "../components/BackButton";

export default function PricingSimulate() {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);
  const [distance, setDistance] = useState("");
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPlan();
  }, []);

  const fetchPlan = async () => {
    setLoading(true);
    try {
      const data = await getById("pricing", id);
      setPlan(data);
    } catch (err) {
      alert("Gagal mengambil data harga.");
      console.error("Error fetching plan:", err);
    }
    setLoading(false);
  };

  const handleSimulate = (e) => {
    e.preventDefault();
    if (!plan || !distance) {
      setTotal(null);
      return;
    }
    const pricePerKm = Number(plan.price);
    const km = Number(distance);
    if (isNaN(pricePerKm) || isNaN(km)) {
      setTotal(null);
      return;
    }
    setTotal(pricePerKm * km);
  };

  if (loading)
    return (
      <ContainerCol>
        <div className="p-8 text-center">Loading...</div>
      </ContainerCol>
    );
  if (!plan)
    return (
      <ContainerCol>
        <div className="p-8 text-center text-red-500">
          Paket tidak ditemukan.
        </div>
        <BackButton to={"/pricing"} />
      </ContainerCol>
    );

  return (
    <ContainerCol>
      <Header title={"Simulasi Harga " + plan.type} />
      <BackButton to={"/pricing"} />
      <form
        onSubmit={handleSimulate}
        className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto mb-8"
      >
        <div className="mb-4">
          <div className="max-w-md mt-3 mb-4">
            <h2 className="text-lg font-semibold mb-2">Layanan Paket:</h2>
            <div className="text-gray-600 text-sm">{plan.services}</div>
          </div>
          <label className="block mb-1 font-medium">Harga per km</label>
          <input
            type="text"
            className="w-full border rounded p-2 bg-gray-100"
            value={`Rp ${Number(plan.price).toLocaleString()}`}
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Jarak (km)</label>
          <input
            type="number"
            min="1"
            className="w-full border rounded p-2"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Hitung Harga
        </button>

        {total !== null && (
          <div className="max-w-md mt-5 mx-auto bg-green-100 border border-green-300 rounded p-4 text-lg text-green-800">
            Total Harga:{" "}
            <span className="font-bold">Rp {total.toLocaleString()}</span>
          </div>
        )}
      </form>
    </ContainerCol>
  );
}
