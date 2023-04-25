import axios from "axios";
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Edit = (props) => {
  const [isChecked, setIsChecked] = useState(props.data.completed);
  const titleReference = useRef();
  const descriptionReference = useRef();
  const navigate = useNavigate();
  const getId = props.data.id;
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleEdit = async () => {
    const data = {
      id: getId,
      title: titleReference.current.value,
      description: descriptionReference.current.value,
      completed: isChecked,
    };
    const jsondata = JSON.stringify(data);
    console.log(jsondata);
    // try {
    //   const response = await axios.put(
    //     `http://127.0.0.1:8000/update/${getId}`,
    //     jsondata
    //   );
    //   alert("Successfully edited");
    // } catch (error) {
    //   console.log(error);
    // }
    // fetch(`http://127.0.0.1:8000/update/${getId}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .then(() => alert("added"))
    //   .then(() => navigate("/"))
    //   .catch((error) => console.error(error));
    const response = await fetch(`http://127.0.0.1:8000/update/${getId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => alert("Updated"))
      .then(() => window.location.reload())
      .catch((error) => alert("error occured. Try again!"));
    const updatedTodo = await response.json();
    return updatedTodo;
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            defaultValue={props.data.title}
            ref={titleReference}
            type="text"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            defaultValue={props.data.description}
            ref={descriptionReference}
            as="textarea"
            rows={3}
          />
          <br />
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Completed?
          </label>
        </Form.Group>
        <Button className="mt-3 mb-5" variant="primary" onClick={handleEdit}>
          Save Changes
        </Button>
      </Form>
    </>
  );
};
export default Edit;
