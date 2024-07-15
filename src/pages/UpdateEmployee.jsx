import { useOutletContext, useParams } from "react-router-dom";
import FormElement from "../components/FormElement";

const UpdateEmployee = ({ type }) => {
  const { state, dispatch } = useOutletContext();
  let { id } = useParams();
  console.log(id);
  return (
    <main className="home-layout">
      <section>
        <br />
        <br />
      </section>
      <section>
        <div className="title">
          <h2>Edit Employee</h2>
        </div>
      </section>
      <section>
        <FormElement
          operation={type}
          employee_Id={id}
          state={state}
          dispatch={dispatch}
        />
      </section>
    </main>
  );
};

export default UpdateEmployee;
