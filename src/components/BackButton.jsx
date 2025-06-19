import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi"; 
export default function BackButton({to}){
    return (
        <Link
          to={to}
          className="mt-4  text-gray-500 px-4 py-2 flex items-center flex-row rounded"
        >
          <BiChevronLeft className="text-3xl"/>
          Kembali
        </Link>
    )
}