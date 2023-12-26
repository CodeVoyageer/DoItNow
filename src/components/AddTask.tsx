import React from "react";
import "../styles/AddTask.scss";

const AddTask: React.FC = () => {
  return (
    <>
      <section className="addTask">
        <div className="addTask_first-container">
          <h1 className="addTask_heading">Dodaj swoje zadanie</h1>
          <button className="addTask_button">Dodaj zadanie</button>
        </div>
        <div>
          <table>
            <tr>
              <th>Nazwa</th>
              <th>Kategoria</th>
              <th>Data</th>
            </tr>
            <tr>
              <td>Zrobić tabele</td>
              <td>Praca</td>
              <td>26.12.2023</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default AddTask;
