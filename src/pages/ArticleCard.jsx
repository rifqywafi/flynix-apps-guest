import Card from "../components/Card"

export default function ArticleCard(){
    return(
        <Card>
            <div className="article-card">
                <div className="article-card-title">
                    <h1>
                        Top Article
                    </h1>
                </div>
                <ArticleList rank="1" desc="Merayakan Hari Pariwisata Sedunia Penting untuk Kita Rayakan?" img="/images/article1.jpg"/>
            </div>
        </Card>
    )
}

function ArticleTitle(props){
    return(
        <div className="article-subtitle">
            <h3>
                {props.content}
            </h3>
        </div>
    )
}

function ArticleList(props){
    return(
        <div className="article-card-list">
            <div className="article-card-rank">
                {props.rank}
            </div>
            <div className="article-card-thumbnail">
                <img width={125} src={props.img} alt="" />
            </div>
            <div className="article-card-desc">
                {props.desc}
            </div>
        </div>
    )
}



