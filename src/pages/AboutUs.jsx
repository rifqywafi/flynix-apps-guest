export default function AboutUs(){
      return (
    <div className="min-h-screen text-primary px-4 py-12 relative">
       <div className="absolute border-3 border-sides rounded-lg top-0 right-10 opacity-75 rotate-12 -z-10">
            <img src="images/about-us1.jpg" alt="" />
        </div>
       <div className="absolute  border-3 border-primary rounded-lg top-5 left-8 opacity-75 -rotate-18 -z-10">
            <img src="images/about-us2.jpg" alt="" />
        </div>
       <div className="absolute border-3 border-sides rounded-lg bottom-30 left-16 opacity-75 rotate-12 -z-10">
            <img src="images/about-us3.jpg" alt="" />
        </div>
       <div className="absolute border-3 border-primary rounded-lg bottom-39 right-16 opacity-75 rotate-18 -z-10">
            <img src="images/about-us4.jpg" alt="" />
        </div>
      <div className="max-w-4xl mx-auto text-center bg-white rouned-lg p-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Tentang FlyNix</h1>
        <p className="text-base leading-relaxed  mb-10">
          FlyNix adalah maskapai penerbangan modern yang berdedikasi untuk memberikan pengalaman terbang terbaik bagi seluruh pelanggan kami. 
          Dengan jaringan penerbangan domestik dan internasional yang luas, kami mengutamakan keselamatan, kenyamanan, dan pelayanan pelanggan yang unggul.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-primary  rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-white">Visi Kami</h2>
            <p className="text-sm text-white">
              Menjadi maskapai penerbangan pilihan utama di Asia Tenggara yang mengutamakan inovasi, kenyamanan, dan pelayanan pelanggan kelas dunia.
            </p>
          </div>
          <div className="bg-secondary rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-white mb-2">Misi Kami</h2>
            <ul className="text-sm text-white list-disc list-inside space-y-1">
              <li>Menyediakan layanan penerbangan yang aman dan efisien.</li>
              <li>Mengutamakan kepuasan dan kenyamanan pelanggan.</li>
              <li>Mendukung pengembangan teknologi dan keberlanjutan lingkungan.</li>
              <li>Membangun budaya kerja yang profesional dan ramah.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-sm ">
          <p>
            FlyNix berkomitmen untuk terus berkembang dan menjadi bagian dari kemajuan industri penerbangan nasional maupun internasional. 
            Terima kasih telah mempercayakan perjalanan Anda bersama kami.
          </p>
        </div>
      </div>
    </div>
  );
}
