/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CompletedLists from "./Completedlist";
import NotCompletedLists from "./NotCompletedlist";

const Todolists = () => {
  const [Lists, setLists] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/alllists/");
      setLists(response.data.lists);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-dark">
        <Container className="text-center text-white">
          <h1 className="p-4">Todo lists</h1>
          <Row>
            <Col
              style={{
                borderRight: "4px solid white",
              }}
            >
              <h3 className="p-3">Completed</h3>
              <ul className="m-3">
                {Lists.map((e1) => (
                  <React.Fragment key={e1.title}>
                    <CompletedLists data={e1} />
                  </React.Fragment>
                ))}
              </ul>
            </Col>
            <Col>
              <h3 className="p-3">Not Completed</h3>
              <ul className="m-3">
                {Lists.map((e1) => (
                  <React.Fragment key={e1.title}>
                    <NotCompletedLists data={e1} />
                  </React.Fragment>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Todolists;
