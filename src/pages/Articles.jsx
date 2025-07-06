import { useState, useEffect } from "react";
import { ContainerCol } from "../components/Container";
import articles from "./../assets/data/articles/articles.json";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const ARTICLES_PER_PAGE = 4;

export default function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKategori, setSelectedKategori] = useState("Semua");
  const [loading, setLoading] = useState(false);
  const [kategoriList, setKategoriList] = useState(["Semua"]);

  // Ambil kategori unik dari articles.json saat mount
  useEffect(() => {
    const kategoriSet = new Set(articles.map((a) => a.kategori));
    setKategoriList(["Semua", ...Array.from(kategoriSet)]);
  }, []);

  // Filter articles by kategori
  const filteredArticles =
    selectedKategori === "Semua"
      ? articles
      : articles.filter((a) => a.kategori === selectedKategori);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIdx = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(startIdx, startIdx + ARTICLES_PER_PAGE);

  const handlePageChange = (page) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 400); // Simulasi loading
  };

  const handleKategoriChange = (kategori) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedKategori(kategori);
      setCurrentPage(1);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 400); // Simulasi loading
  };

  return (
    <ContainerCol>
      <div className="">
        <Header title="Daftar Artikel" />
        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 mb-6">
          {kategoriList.map((kategori) => (
            <button
              key={kategori}
              className={`px-4 py-1 rounded-full border cursor-pointer ${
                selectedKategori === kategori
                  ? "bg-primary text-white border-primary"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-primary hover:text-white"
              } transition`}
              onClick={() => handleKategoriChange(kategori)}
              type="button"
            >
              {kategori}
            </button>
          ))}
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2">
              {currentArticles.map(({ id, title, author, date, imageUrl, kategori }) => (
                <Link to={`/article/${id}`} key={id} className="cursor-pointer">
                  <article
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    <img
                      src={`${imageUrl}?auto=format&fit=crop&w=600&q=80`}
                      alt={title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2 text-primary">
                        {title}
                      </h2>
                      <p className="text-xs inline-block px-2 py-1 bg-gray-200 rounded-full mb-2 text-gray-700">
                        {kategori}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        Oleh <span className="font-medium">{author}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(date).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
              <button
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                type="button"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`px-3 py-1 rounded cursor-pointer ${
                    currentPage === i + 1
                      ? "bg-primary text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                  type="button"
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                type="button"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </ContainerCol>
  );
}