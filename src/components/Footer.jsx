export default function Footer(){
    return(
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
                    <div className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                        Tentang Kami
                    </div>
                    <div className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                        Karir
                    </div>
                </div>
                <div id="menu-2" className="flex flex-col gap-1">
                <div className="font-bold mb-3">Kontak</div>
                    <div className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                        Bantuan/FAQ
                    </div>
                    <div className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                        Kontak Kami
                    </div>
                </div>
                <div id="menu-3" className="flex flex-col gap-1">
                <div className="font-bold mb-3">Lainnya</div>
                    <div className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                        Artikel
                    </div>
                    <div className="text-gray-500 hover:cursor-pointer hover:text-secondary">
                        Review dan Umpan Balik
                    </div>
                    <div className="text-gray-500 hover:cursor-pointer hover:text-secondary ">
                        Katalog
                    </div>
                </div>
            </div>
          </div>
  
          <div className="text-center text-gray-500 text-sm mb-10">
            All Right Reserved@FlyNix
          </div>
        </div>
      </footer>
    )
}

