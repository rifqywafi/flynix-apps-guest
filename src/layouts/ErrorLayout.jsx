import { Outlet } from "react-router-dom";

export default function ErrorLayout(){
    return(
        <div className="w-full overflow-hidden min-h-screen justify-center flex flex-row relative">
            <div className="left-0 absolute">
                <img src="images/decor2.png" className="h-screen" alt="" />
            </div>
            <div className="">
                <Outlet />
            </div>
            <div className="-right-30 -top-5 absolute -z-10">
                <img src="images/vector-landing1.png" className="h-screen" alt="" />
            </div>
        </div>
    )
}