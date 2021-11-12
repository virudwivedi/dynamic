import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddEdit1.css";
import fireDb from "../firebase";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  contact: "",
  location: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { name, email, contact, location} = state;

  const history = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fireDb.child("Tenants").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }

    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !location) {
      toast.error("Please provide value in each input field");
    } else {
      if (!id) {
        fireDb.child("Tenants").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Tenant Added Successfully");
          }
        });
      } else {
        fireDb.child(`Tenants/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Tenant Updated Successfully");
          }
        });
      }

      
    }
  };
  return (
    <div style={{ fontSize:"15px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeHolder="Your Name..."
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeHolder="Your Email..."
          value={email || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeHolder="Your Contact No. ..."
          value={contact || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="name">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeHolder="Your Location..."
          value={location || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Update" : "Save"} />
      </form>
    </div>
  );
};

export default AddEdit;