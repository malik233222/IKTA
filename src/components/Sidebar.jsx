
import React, { useState } from 'react';
import logo from '../assets/images/gradient_black.png';
import '../assets/style/sidebar.scss';
import '../index.scss';

import { HiBars3BottomRight, HiBars3 } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

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
            <button className='border-0 bg-transparent  bar-logo d-flex justify-content-center align-items-center' onClick={toggleSidebar}>
              <HiBars3 className='fs-3 ' />
            </button>
          </div>
          <div className='menu-wrapper'>

            <Link to="new_complaint">
              <span><FaPlus /></span>
              {/* {isOpen && <span  >Yeni şikayət yarat</span>} */}
              {isOpen ? <span  >Yeni şikayət yarat</span> : <span className='opacity-0 d-none' >Yeni şikayət yarat</span>}
            </Link>
            {/* <span></span> */}
            <Link to="/">
              <span><HiBars3 /></span>
              {isOpen && <span>Şikayətlər</span>}
            </Link>

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span><TbHandClick /></span>
              {isOpen && <span>İsteklahçı təcrübəsi sorğusu</span>}
            </button>

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

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header border-0">
              <TbHandClick className='icon-modal' />
              <h2 class="modal-title  " id="exampleModalLabel">Sorğu</h2>
            </div>
            <div class="modal-body text-center ">
              İnternet xidmətləri üzrə istehlakçı təcrübəsi sorğusu
            </div>
            <div class="modal-footer border-0 d-flex justify-content-around">
              <a  target="_blank" href="https://bit.ly/4e7smCO?r=qr" type="button" class="btn btn-primary mr-5">Davam et</a>
              <button type="button" class=" btn btn-primary " data-bs-dismiss="modal" aria-label="Close">Imtina Et</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



