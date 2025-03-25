import { useState } from "react"

 const Navbar = () => {
  const [open,setopen] = useState(false);
   return (
    
     <div className="w-full h-16 md:h-20 flex items-center justify-between">
        {/*logo */}
        <div className="flex items-center gap-4 text-2xl font-bold">
            <img src="/logo.png" className="w-8 h-8" alt="" />
            <span>Lamalog</span>
        </div>
        {/*mobile menu*/}
        <div className="md:hidden">
           {/* MOBILE BUTTON */}
          <div className="cursor-pointer text-4xl" onClick={()=> setopen((prev)=>!prev)}>{open?"X": "☰"}

          </div>
          <div className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center  absolute top-16 bg-[#398cbd] transition-all ease-in-out ${open ? "-right-0":"-right-[100%]"}`}>
            Menu
          </div>
        </div>
        {/*Desktop menu*/}
        <div className="hidden md :flex">D</div>

     </div>
   )
 }
 
 export default Navbar