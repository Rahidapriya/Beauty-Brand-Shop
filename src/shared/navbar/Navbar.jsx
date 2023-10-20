import { Link, NavLink } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import { GiPartyFlags} from 'react-icons/gi'
// import { FaGoogle} from 'react-icons/fa'
import icon from '../../assets/user.png'

import logos from'../../assets/logos.png'



const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const [theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
useEffect(()=>{
  localStorage.setItem("theme",theme);
  const localTheme=localStorage.getItem("theme");
  document.querySelector("html").setAttribute("data-theme",localTheme)
},[theme])
const handleToggle=(e)=>{
  if(e.target.checked){
    setTheme("dark");

  }else{
    setTheme("light");
  }
}

  const handleSignOut=()=>{
logOut()
.then()
.catch();
  }

    const navLinks=<>
<li className=" "><NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-amber-400 font-bold  underline underline-offset-8  hover:text-white " : ""
              }>Home</NavLink></li>
<li><NavLink to="/addproduct" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-amber-400 font-bold  underline underline-offset-8 hover:text-white  " : ""
              }>Add Product</NavLink></li>
{/* <li><NavLink to="/features" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-amber-400 font-bold  underline underline-offset-8 hover:text-white " : ""
              }>Features</NavLink></li> */}

{/* <li><NavLink to="/contact" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-amber-400 font-bold  underline underline-offset-8 hover:text-white  " : ""
              }>My Cart</NavLink></li> */}

</>
    return (
        <div className="font-metamorphous">
           <div className="navbar bg-orange-400 text-white">
  <div className="navbar-start ">
  {/* <img src={logo}/> */}
    <div className="dropdown text-amber-400">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        <div className="card-actions">
          <Link to='/mycart'>  <button className="btn bg-amber-300  w-full">My cart</button></Link>
          </div>
        {
        user?<button onClick={handleSignOut} className="btn w-full lg:hidden border border-white-2">Log Out</button>
        :   <Link to='/login'> <button className="btn text-white bg-amber-500 px-6  border-none lg:ml-5 rounded-sm">Login</button></Link>
      }
        </ul>
        
    </div>
    <img src={logos} alt="" />
    <a className="btn btn-ghost normal-case text-xl lg:text-2xl text-red-500">Glamer <span className="text-amber-300">Fixx</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {/*  */}
    {/* <div className="flex-none"> */}
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator hidden lg:flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          {/* <span className="badge badge-sm indicator-item">8</span> */}
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow ">
        <div className="card-body">
          {/* <span className="font-bold text-lg">8 Items</span> */}
          {/* <span className="text-info">Subtotal: $999</span> */}
          <div className="card-actions">
          <Link to='/mycart'>  <button className="btn bg-amber-300  w-full">My cart</button></Link>
          </div>
        </div>
      </div>
    </div>
    {/*  */}
  
   
<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         {
          !user?  <img className=" " src={icon}/>:<img src={user.photoURL}></img>
         }
        </div>
      
      </label>
      <div className=" hidden md:flex">
          {
            user&& <p className="lg:mx-4 mx-0">{user.displayName}</p>
          }
        </div>
        <div className="hidden lg:flex  ">
      {
        user?<button onClick={handleSignOut} className="btn btn-sm md:btn-md border border-white-2 ">Log Out</button>
        :   <Link to='/login'> <button className="btn text-white bg-amber-400 px-6 border border-white-2 border-none lg:ml-5 rounded-sm">Login</button></Link>
      }
</div>
  <div>
  <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggle} />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;