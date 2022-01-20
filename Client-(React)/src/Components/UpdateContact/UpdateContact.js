import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import "./UpdateContact.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { StudentContext } from "../../App";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const UpdateContacts = () => {

  let history = useHistory();
  const { students } = useContext(StudentContext);
  const [allContacts, setAllContacts] = students;

  let { id } = useParams();
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    const student = allContacts.find(contact => contact.id == id)
    setData(student);
  }, []);

  const handleContactInfo = (e) => {
    const obj = data;
    obj[e.target.name] = e.target.value;
    setData({ ...obj });
  };

  const handleSubmitContactInfo = (e) => {
    e.preventDefault();
    const { name, dateOfBirth, gender } = data;
    if (name && dateOfBirth && gender ) {
      fetch(`http://localhost:8080/api/v1/students`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            alert("Contact Updated Successfully");
            history.push("/");
          } else {
            alert("Something Wrong Happened. Please Try Again.");
          }
        });
    } else {
      alert("Please Fill Up All The Fields Properly");
    }
  };
  return (
    <div>
      <Container>
        <Row
          className="d-flex align-items-center justify-content-center "
          style={{ height: "100vh" }}
        >
          <Col md={7} lg={5} className="">
            <div className="createContact">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  <FaArrowLeft className="icon" /> Contact Page
                </p>
              </Link>
              <h3>Edit Contact</h3>
              <form onSubmit={handleSubmitContactInfo}>
                <div className="form-group" style={{ textAlign: "left" }}>
                  <label for="name">Your Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="form-control input"
                    placeholder="Enter Name"
                    onChange={handleContactInfo}
                    value={data.name}
                  />
                </div>
                <div className="form-group" style={{ textAlign: "left" }}>
                  <label for="date">Your Date of birth</label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    id="date"
                    className="form-control input"
                    onChange={handleContactInfo}
                    value={data.dateOfBirth}
                  />
                </div>

                
                  <div
                    className="form-group "
                    style={{ textAlign: "left" }}
                  >
                    <label for="inputState">Your Gender</label>
                    <select
                      id="inputState"
                      className=" otherinput"
                      name="gender"
                      onChange={handleContactInfo}
                      // defaultValue={data.gender}
                    >
                    <option value="Male" selected={data.gender === "Male"}>Male</option>
                    <option value="Female" selected={data.gender === "Female"}>Female</option>
                    <option value="Other" selected={data.gender === "Other"}  >Other</option>
                    </select>
                  </div>
               

                <br />

                <button type="submit" class=" addContact">
                  Update
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateContacts;
