import React from "react";
import "../styles/AddTask.scss";

const AddTask: React.FC = () => {
  return (
    <>
      <section className="addTask">
        <div className="flex-row">
        <div className="addTask_first-container">
          <h1 className="addTask_heading">Dodaj swoje zadanie</h1>
          <button className="addTask_button">Dodaj zadanie</button>
        </div>
        <div className="table-container">
          <table className="table">
            <tr className="table_heading-row">
              <th className="table_heading">Nazwa</th>
              <th className="table_heading">Kategoria</th>
              <th className="table_heading">Data</th>
            </tr>
            <tr className="table_row">
              <td className="table_last_task">Zrobić tabele</td>
              <td className="table_last_task">Praca</td>
              <td className="table_last_task">26.12.2023</td>
            </tr>
          </table>
        </div>
        </div>
      </section>
    </>
  );
};

export default AddTask;
