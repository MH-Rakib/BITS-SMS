import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AllContacts.css";
import ContactList from "./../ContactList/ContactList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StudentContext} from "../../App"

const AllContacts = () => {

  const { students } = useContext(StudentContext);
  const [allContacts, setAllContacts] = students;

  const handleDeleteContact = (obj) => {
    const { id } = obj;
    fetch(`http://localhost:8080/api/v1/students/${id}`, {
      method: "DELETE",
    })
      .then((res) => { 
        if (res.status == 200) {
          const newContacts = allContacts.filter(
            (contact) => contact.id !== id
          );
          alert("Student Deleted Successfully!")
          setAllContacts(newContacts);
        }
      });
  };

  return (
    <Container>
      <Row className="section mt-5">
        <Col>
          <div className="">
            <Link to={"/createContact"}>
              <button className="createNew">Create New Contact</button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <p className="listHeading">All The Contacts</p>
        {allContacts.map((contact) => (
          <Col md={12}>
            <ContactList
              handleDeleteContact={handleDeleteContact}
              contact={contact}
            ></ContactList>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllContacts;
