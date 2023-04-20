/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import NavbarTodo from "../Components/NavbarTodo";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

const ViewSingle = () => {
  const getParams = useParams();
  const getId = getParams.id;
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    try {
      fetch(`http://localhost:8000/lists/${getId}/`)
        .then((response) => response.json())
        .then((data) => setLists(data.lists));
      console.log(lists);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckboxChange = (event) => {};
  return (
    <>
      <NavbarTodo />
      <div className="bg-dark">
        <Container className=" text-white">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                defaultValue={lists.title}
                /*ref={titleReference}*/ type="text"
                autoFocus
                disabled
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                defaultValue={lists.description}
                /*ref={descriptionReference}*/ as="textarea"
                rows={3}
                disabled
              />
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={lists.completed ? true : false}
                  onChange={handleCheckboxChange}
                />
                Completed?
              </label>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default ViewSingle;
