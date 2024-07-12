import "./CreateEmployee.style.css";
import InputPair from "../components/InputPair";
import SelectPair from "../components/SelectPair";
import Button from "../components/Button";
import { useState } from "react";
import FormElement from "../components/FormElement";
import { useOutletContext } from "react-router-dom";

const CreateEmployee = () => {
  return (
    <main className="home-layout">
      <section>
        <div className="title">
          <br />
          <br />
        </div>
      </section>
      <section>
        <div className="title">
          <h2>Create Employee</h2>
        </div>
      </section>
      <section>
        <FormElement />
      </section>
    </main>
  );
};

export default CreateEmployee;
