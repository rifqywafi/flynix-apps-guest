import { BsDatabaseExclamation } from "react-icons/bs"; 
export default function EmptyState({ text = "Belum ada data" }) {
    return (
        <div className="p-8 flex justify-center flex-col items-center text-center text-gray-500">
            <div className="text-4xl text-center mb-2">
             <BsDatabaseExclamation />   
            </div>
            <p>{text}</p>
        </div>
    )
}