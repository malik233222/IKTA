// import React, { useState } from 'react'
// import logo from '../assets/images/gradient_black.png'
// import '../assets/style/sidebar.scss'
// import '../index.css'

// import { HiBars3BottomRight, HiBars3 } from "react-icons/hi2";
// import { FaPlus } from "react-icons/fa6";
// import { TbHandClick } from "react-icons/tb";
// import { RiLogoutBoxLine } from "react-icons/ri";
// export default function Sidebar() {
//   const [isTrue, setIsTrue] = useState(false);
//   const handleClick = () => {
//     setIsTrue(!isTrue);
//     if (isTrue) {


//     }

//   }
//   return (
//     <>
//       <div className='container-custom-sidebar'>

//         <div className="wrapper">
//           <div className='bar-logo-wrapper'>
//             <img src={logo} alt="" />
//             <button className='bar-logo'>
//               <HiBars3BottomRight className='fs-3 ' />
//             </button>

//           </div>

//           <div className='menu-wrapper'>

//             <a href="">
//               <span> <FaPlus onClick={handleClick} /> </span>
//               <span>Yeni şikayət yarat</span>
//             </a>

//             <a href="">
//               <span> <HiBars3 /> </span>
//               <span>Şikayətlər</span>
//             </a>

//             <a href="">
//               <span> <TbHandClick /> </span>
//               <span>İsteklahçı təcrübəsi sorğusu</span>
//             </a>

//           </div>
//         </div>

//         <div className="exit">
//           <div>
//             <span>  Çıxış </span>
//           </div>

//           <div className="exit-logo">
//             <RiLogoutBoxLine />
//           </div>

//         </div>

//       </div>
//     </>
//   )
// }



import React, { useState } from 'react';
import logo from '../assets/images/gradient_black.png';
import '../assets/style/sidebar.scss';
import '../index.scss';

import { HiBars3BottomRight, HiBars3 } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`container-custom-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="wrapper">
          <div className='bar-logo-wrapper'>
            {isOpen && <img src={logo} alt="" />}
            <button className='bar-logo d-flex justify-content-center align-items-center' onClick={toggleSidebar}>
              <HiBars3BottomRight className='fs-3 ' />
            </button>
          </div>
          <div className='menu-wrapper'>
            <a href="">
              <span><FaPlus /></span>
              {/* {isOpen && <span  >Yeni şikayət yarat</span>} */}
              {isOpen ? <span  >Yeni şikayət yarat</span> : <span className='opacity-0 d-none' >Yeni şikayət yarat</span>}
            </a>
            <a href="">
              <span><HiBars3 /></span>
              {isOpen && <span>Şikayətlər</span>}
            </a>
            <a href="">
              <span><TbHandClick /></span>
              {isOpen && <span>İsteklahçı təcrübəsi sorğusu</span>}
            </a>
          </div>
        </div>
        <div className="exit">
          <div>
            {isOpen && <span>Çıxış</span>}
          </div>
          <div className="exit-logo">
            <RiLogoutBoxLine />
          </div>
        </div>
      </div>
    </>
  );
}



