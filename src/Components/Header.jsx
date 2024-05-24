import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";
// import {NavLink} from "react-router"
const Header = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [userDropdown, setUserDropdown] = useState(false)
    function toogleUserDropdown() {
        setUserDropdown(!userDropdown)

    }
    let userRef = useRef();
    useEffect(()=>{
        let handler = (e) =>{
            if(!userRef.current.contains(e.target))
            setUserDropdown(false);
        }
        document.addEventListener("mousedown", handler);    
    }
    )
    return (
        <div className="fixed w-full p-5 bg-[#A0E9FF]">
            
                <div className=" h-auto place-items-center w-full flex flex-row justify-between">
                    <div className="text-center w-1/5 h-full flex border border-bg-red col-lg justify-center items-center">
                    <Link to="/trang-chu">
                        <p className="hover:text-white text-3xl font-bold text-black cursor-pointer">
                            Công ty ABC
                        </p>
                        </Link>
                    </div>

                    <div className=" flex flex-row w-3/5 justify-between items-center h-auto">

                        <div className='h-full w-4/5 ml-5 text-black  flex flex-row justify-between'>
                            <div>
                            <Link to="/gui-yeu-cau">
                                <a href="#" className='cursor-pointer hover:text-red-500 '>Tạo yêu cầu</a>
                                </Link>
                            </div>
                            <div className="">
                            
                                <a href="#" className='cursor-pointer hover:text-red-500 '>Xét yêu cầu</a>
                                
                            </div>
                            <div className="">
                            <Link to="/dang-ky-phong-hop">
                                <a href="#" className='cursor-pointer hover:text-red-500 '>Đăng ký phòng họp</a>
                                </Link>
                            </div>
                            <div>
                            <Link to="/lich-phong-hop">
                                <a href="#" className='cursor-pointer hover:text-red-500 '>Lịch phòng họp</a>
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/5 flex flex-col justify-center items-center relative">
                            {isLogin ?
                                (

                                    <div className="relative w-full">
                                        <div className="flex justify-center">
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            className="text-black text-2xl cursor-pointer"
                                         onClick={toogleUserDropdown}
                                        />
                                        </div>
                                        {userDropdown && (
                                        <div ref={userRef} className="mt-3 bg-cyan-300 rounded-xl w-[140%] -inset-x-14 absolute flex flex-col justify-center items-center">
                                            <ul className="w-full font-semibold pl-2">
                                            <Link to="/tai-khoan">
                                            <li className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700">Thông tin tài khoản</li>
                                            </Link>
                                            <li className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700">Thông tin yêu cầu</li>
                                            <li className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700"> Thông tin phòng đăng ký</li>
                                            <Link to="/danh-sach-nhan-vien">
                                            <li className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700">Quản lý nhân viên</li>
                                            </Link>
                                            <li className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700">Đăng xuất</li>
                                            </ul>
                                        </div>
                                        )}
                                    </div>

                                ) :
                                (
                                    <button className="border border-red-400 hover:bg-red-400 rounded-xl px-3 py-3 text-center"> Đăng nhập</button>
                                )
                            }
                        </div>
                    </div>
                </div>

            
        </div>

    )
}
export default Header