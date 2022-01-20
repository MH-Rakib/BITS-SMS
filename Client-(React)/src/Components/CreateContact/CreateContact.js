import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import "./CreateContact.css";
import { Link } from "react-router-dom";
import { StudentContext } from "../../App";

const CreateContact = () => {

  const { students } = useContext(StudentContext);
  const [allContacts, setAllContacts] = students;

  const [contactInfo, setContactInfo] = useState({
    name: "",
    dateOfBirth: "",
    gender: "Male",
  });

  const handleContactInfo = (e) => {
    const obj = contactInfo;
    obj[e.target.name] = e.target.value;
    setContactInfo({ ...obj });
  };

  const handleSubmitContactInfo = (e) => {
    e.preventDefault();
    const { name, dateOfBirth, gender } = contactInfo;
    if (name && dateOfBirth && gender ) {

      contactInfo.id = allContacts.length+1;

      fetch(`http://localhost:8080/api/v1/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactInfo),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            alert("Contact Added Successfully");
            const updatedContacts = [...allContacts, contactInfo];
            setAllContacts(updatedContacts);
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
              <h3>Create A New Contact</h3>
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
                  />
                </div>
                <div className="form-group" style={{ textAlign: "left" }}>
                  <label for="date">Your Date of birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="date"
                    className="form-control input"
                    onChange={handleContactInfo}
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
                      onClick={handleContactInfo}
                    >
                      <option selected>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                

                <br />

                <button type="submit" class=" addContact">
                  Submit
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateContact;
