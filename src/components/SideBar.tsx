import React from "react";
import '../styles/SideBar.scss'
const SideBar: React.FC = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar_logo-container">
          <h1 className="sidebar_logo">Do<span className="sidebar_logo_second">It</span>Now</h1>
        </div>
        <div className="sidebar_container">
          <ul className="sidebar_list">
            <li className="sidebar_list_menu">Profile</li>
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
