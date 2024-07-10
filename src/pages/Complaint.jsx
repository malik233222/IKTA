// import React from 'react'

// export default function Complaint() {
//     return (

//         <div className="row">
//             <div className="col-12">
//                 <div className="container-complaint">
//                     <div className="complaint-details-header">
//                         <h3>Şikayət məlumatları</h3>
//                     </div>

//                     <div className='complaint-details row'>
//                         <div className="left col-3">
//                             <div className='option-field'>
//                                 <label htmlFor="type">Şikayət etdiyiniz fəaliyyət sahəsi</label>
//                                 <select name="" id="type" required>
//                                     <option selected="" disabled="" value="">Fəaliyyət sahəsi</option>
//                                     <option value="İnternet(GPON, ADSL və s.)">İnternet(GPON, ADSL və s.)</option>
//                                     <option value="Telefon rabitəsi">Telefon rabitəsi</option>
//                                     <option value="Mobil internet">Mobil internet</option>
//                                     <option value="Mobil rabitə">Mobil rabitə</option>
//                                     <option value="Universal poçt rabitəsi xidmətləri">Universal poçt rabitəsi xidmətləri</option>
//                                     <option value="Sürətli poçt rabitəsi xidməti">Sürətli poçt rabitəsi xidməti</option>
//                                 </select>
//                             </div>

//                             <div className='option-field'>

//                             </div>

//                         </div>
//                         <div className="center col-6"></div>
//                         <div className="right col-3"></div>
//                     </div>

//                 </div>
//             </div>
//         </div>


//     )
// }

import React, { useState } from 'react';
import { Field_Of_Action, Company, Character } from '../data/complaint';
import "../assets/style/complaint.scss"

