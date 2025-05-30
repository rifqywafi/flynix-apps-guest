export default function Card({children}){
    return(
        <div>
            <div className="bg-white rounded-2xl shadow-xl p-6">
                {children}
            </div>
        </div>
    )
}