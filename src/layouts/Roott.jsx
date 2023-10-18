import { Outlet } from "react-router-dom";




const Roott = () => {
    return (
        <div className="font-poppins"> 
      
        <Outlet></Outlet>
        
        </div>
    );
};

export default Roott;