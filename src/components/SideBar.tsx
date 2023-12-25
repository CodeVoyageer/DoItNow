import React from "react";
import "../styles/SideBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faList,
  faStar,
  faBriefcase,
  faGift,
  faBirthdayCake,
  faPlus,
  faCheck,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const SideBar: React.FC = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar_logo-container">
          <h1 className="sidebar_logo">
            Do<p className="sidebar_logo_second">It</p>Now
          </h1>
        </div>
        <div className="sidebar_container">
          <ul className="sidebar_list">
            <li className="sidebar_list_menu">
              <span className="sidebar_list_icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              Profile
            </li>
            <li className="sidebar_list_menu">
              <span className="sidebar_list_icon">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              Dodaj zadanie
            </li>
            <li className="sidebar_list_menu">
              <span className="sidebar_list_icon">
                <FontAwesomeIcon icon={faList} />
              </span>
              Wszystko
            </li>
            <li className="sidebar_list_menu">
              <span className="sidebar_list_icon">
                <FontAwesomeIcon icon={faStar} />
              </span>
              Zadania z gwiazdką
            </li>
            <li className="sidebar_list_menu">
              <span className="sidebar_list_icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              Praca
            </li>
            <li className="sidebar_list_menu">
              <span className="sidebar_list_icon">
                <FontAwesomeIcon icon={faGift} />
              </span>
              Lista życzeń
            </li>
            <li className="sidebar_list_menu">
              <span className="sidebar_list_icon">
                <FontAwesomeIcon icon={faBirthdayCake} />
              </span>
              Urodziny
            </li>

            <li className="sidebar_list_menu">
              <span className="sidebar_list_icon">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Zrobione
            </li>
            <li className="sidebar_list_menu">
              <span className="sidebar_list_icon">
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
              Kosz
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default SideBar;
