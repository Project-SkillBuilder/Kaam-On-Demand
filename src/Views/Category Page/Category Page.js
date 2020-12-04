import React from "react";
import './Category Page.css';
import CCard from "../../Components/Category Card/Category Card";
import kod from './kod.png';
import NavBar from "../../Components/Navigation Bar/Navigation Bar";
import SearchBar from "../../Components/Search Bar/Search Bar";

const CatPage = () => {
    return (
                <div className="Category_Page_main">
                    <div className="Category_Page_Sbar text-center">
                        <SearchBar/>
                    </div>
                    <div className="Category_Page_container">
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                    </div>
                </div>
    );
}
export default CatPage;