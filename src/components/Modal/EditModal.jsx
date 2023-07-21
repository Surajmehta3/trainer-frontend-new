import { Formik, Form, Field, ErrorMessage } from "formik";

import Modal from "./Modal";
import "./Modal.css";

function EditModal({ link, closeModal }) {
  const initialValues = {
    ...link.current,
  };

  const handleSubmit = () => {
    const url = "https://trainer-portal.surajmehta6.repl.co/edit"

    const data = 

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
  };

  return (
    <Modal>
      <h3>Edit Link</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="form-group">
            <label>Link</label>
            <Field type="text" name="link"></Field>
          </div>
          <button type="submit">Submit</button>
          <button onClick={closeModal}>Cancel</button>
        </Form>
      </Formik>
      {/* <div className="edit-box">
        <button className="delete-yes btn" onClick={handleDelete}>
          Yes
        </button>
        <button className="delete-no btn">
          No
        </button>
      </div> */}
    </Modal>
  );
}

export default EditModal;
