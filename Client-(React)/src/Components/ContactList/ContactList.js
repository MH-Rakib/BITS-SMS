import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "./ContactList.css";
import { Link } from "react-router-dom";

const ContactList = ({ contact, handleDeleteContact }) => {
  console.log(contact);
  const { id, name, dateOfBirth, gender, } = contact;
  return (
    <div className="contactList">
      <Row>
        <Col md={2}>
          <p>{id}</p>
        </Col>
        <Col md={3}>
          <p>{name}</p>
        </Col>
        <Col md={3}>
          <p>{dateOfBirth}</p>
        </Col>
        <Col md={2}>
          <p>{gender}</p>
        </Col>
        <Col md={2}>
          <span style={{ marginRight: "30px" }}>
            <Link to={`/updateContact/${id}`}>
              <FaEdit className="editIcon" />
            </Link>
          </span>
          <span onClick={() => handleDeleteContact(contact)}>
            <FaTrashAlt className="editIcon " />
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default ContactList;
