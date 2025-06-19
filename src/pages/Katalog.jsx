import { useEffect, useState } from "react";
import { supabaseService } from "../services/supabaseService";
import { ContainerCol } from "../components/Container";
import Header from "../components/Header";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";

// Komponen grid gambar
function FotoGrid({ fotoList }) {
    if (!fotoList.length) return null;
    return (
        <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {fotoList.map((item) => (
                    <>
                    <div key={item.id} className="relative rounded-2xl shadow-lg bg-white overflow-hidden">
                        {/* Container berukuran tetap */}
                            <img
                                src={item.link}
                                key={item.id}
                                alt="Promo Maskapai"
                                className="w-full h-56 object-cover rounded-2xl transition-all duration-500 delay-200 ease-in-out"
                            />
                        <div className="absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white">
                            Foto
                        </div>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-2 left-2 text-primary underline text-xs font-medium bg-white/80 px-2 py-1 rounded"
                        >
                            Lihat Sumber
                        </a>
                    </div>
                    </>
                ))}
            </div>
        </div>
    );
}


// Komponen daftar video
function VideoList({ videoList }) {
    if (!videoList.length) return null;
    return (
        <div>
            <div className="flex items-center mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500 text-white mr-2">
                    Video
                </span>
                <span className="text-gray-700 font-medium">Promo Video Maskapai</span>
            </div>
            <div className="flex flex-wrap gap-6 pb-2">
                {videoList.map((item) => (
                    <div
                        key={item.id}
                        className="min-w-[340px] max-w-[400px] flex-shrink-0 rounded-2xl p-3 shadow-lg bg-white"
                    >
                        {item.link.includes("youtube.com") || item.link.includes("youtu.be") ? (
                            <iframe
                                src={
                                    item.link.includes("watch?v=")
                                        ? item.link.replace("watch?v=", "embed/")
                                        : item.link.replace("youtu.be/", "youtube.com/embed/")
                                }
                                title="Promo Video"
                                className="w-full rounded-lg mb-2 aspect-video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <video
                                src={item.link}
                                controls
                                className="w-full rounded-lg mb-2"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Katalog() {
    const [katalog, setKatalog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchKatalog() {
            setLoading(true);
            setError("");
            try {
                const data = await supabaseService({
                    table: "katalog",
                    method: "get",
                });
                setKatalog(data);
            } catch (err) {
                setError(
                    err.message || "Gagal mengambil data katalog. Silakan coba lagi."
                );
            } finally {
                setLoading(false);
            }
        }
        fetchKatalog();
    }, []);

    const fotoList = katalog.filter((item) => item.tipe === "foto");
    const videoList = katalog.filter((item) => item.tipe === "video");

    return (
        <ContainerCol>
            <div className="mb-10">
                <Header title="Katalog Promo Maskapai" />
                <p className="text-gray-500 mb-3 text-lg">
                    Temukan berbagai promo menarik maskapai penerbangan, baik dalam bentuk foto maupun video.
                </p>
                {loading && <LoadingSpinner />}
                {error && <AlertBox type="error">{error}</AlertBox>}
                {!loading && !error && katalog.length === 0 && (
                    <EmptyState message="Belum ada data katalog promo maskapai." />
                )}
                {!loading && !error && (
                    <>
                        <FotoGrid fotoList={fotoList} />
                        <VideoList videoList={videoList} />
                    </>
                )}
            </div>
        </ContainerCol>
    );
}