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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-20">
          {faq.map((f, i) => (
            <CardFaq key={i} question={f.question} answer={f.answer} />
          ))}
        </div>
      )}
    </ContainerCol>
  );
}

function CardFaq({ question, answer }) {
  return (
    <div id="card-faq" className="max-w-full flex flex-col">
      <div className="bg-primary font-volkhov text-white p-4 text-xl rounded-lg w-fit">
        {question}
      </div>
      <div className="bg-white p-3 items-center py-8 shadow-lg gap-5 flex flex-row rounded-lg ml-25">
        <div className="text-secondary text-4xl">{">"}</div>
        {answer}
      </div>
    </div>
  );
}