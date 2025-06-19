import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mx-35 xl:mt-0 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-plaster font-bold text-primary">FlyNix</h1>
            <div className="text-gray-500 text-[12px] mt-5">PILIHAN TERBAIK UNTUK LIBURANMU</div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 text-gray-700 text-sm">
            <div id="menu-1" className="flex flex-col gap-1 ">
              <div className="font-bold mb-3">Perusahaan</div>
              <Link to="/about-us" className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                Tentang Kami
              </Link>
              <Link to="/our-team" className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                Tim Kami
              </Link>
              <Link to="/career" className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                Karir
              </Link>
            </div>
            <div id="menu-2" className="flex flex-col gap-1">
              <div className="font-bold mb-3">Kontak & Bantuan</div>
              <Link to="/faq" className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                Bantuan/FAQ
              </Link>
              <Link to="/contact-us" className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                Hubungi Kami
              </Link>
            </div>
            <div id="menu-3" className="flex flex-col gap-1">
              <div className="font-bold mb-3">Informasi</div>
              <Link to="/katalog" className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                Katalog
              </Link>
              <Link to="/pricing" className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                Daftar Harga
              </Link>
              <Link to="/article" className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                Artikel
              </Link>
            </div>
            <div id="menu-4" className="flex flex-col gap-1">
              <div className="font-bold mb-3">Lainnya</div>
              <Link to="/booking" className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                Pesan Tiket
              </Link>
              <Link to="/user-review" className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                Reviews
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mb-10">
          All Right Reserved@FlyNix
        </div>
      </div>
    </footer>
  );
}