import React, { useState } from 'react'

import Detail from './Detail'

export default function Card({ customer, setPage, page, setCurrent }) {
    function toDetail() {
        setPage(false)
        setCurrent(customer)
    }

    return (
        <>
            <a href="#"
                style={{
                    width: "32%",
                    height: "250px",
                    backgroundColor: "lightsteelblue",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0.5rem",
                    textDecoration: "none",
                    borderRadius: "10px"
                }}

                onClick={(e) => {
                    e.preventDefault()

                    toDetail()
                }}
            >
                <div>
                    <h3
                        style={{
                            color: "black"
                        }}
                    >{customer.email}</h3>
                </div>
            </a>
        </>
    )
}