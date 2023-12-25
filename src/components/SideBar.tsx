import React from "react";
import '../styles/SideBar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SideBar: React.FC = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar_logo-container">
          <h1 className="sidebar_logo">Do<p className="sidebar_logo_second">It</p>Now</h1>
        </div>
        <div className="sidebar_container">
          <ul className="sidebar_list">
            <li className="sidebar_list_menu"><span className="sidebar_list_icon"><FontAwesomeIcon icon={faUser}/></span>Profile</li>
            <li className="sidebar_list_menu">Wszystko</li>
            <li className="sidebar_list_menu">Zadania z gwiazdką</li>
            <li className="sidebar_list_menu">Praca</li>
            <li className="sidebar_list_menu">Lista życzeń</li>
            <li className="sidebar_list_menu">Urodziny</li>
            <li className="sidebar_list_menu">Dodaj zadanie</li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default SideBar;
