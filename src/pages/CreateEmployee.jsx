import "./CreateEmployee.style.css";
import FormElement from "../components/FormElement";
import { useOutletContext } from "react-router-dom";

const CreateEmployee = ({ type }) => {
  const { state, dispatch } = useOutletContext();
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
        <FormElement operation={type} state={state} dispatch={dispatch} />
      </section>
    </main>
  );
};

export default CreateEmployee;
