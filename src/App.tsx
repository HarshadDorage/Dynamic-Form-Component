import React from "react";
import DynamicForm from "./components/DynamicForm";
import "antd/dist/reset.css";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Dynamic Form</h1>
      <DynamicForm />
    </div>
  );
};

export default App;
