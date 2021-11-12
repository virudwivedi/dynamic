

import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "./Tenant.css"
import Modal1 from "./Modal1.js";

const Tenant = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState({});


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
    }, []);

    const onDelete = (id) => {
        if (
            window.confirm("Are you sure that you wanted to delete that contact ?")
        ) {
            fireDb.child(`Tenants/${id}`).remove((err) => {
                if (err) {
                    toast.error(err);
                } else {
                    toast.success("Tenant Deleted Successfully");
                }
            });
        }
    };
    return (
        <div className="App">
            <div>
                <button
                    className="openModalBtn"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    ADD TENANT
                </button>

                {modalOpen && <Modal1 setOpenModal={setModalOpen}
                    animationType='slide'
                    transparent={true} />}


            </div>
            

            <div style={{ marginTop: "100px" }}>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            <th style={{ textAlign: "center" }}>Name</th>
                            <th style={{ textAlign: "center" }}>Email</th>
                            <th style={{ textAlign: "center" }}>Contact</th>
                            <th style={{ textAlign: "center" }}>Location</th>
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
                                    <td>{data[id].location}</td>
                                    <td>
                                        <Link to={`/update1/${id}`}>
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

export default Tenant;
