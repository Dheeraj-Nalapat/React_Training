import { useParams } from "react-router-dom";
import FormElement from "../components/FormElement";

const UpdateEmployee = () => {
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
        <FormElement operation="edit" employee_Id={id} />
      </section>
    </main>
  );
};

export default UpdateEmployee;
