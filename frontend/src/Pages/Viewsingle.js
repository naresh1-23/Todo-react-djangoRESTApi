/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import NavbarTodo from "../Components/NavbarTodo";
import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Edit from "../Components/Edit";

const ViewSingle = () => {
  const getParams = useParams();
  const getId = getParams.id;
  const [lists, setLists] = useState([]);
  const [updatestate, setUpdatestate] = useState(-1);
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
  const handleEdit = () => {
    setUpdatestate(getId);
  };
  const handleCheckboxChange = () => {};
  return (
    <>
      <NavbarTodo />
      <div className="bg-dark">
        <Container className=" text-white">
          {updatestate === getId ? (
            <Edit data={lists} />
          ) : (
            <>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
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
              <Button
                className="mt-3 mb-5"
                variant="primary"
                onClick={handleEdit}
              >
                Update
              </Button>
            </>
          )}
        </Container>
      </div>
    </>
  );
};

export default ViewSingle;
