import { ContainerCol } from "../components/Container";
import articles from "./../assets/data/articles/articles.json";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Articles() {
  return (
    <ContainerCol>
      <div className="max-w-5xl mx-35 px-4 py-8">
        <Header title="Daftar Artikel" />
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map(({ id, title, author, date, imageUrl }) => (
            <Link to={`/article/${id}`}>
              <article
                key={id}
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
      </div>
    </ContainerCol>
  );
}
