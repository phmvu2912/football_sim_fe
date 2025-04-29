import { NavLink } from "react-router-dom"

const Nav_Client = () => {
    return (
        <div className="shadow-[0px_25px_20px_-20px_rgba(0,0,0,0.45)] ">

            <div className="features text-center flex items-center justify-between text-sm">
                <NavLink
                    to="#"
                    className="
                    text-gray-700 
                    flex-1 
                    text-center 
                    font-semibold
                    py-4 
                    border-t-4
                    border-b-4 
                    border-transparent 
                    hover:border-b-[#37003C] 
                    
                    duration-300
                ">
                    Bảng xếp hạng
                </NavLink>

                <NavLink
                    to="#"
                    className="
                    text-gray-700 
                    flex-1 
                    text-center 
                    font-semibold
                    py-4 
                    border-t-4
                    border-b-4 
                    border-transparent 
                    hover:border-b-[#37003C] 
                    
                    duration-300
                ">
                    Lịch thi đấu
                </NavLink>

                <NavLink
                    to="#"
                    className="
                    text-gray-700 
                    flex-1 
                    text-center 
                    font-semibold
                    py-4 
                    border-t-4
                    border-b-4 
                    border-transparent 
                    hover:border-b-[#37003C] 
                    
                    duration-300
                ">
                    Vinh danh
                </NavLink>

                <NavLink
                    to="#"
                    className="
                    text-gray-700 
                    flex-1 
                    text-center 
                    font-semibold
                    py-4 
                    border-t-4
                    border-b-4 
                    border-transparent 
                    hover:border-b-[#37003C] 
                    
                    duration-300
                ">
                    Thông số
                </NavLink>

                <NavLink
                    to="#"
                    className="
                    text-gray-700 
                    flex-1 
                    text-center 
                    font-semibold
                    py-4 
                    border-t-4
                    border-b-4 
                    border-transparent 
                    hover:border-b-[#37003C] 
                    
                    duration-300
                ">
                    Lịch sử giải đấu
                </NavLink>
            </div>
        </div>
    )
}

export default Nav_Client