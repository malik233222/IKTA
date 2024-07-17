import React from 'react'
import "../assets/style/showComplaint.scss"

export default function ShowComplaint() {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button d-flex justify-content-center " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Şikayət məlumatları
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="row  ">
                <div className="col-12">
                  <div className="row  information-wrapper">
                    <div className="col-6">
                      <div className="personal-inf">
                        <p><span className='fw-bold'>FIN:</span > 8G9H1SC</p>
                        <p><span className='fw-bold'>Ad, soyad, ata adı:</span > Kim Kimov Kim oglu</p>
                        <p><span className='fw-bold'>Abunəçi kodu:</span > Yoxdur</p>
                        <p><span className='fw-bold'>Müraciət olunan provayder:</span > Citynet</p>
                        <p><span className='fw-bold'>Müraciət xarakteristikası:</span > Xidmətin qoşulması ilə bağlı şikayət (abunə əməliyyatları)</p>
                        <p><span className='fw-bold'>Müraciət tarixi (gün, ay, il / saat):</span >  18.05.2024 / 16:01</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <p><span className='fw-bold'>Ünvan: </span>  LƏNKƏRAN ŞƏHƏRİ, Mirzə Fətəli Axundov, bina/ev No 18,</p>
                      <div className='d-flex w-75 justify-content-between'>
                        <p className='d-flex flex-column'><span className='fw-bold'>Əlaqə nömrəsi: </span> +994(70)523-58-02</p>
                        <p className='d-flex flex-column'><span className='fw-bold'>Stasionar telefon: </span>  +994(12)544-44-44</p>
                      </div>
                      <p><span className='fw-bold'>E-poçt: </span>  maweiwk.chqaewbev@gmail.com</p>
                    </div>
                  </div>
                  <div className="extra-complaint-details">
                    <div className="topic row  flex-nowrap mb-3">
                      <span className='fw-bold col-lg-2 mb-lg-0 ms-1 my-2'>Şikayətin mövzusu:</span>
                      <p className='col-lg-10 m-0 d-inline my-2'>Qoşulma gecikir</p>
                    </div>
                    <div className="details   row flex-nowrap mb-3">
                      <span className="fw-bold ms-1 col-lg-2 mb-lg-0 mb-2">Şikayətin mətni: </span>

                      <div className="description col-lg-10">
                        <div className="user_description fst-italic" >
                          Internetde axsamlar tez-tez 2-5 deqiqe itir</div>
                        {/* <span className="read-more-btn" ></span> */}
                      </div>
                    </div>
                    <div className="file-extension row ">
                      <span className="col-lg-2 fw-bold ms-1">Fayl: </span>

                      <div className="col-lg-8 d-flex align-items-center">
                        <span className="mb-sm-0 mb-2 mr-4">82e344G1TaG1721049file.png</span>
                        <div className="download_btn">
                          {/* <a  href="documents/user_files/82G1TGG1721046059file.png" download="">

                            <i className="bx bx-down-arrow-alt"></i>
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
