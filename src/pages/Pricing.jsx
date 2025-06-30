import { useEffect, useState } from "react";
import { supabaseService } from "../services/supabaseService";
import EmptyState from "../components/EmptyState";
import AlertBox from "../components/AlertBox";
import LoadingSpinner from "../components/LoadingSpinner";
import {ContainerCol} from "../components/Container";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

function ServiceList({ services }) {
    if (!services) return null;
    return (
        <ul className="mt-2 space-y-1">
            {services.split(",").map((srv, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✔️</span>
                    {srv.trim()}
                </li>
            ))}
        </ul>
    );
}

export default function Pricing() {
    const [pricing, setPricing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchPricing() {
            setLoading(true);
            setError("");
            try {
                const data = await supabaseService({
                    table: "pricing",
                    method: "get",
                });
                setPricing(data);
            } catch (err) {
                setError(
                    err.message || "Gagal mengambil data pricing. Silakan coba lagi."
                );
            } finally {
                setLoading(false);
            }
        }
        fetchPricing();
    }, []);

    return (
        <ContainerCol>
            <div className="mb-10">

            <Header title="Daftar Harga Tiket Maskapai" />
            <p className="text-gray-500 mb-3 text-lg bg-sc">
                Temukan kelas penerbangan terbaik sesuai kebutuhan Anda. Semua harga sudah termasuk layanan eksklusif dari maskapai!
            </p>
            {loading && <LoadingSpinner />}
            {error && <AlertBox type="error">{error}</AlertBox>}
            {!loading && !error && pricing.length === 0 && (
                <EmptyState message="Belum ada data harga tiket maskapai." />
            )}
            {!loading && !error && pricing.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pricing.map((item) => (
                        <NavLink
                        to={`/pricing/${item.id}`}
                            key={item.id}
                            className="border rounded-2xl p-6 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-200"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className={`px-3 py-1 rounded-full text-md font-semibold bg-primary text-white`}>
                                    {item.type}
                                </span>
                                <span className="text-2xl font-bold text-secondary">
                                    Rp{Number(item.price).toLocaleString("id-ID")}/km
                                </span>
                                
                            </div>
                            <div className="text-gray-600 text-sm mb-2">
                                <span className="font-medium">Layanan:</span>
                                <ServiceList services={item.services} />
                            </div>
                            <div className="text-red-400 text-xs">*Dapat berubah sewaktu-waktu</div>
                        </NavLink>
                    ))}
                </div>
            )}
            </div>
        </ContainerCol>
    );
}