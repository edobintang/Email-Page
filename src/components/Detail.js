import React from 'react'

export default function Detail({ customer, setPage }) {
    return (
        <>
           <button
           style={{
                width: "100px",
                margin: "1rem",
                backgroundColor: "wheat",
                borderRadius: "10px"
           }}

           onClick={(e) => {
               e.preventDefault()
               setPage(true)
           }}
           >
               Back
           </button>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div
                    style={{
                        height: "400px",
                        width: "400px",
                        backgroundColor: "wheat",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "15px"
                    }}
                >
                    <h3>{customer.email}</h3>
                    <h3>{customer.nama}</h3>
                    <h3>{customer.telepon}</h3>
                    <h3>{customer.alamat}</h3>
                </div>
            </div>
        </>
    )
}