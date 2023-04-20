import axios from "axios";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompletedLists = (props) => {
  const getId = props.data.id;
  const deleteitem = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/delete/${getId}/`
      );
      alert("Successfully deleted");
      window.location.reload();
    } catch (error) {
      alert("Error occured");
    }
  };
  return (
    <>
      {props.data.completed ? (
        <>
          <li className="mt-3">
            <Row>
              <Col>{props.data.title}</Col>
              <Col>
                <Link to={`view/${props.data.id}`}>
                  <Button style={{ width: "80px" }} variant="warning">
                    View
                  </Button>
                </Link>
                <Button
                  style={{ width: "80px" }}
                  className="ms-3"
                  variant="danger"
                  onClick={() => deleteitem()}
                >
                  Delete
                </Button>
              </Col>
            </Row>
            <hr />
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default CompletedLists;
