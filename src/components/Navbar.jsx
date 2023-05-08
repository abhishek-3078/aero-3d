import '../App.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
const Navbar=()=>{
    const [active,setActive]=useState(1)
   
    return (
        <div>
            <header className="h-[50px] w-[100vw] flex flex-row pt-[10px] pl-[10px]"  >
                <h2 className='text-blue-800 font-bold pr-5'><a href="https://www.aeronitkkr.club/">AeroModelling Club</a></h2>
            <ul className="flex gap-[20px] text-red-600">
                <li className={active==0?'font-bold':'font-300'}
                ><Link to='/' onClick={()=>setActive(0)}>Drone</Link></li>
                <li className={active==1?'font-bold':'font-300'}> <Link to='/plane'onClick={()=>setActive(1)}>RC Plane</Link></li>
                <li className={active==2?'font-bold':'font-300'}><Link to="/hover" onClick={()=>setActive(2)}>Hover</Link></li>
            </ul>
            </header>
            
        </div>
    )
}

export default Navbar;