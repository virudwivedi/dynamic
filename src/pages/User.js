
import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "./Tenant.css"
import Modal2 from "./Modal2.js";


const User = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState({});
   

    useEffect(() => {
        fireDb.child("Users").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }
        });

        return () => {
            setData({});
        };
    }, []);

    const onDelete = (id) => {
        if (
            window.confirm("Are you sure that you wanted to delete that user ?")
        ) {
            fireDb.child(`Users/${id}`).remove((err) => {
                if (err) {
                    toast.error(err);
                } else {
                    toast.success("User Deleted Successfully");
                }
            });
        }
    };
    return (
        <div className="App">

            <button
                className="openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                ADD USER
            </button>

            {modalOpen && <Modal2 setOpenModal={setModalOpen}
                animationType='slide'
                transparent={true} />}
            <div style={{ marginTop: "100px" }}>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            <th style={{ textAlign: "center" }}>Name</th>
                            <th style={{ textAlign: "center" }}>Email</th>
                            <th style={{ textAlign: "center" }}>Contact</th>
                            <th style={{ textAlign: "center" }}>Status</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Object.keys(data).map((id, index) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data[id].name}</td>
                                    <td>{data[id].email}</td>
                                    <td>{data[id].contact}</td>
                                    <td>{data[id].status}</td>
                                    <td>
                                        <Link to={`/update2/${id}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button
                                            className="btn btn-delete"
                                            onClick={() => onDelete(id)}
                                        >
                                            Delete
                                        </button>

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>


                </table>

            </div>
        </div>

    )
};

export default User;
