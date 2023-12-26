import React from "react";
import SideBar from "./components/SideBar";
import AddTask from "./components/AddTask";
const App: React.FC = () => {
  return (
    <>
      <AddTask />
      <SideBar />
    </>
  );
};
export default App;