export default function Complaint() {
    const [selectedField, setSelectedField] = useState('');
    console.log(selectedField);
    const handleFieldChange = (event) => {
        setSelectedField(event);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Field of action selected:', selectedField);
    };

    return (
        <div className="row">
            <div className="col-12">
                <div className="container-complaint">
                    <div className='complaint-details-header-wrapper' >
                        <h3 className="complaint-details-header">Şikayət məlumatları</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="complaint-details row">
                        <div className="left col-3">
                            <div className="option-field">
                                <label htmlFor="type">Şikayət etdiyiniz fəaliyyət sahəsi</label>
                                <select
                                    name="field_of_action"
                                    id="type"
                                    defaultValue={'field'}
                                    onChange={(e) => handleFieldChange(e.target.value)}
                                    required

                                >
                                    <option disabled value={"field"}>
                                        Fəaliyyət sahəsi
                                    </option>
                                    {Field_Of_Action.map((field) => (
                                        <option key={field.value} value={field.value}>
                                            {field.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="option-field">
                                <label htmlFor="isp_select-selectized" required-field="" >Şikayətçi olduğunuz şirkət</label>

                                <select
                                    name="company "
                                    id="type"
                                    defaultValue={"option"}
                                    required
                                >
                                    <option disabled value={"option"}>
                                        Fəaliyyət adada
                                    </option>
                                    {Company.filter((item) => item.field === selectedField).map((field) => (
                                        field.names.map((name) => (

                                            <option key={name.id} value={name.name}>
                                                {name.name}
                                                {console.log(name.name)}
                                            </option>
                                        ))
                                    ))}
                                </select>
                            </div>

                            <div className="option-field">
                                <label htmlFor="isp_select-selectized" required-field="" >Şikayətin xarakteristikası</label>
                                <select
                                    name="character"
                                    id="type"
                                    defaultValue={"option"}
                                    required


                                >
                                    <option disabled value={"option"}>
                                        Şikayətin xarakteristikası
                                    </option>
                                    {Character.filter((item) => item.field === selectedField).map((field) => (
                                        field.names.map((name) => (

                                            <option key={name.id} value={name.name}>
                                                {name.name}
                                            </option>
                                        ))
                                    ))}
                                </select>
                            </div>

                            <div className="option-field">
                                <label htmlFor="isp_select-selectized" required-field="" >Şikayətin mövzusunu seçin</label>
                                <select
                                    name="character"
                                    id="type"
                                    defaultValue={"option"}
                                    required

                                >
                                    <option disabled value={"option"}>
                                        Şikayətin mövzusunu
                                    </option>

                                    <option >
                                        Əməkdaşlardan və ya xidmətdən narazılıq
                                    </option>
                                    <option value="">İnfrastrukturla əlaqədar şikayətlər</option>

                                </select>
                            </div>
                        </div>
                        <div className="center col-6">

                            {(selectedField === "internet" || selectedField === "telefon") &&
                                (<>
                                    <label htmlFor="Abunəçi kodu">Abunəçi kodu</label>
                                    <br />
                                    <input id='Abunəçi kodu' />
                                </>

                                )
                            }
                            <br />
                            <label htmlFor="Abunəçi kodu">Şikayət mətni     </label>
                            <br />
                            <textarea className='rounded' name="" rows={10} cols={50} id=""></textarea>

                        </div>

                        <div className="right col-3">
                            {/* fILE READER QALDI SONRAYA */}
                        </div>
                    </form>

                    <div className="col-12">
                        <form >
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="">  Şəhəri seçin</label>
                                    <br />
                                    <select name="city" id="city">
                                        <option value=""> Baki</option>
                                        <option value=""> Zərdab</option>

                                    </select>
                                </div>
                                <div className="col-3">
                                    <label htmlFor=""> Rayonu seçin</label>
                                    <br />
                                    <select name="city" id="city">
                                        <option value=""> Baki</option>
                                        <option value=""> Zərdab</option>

                                    </select>
                                </div>
                                <div className="col-6">
                                    <div className="col-6">

                                        <label htmlFor=""> Küçəni / Kəndi seçin</label>
                                        <br />
                                        <select name="city" id="city">
                                            <option value=""> Baki</option>
                                            <option value=""> Zərdab</option>

                                        </select>
                                    </div>
                                    <div className="col-6"></div>
                                </div>
                            </div>
                            <div className="home_num_container">

                                <div className="home-apartment">
                                    <div className="house">
                                        <label label="" htmlFor="apartment" required-field="" >Bina
                                            / Ev</label>
                                        <input id="apartment" name="apartment" type="text" required_input="required" maxLength="10" />


                                        <p className="cant_be_empty spec_house">Bu xana boş qoyula bilməz!</p>
                                    </div>

                                    <div className="divider-line"></div>

                                    <div className="flat">
                                        <label htmlFor="flat">Mənzil</label>
                                        <input id="flat" name="flat" type="text" maxLength="10" />



                                    </div>
                                </div>




                                <div className="">
                                    <label htmlFor="complainant_contact_number" required-field="" >Əlaqə nömrəsi</label>
                                    <div className="input-group" >
                                        <div className="dropdown" >
                                            <span className="prefix">+994</span>
                                            <select className="custom-select" id="dropdownMenuButton" name="prefix" >
                                                <option value="(50)">(50)</option>
                                                <option value="(51)">(51)</option>
                                                <option value="(10)">(10)</option>
                                                <option value="(55)">(55)</option>
                                                <option value="(60)">(60)</option>
                                                <option value="(99)">(99)</option>
                                                <option value="(70)">(70)</option>
                                                <option value="(77)">(77)</option>
                                            </select>
                                        </div>
                                        <input id="complainant_contact_number" name="complainant_contact_number" type="text" required_input="required" maxLength="30" />
                                    </div>

                                    <p className="cant_be_empty">Bu xana boş qoyula bilməz!</p>
                                </div>


                                <div className="">
                                    <label htmlFor="stasionar_phone">Stasionar telefon</label>
                                    <input id="stasionar_phone" maxLength="20" name="stasionar_phone" type="text" />


                                </div>

                                <div className="">
                                    <label htmlFor="email" required-field="" >E-poçt</label>
                                    <input id="email" name="email" placeholder="example@gmail.com" type="email" maxLength="30" required_input="required" />



                                    <p className="cant_be_empty">Bu xana boş qoyula bilməz!</p>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}