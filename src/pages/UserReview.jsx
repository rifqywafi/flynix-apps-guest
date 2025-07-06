import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Header from "../components/Header";
import { ContainerCol } from "../components/Container";
import { supabaseService } from "../services/supabaseService";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";

export default function UserReview() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      setError("");
      try {
        const data = await supabaseService({
          table: "reviews",
          method: "get",
        });
        setReviews(data);
      } catch (err) {
        setError(
          err.message || "Gagal mengambil data review. Silakan coba lagi."
        );
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  return (
    <ContainerCol>
      <Header title="Review dari Pengguna" />
      <div id="user-review" className="flex flex-col gap-30 mb-20">
        <HeroReview
          img="/images/reviews/man3.png"
          review="Salah Satu Maskapai Penerbangan Terbaik di Dunia! Dengan lebih dari 100 penerbangan internasional per hari"
          name="albert"
          company="Apple"
        />
        {loading && <LoadingSpinner />}
        {error && <AlertBox type="error">{error}</AlertBox>}
        {!loading && !error && (
          <div className="grid lg:grid-cols-2 justify-center gap-10">
            {reviews.map((r) => (
              <ReviewsCard
                key={r.id}
                star={r.star}
                name={r.name}
                date={r.date}
                img={r.image}
                company={r.company}
                review={r.content}
              />
            ))}
          </div>
        )}
        <GiveReview />
      </div>
    </ContainerCol>
  );
}

function HeroReview({ img, review, name, company }) {
  return (
    <div id="hero-review-section" className="w-full">
      <div className="flex w-full max-w-screen-5xl justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex lg:flex-row lg:gap-10 items-center justify-center">
            <div id="hero-img" className=" z-10">
              <img src={img} alt="" className="h-auto w-[500px]" />
            </div>
            <div id="hero-review">
              <div className="text-primary text-2xl lg:text-7xl">❝</div>
              <div className="text-md lg:text-3xl text-gray-500 mb-5">
                {review}
              </div>
              <div className="font-opensans text-sm lg:text-xl font-bold">
                {name}
              </div>
              <div className="font-opensans font-light text-gray-400 text-sm lg:text-xl">
                {company}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewsCard({ star, date, review, img, name, company }) {
  return (
    <div id="card-review-section">
      <div className="flex w-full max-w-screen-5xl justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div id="review-star" className="text-secondary flex flex-row">
              {Array.from({ length: star }, (_, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
            <div id="review-date">
              <div className="">{date}</div>
            </div>
          </div>
          <div className="flex items-center justify-center mb-4">
            <div id="review" className="text-md lg:text-2xl">
              {review}
            </div>
          </div>
          <div className="flex items-center justify-start gap-6">
            <div id="reviewer-img" className="">
              <img
                src={img}
                alt=""
                className="w-[45px] h-[45px] lg:w-[75px] lg:h-[75px] object-cover rounded-full"
              />
            </div>
            <div id="reviewer" className="flex flex-col">
              <div id="reviewer-name" className="lg:text-lg font-bold">
                {name}
              </div>
              <div id="reviewer-company" className="lg:text-lg ">
                {company}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GiveReview() {
  return (
    <div id="give-review" className="w-full">
      <div className=" w-full max-w-screen-5xl justify-start">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full">
          <div
            id="give-review-title"
            className="text-3xl text-primary font-bold mb-3"
          >
            Kirim Umpan Balik Mu
          </div>
          <div id="give-review-desc" className="mb-3">
            Berdasarkan pengalamanmu, seberapa sulit kamu dapat mengakses layanan kami?
          </div>
          <div id="review-button-section" className="flex flex-col gap-5 mb-3">
            <div className="flex flex-row gap-5">
              <ReviewButton label={1} />
              <ReviewButton label={2} />
              <ReviewButton label={3} />
              <ReviewButton label={4} />
              <ReviewButton label={5} />
            </div>
            <div className="flex justify-between w-120">
              <div className="">Sangat Sulit</div>
              <div className="">Sangat Mudah</div>
            </div>
          </div>
          <div className="bg-secondary hover:shadow-2xl hover:cursor-pointer rounded-lg p-3 w-45 text-center text-white">
            Submit Feedback
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewButton({ label }) {
  return (
    <div className="border-gray-300 border-1 hover:bg-secondary hover:text-white hover:cursor-pointer rounded-lg px-8 py-2">
      {label}
    </div>
  );
}