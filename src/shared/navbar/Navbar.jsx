import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import { GiPartyFlags} from 'react-icons/gi'
// import { FaGoogle} from 'react-icons/fa'
import icon from '../../assets/user.png'

import logos from'../../assets/logos.png'


const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  
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
<li><NavLink to="/features" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-amber-400 font-bold  underline underline-offset-8 hover:text-white " : ""
              }>Features</NavLink></li>

<li><NavLink to="/contact" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-amber-400 font-bold  underline underline-offset-8 hover:text-white  " : ""
              }>My Cart</NavLink></li>

</>
    return (
        <div className="font-metamorphous">
           <div className="navbar bg-amber-300 text-white">
  <div className="navbar-start ">
  {/* <img src={logo}/> */}
    <div className="dropdown text-purple-950">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        </ul>
    </div>
    <img src={logos} alt="" />
    <a className="btn btn-ghost normal-case text-xl lg:text-2xl text-[#EE4E34]">Glamer <span className="text-amber-300 ">Fixx</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  
   
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
      {
        user?<button onClick={handleSignOut} className="btn btn-sm md:btn-md ">Log Out</button>
        :   <Link to='/login'> <button className="btn text-white bg-amber-500 px-6  border-none lg:ml-5 rounded-sm">Login</button></Link>
      }
   
  
  </div>
</div>
        </div>
    );
};

export default Navbar;