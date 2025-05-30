export default function ArticleDetail(){
    return(
        <div className="article-detail">
            <Title content="Merayakan Hari Pariwisata Sedunia Penting untuk Kita Rayakan?"/>
            <Thumbnail img= "/src/assets/images/article1.jpg"/>
            <Content text='Pada Hari Pariwisata Sedunia, dunia memperingati pentingnya sektor pariwisata dalam mempererat hubungan lintas budaya dan mendorong pertumbuhan ekonomi global. Tahun ini, tema "Turisme dan Investasi Hijau" menyoroti peran penting aksesibilitas dan keberlanjutan dalam industri perjalanan. Malaysia Airlines, sebagai salah satu maskapai penerbangan utama Asia, berperan besar dalam mendukung pengembangan pariwisata global dengan menjembatani berbagai destinasi wisata, serta berinovasi dalam meningkatkan keselamatan penerbangan. Mari kita simak lima fakta menarik mengenai kontribusi Malaysia Airlines dalam memperkuat sektor pariwisata di tengah momentum perayaan ini.'/>
            <SubTitle content='Perjalanan Lintas Batas dalam Memahami Budaya dan Ekonomi Global'/>
            <Content text='Malaysia Airlines telah membuka peluang bagi wisatawan dari berbagai belahan dunia untuk menjelajahi keindahan Malaysia dan negara-negara di Asia Tenggara. Melalui jaringan penerbangan yang luas, maskapai ini menghubungkan berbagai kota besar seperti Kuala Lumpur, Tokyo, dan Sydney, sehingga memungkinkan pertukaran budaya dan pertumbuhan ekonomi.'/>
            <SubTitle content='Pentingnya Keselamatan Penerbangan'/>
            <Content text='Dalam konteks Hari Pariwisata Sedunia, keselamatan perjalanan menjadi perhatian utama. Malaysia Airlines terus memperbarui prosedur keselamatannya, mengadopsi teknologi terbaru untuk memastikan keamanan penumpang, termasuk sistem anti-tabrakan dan radar cuaca canggih. Langkah-langkah ini menciptakan kepercayaan bagi wisatawan untuk kembali bepergian dengan aman pasca-pandemi, mendukung pemulihan pariwisata global.'/>
            <SubTitle content='Inovasi Maskapai pada Wisata'/>
            <Content text='Malaysia Airlines tidak hanya memperhatikan keselamatan, tetapi juga inovasi dalam layanan untuk pengalaman perjalanan yang lebih baik. Mulai dari fasilitas di dalam pesawat hingga program loyalitas untuk wisatawan, maskapai ini terus berupaya meningkatkan kualitas perjalanan wisata, yang penting untuk mendukung sektor pariwisata global.'/>
            <Content text='Pada Hari Pariwisata Sedunia 2024, penting bagi kita untuk menghargai peran maskapai seperti Malaysia Airlines dalam membangun konektivitas global. Dengan inovasi dalam layanan penerbangan, promosi destinasi wisata, serta standar keselamatan yang terus diperbarui, maskapai ini telah menjadi pemain kunci dalam industri pariwisata. Aksesibilitas yang ditawarkan maskapai ini memungkinkan wisatawan untuk menjelajahi berbagai destinasi eksotis dengan rasa aman, mendukung pemulihan pariwisata pasca-pandemi, dan memastikan keberlanjutan sektor ini di masa depan.'/>
        </div>
    )
}

function Title(props){
    return(
        <div className="article-title">
            <h1>
                {props.content}
            </h1>
        </div>
    )
}
function SubTitle(props){
    return(
        <div className="article-subtitle">
            <h3>
                {props.content}
            </h3>
        </div>
    )
}

function Thumbnail(props){
    return(
        <div className="thumbnail">
            <img src={props.img} height={300} className="thumbnail" alt="" />
        </div>
    )
}

function Content(props){
    return(
        <div className="">
            <p>{props.text}</p>
        </div>
    )
}