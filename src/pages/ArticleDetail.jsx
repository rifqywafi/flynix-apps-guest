import { ContainerCol } from "../components/Container";
import articles from "./../assets/data/articles/articles.json";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
export default function ArticleDetail() {
  const { id } = useParams();
  const articleDet = articles.find((a) => a.id === parseInt(id));
  return articleDet ? (
    <ContainerCol>
      <div className="min-h-screen">
        <BackButton to="/article"/>
        <img
          src={`${articleDet.imageUrl}?auto=format&fit=crop&w=800&q=80`}
          alt={articleDet.title}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-2 text-primary">
          {articleDet.title}
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Oleh <span className="font-semibold">{articleDet.author}</span> •{" "}
          {new Date(articleDet.date).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          {articleDet.content}
        </p>
      </div>
    </ContainerCol>
  ) : (
    <ContainerCol>
      <div className="text-center flex flex-col gap-5">
        <h2 className="text-xl font-semibold text-gray-400">
          Artikel tidak ditemukan
        </h2>
        <Link
          to="/article"
          className="mt-4 bg-primary text-white px-4 py-2 rounded"
        >
          Kembali ke Artikel
        </Link>
      </div>
    </ContainerCol>
  );
}
