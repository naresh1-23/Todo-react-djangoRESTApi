import axios from "axios";
import { useRef, useState } from "react";
import { Button, Container, Modal, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarTodo = () => {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const titleReference = useRef();
  const descriptionReference = useRef();
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleSubmit = async () => {
    const data = {
      title: titleReference.current.value,
      description: descriptionReference.current.value,
      completed: isChecked,
    };
    const jsondata = JSON.stringify(data);
    console.log(jsondata);
    // try {
    //   const response = await axios.post(
    //     "http://127.0.0.1:8000/lists/",
    //     jsondata
    //   );
    //   setShow(false);
    //   alert("Successfully added");
    // } catch (error) {
    //   setShow(false);
    //   alert("error");
    // }
    fetch("http://127.0.0.1:8000/lists/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => alert("added"))
      .then(() => window.location.reload())
      .catch((error) => console.error(error));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Todo List
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text
              className="text-dark"
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            >
              Add Todo
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add To do list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleReference} type="text" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control ref={descriptionReference} as="textarea" rows={3} />
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />{" "}
                Completed?
              </label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default NavbarTodo;
