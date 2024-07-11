import '../assets/style/home.scss'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Complaint } from '../data/complaint';
import { useState } from 'react';

export default function Home() {

    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [complaints, setComplaints] = useState(Complaint);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 8;


    const sortData = (key, direction) => {
        setSortConfig({ key, direction });

        const sortedData = [...complaints].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        setComplaints(sortedData);
    };

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage * rowsPerPage < complaints.length) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentData = complaints.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);


    return (

        <>

            <div className="top" >
                <div className="buttons" >
                    <Link to="new_complaint"> <FaPlus /> yeni şikayət yarat</Link>
                    <a href=""> <FaPlus /> Ətraflı axtarış</a>
                    <a href=""> <FaPlus /> Təlimat</a>
                </div>
                <div className="search">
                    <CiSearch style={{ fontSize: 25 }} />
                    <input type="text" placeholder=" Axtar..." />
                </div>
            </div>

            <div className="center">
                <table >
                    <thead>
                        <tr className="row">
                            <th>
                                <span>Şikayət nömrəsi
                                </span>
                                <div>
                                    <button onClick={() => sortData('complaint_number', 'ascending')}>
                                        <TiArrowSortedUp />
                                    </button>
                                    <button onClick={() => sortData('complaint_number', 'descending')}>
                                        <TiArrowSortedDown />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <span>Fəaliyyət sahəsi</span>

                                <div>
                                    <button onClick={() => sortData('field_of_action', 'ascending')}>
                                        <TiArrowSortedUp />
                                    </button>
                                    <button onClick={() => sortData('field_of_action', 'descending')}>
                                        <TiArrowSortedDown />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <span>Şirkət</span>

                                <div>
                                    <button onClick={() => sortData('company', 'ascending')}>
                                        <TiArrowSortedUp />
                                    </button>
                                    <button onClick={() => sortData('company', 'descending')}>
                                        <TiArrowSortedDown />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <span>Mövzu</span>

                                <div>
                                    <button onClick={() => sortData('subject', 'ascending')}>
                                        <TiArrowSortedUp />
                                    </button>
                                    <button onClick={() => sortData('subject', 'descending')}>
                                        <TiArrowSortedDown />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <span>Abunəçi kodu</span>

                                <div>
                                    <button onClick={() => sortData('subscriber_code', 'ascending')}>
                                        <TiArrowSortedUp />
                                    </button>
                                    <button onClick={() => sortData('subscriber_code', 'descending')}>
                                        <TiArrowSortedDown />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <span>Status</span>

                                <div>
                                    <button onClick={() => sortData('status', 'ascending')}>
                                        <TiArrowSortedUp />
                                    </button>
                                    <button onClick={() => sortData('status', 'descending')}>
                                        <TiArrowSortedDown />
                                    </button>
                                </div>

                            </th>
                            <th>
                                <span>Tarix</span>

                                <div>
                                    <button onClick={() => sortData('date', 'ascending')}>
                                        <TiArrowSortedUp />
                                    </button>
                                    <button onClick={() => sortData('date', 'descending')}>
                                        <TiArrowSortedDown />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <span>Əməliyyatlar</span>

                                <div>
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown />
                                </div>
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item, id) => (
                            <tr key={id}>
                                <td>{item.complaint_number}</td>
                                <td>{item.field_of_action}</td>
                                <td>{item.company}</td>
                                <td>{item.subject}</td>
                                <td>{item.subscriber_code}</td>
                                <td>{item.status}</td>
                                <td className='ps-4'>{item.date}</td>
                                <td>salam</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bottom">
                <div className="dataTables_info">
                    Göstərilən: {currentData.length > 0 ? ((currentPage - 1) * rowsPerPage + 1) : 0}-
                    {currentPage * rowsPerPage < complaints.length ? currentPage * rowsPerPage : complaints.length},
                    cəmi {complaints.length} ({Math.ceil(complaints.length / rowsPerPage)} səhifə)
                </div>
                <div className="dataTable_paginate">
                    <div onClick={() => handlePageChange('prev')}>
                        <a href="#"><MdKeyboardArrowLeft /></a>
                    </div>
                    <span>{currentPage}</span>
                    <div onClick={() => handlePageChange('next')}>
                        <a href="#"><MdKeyboardArrowRight /></a>
                    </div>
                </div>
            </div>

        </>


    )
}
