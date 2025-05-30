export default function ErrorPage({ code }) {
  let img = "images/400.png", desc = "An Unknown Error Ocurred", title = "Unknown Error" 
  switch(code){
    case 400:
      desc = "Pastikan anda mengisi data sesuai dengan yang diminta"
      title = "PERMINTAAN HTTP TIDAK SESUAI"
    break;
    case 401:
      img = "images/401.png"
      title= "TIDAK ADA AKSES"
      desc = "Kamu tidak memiliki akses untuk halaman ini!"
    break
    case 403:
      img = "images/403.png"
      title= "TIDAK ADA AKSES KE SERVER"
      desc = "Silahkan hubungi pemilik situs ini untuk mengetahui lebih lanjut"
    break
    case 404:
      img = "images/404.png"
      title = "HALAMAN TIDAK DITEMUKAN"
      desc= "Pastikan kamu memasukkan alamat halaman dengan benar!"
    break
    default:
  }
  return (
    <div className="flex justify-center items-center gap-30 lg:flex-row h-screen">
        <div id="error-image" className="flex flex-col">
            <img src={img} alt="" className="w-auto max-h-[75vh]" />
        </div>
        <div id="error-section" className="flex flex-col justify-center text-center">
            <div className="text-9xl font-bold text-blue-600 mb-4">{code}</div>
            <div className="font-volkhov text-3xl">{title}</div>
            <div className="text-gray-500 text-xl">{desc}</div>
        </div>
    </div>
  );
}
