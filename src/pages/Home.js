import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    return (

        <div>
            <h2>
                Welcome ! Choose the list
            </h2>

            <Link to="/tenant">
                <p

                >
                    Tenant List
                </p>
            </Link>
            <Link to="/user">
                <p

                >
                    User List
                </p>
            </Link>

        </div>
    )
}

export default Home
