import { BiChevronRight } from "react-icons/bi"; 
import { useEffect, useState } from "react";
import { ContainerCol } from "../components/Container";
import Header from "../components/Header";
import { supabaseService } from "../services/supabaseService";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";

export default function Faq() {
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFaq() {
      setLoading(true);
      setError("");
      try {
        const data = await supabaseService({
          table: "faq",
          method: "get",
        });
        setFaq(data);
      } catch (err) {
        setError(
          err.message || "Gagal mengambil data FAQ. Silakan coba lagi."
        );
      } finally {
        setLoading(false);
      }
    }
    fetchFaq();
  }, []);

  return (
    <ContainerCol>
      <Header title="Pertanyaan Yang Sering Ditanyakan" />
      {loading && <LoadingSpinner />}
      {error && <AlertBox type="error">{error}</AlertBox>}
      {!loading && !error && (
        <div className="w-full max-w-screen mb-20">
          {faq.map((f, i) => (
            <div
              key={i}
              className="collapse bg-base-100 border border-base-300 mb-2"
            >
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={i === 0}
              />
              <div className="collapse-title font-semibold">{f.question}</div>
              <div className="collapse-content flex items-center">
                <BiChevronRight className="text-2xl me-2"/>{f.answer}
              </div>
            </div>
          ))}
        </div>
      )}
    </ContainerCol>
  );
}