import React, { useEffect, useState } from 'react'
import './App.css';

import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './store/actions/index'

import Card from './components/Card'
import Detail from './components/Detail'

function App() {
  const dispatch = useDispatch()

  const { dataCustomers } = useSelector(state => state)

  const [page, setPage] = useState(true)
  const [currentCustomer, setCurrent] = useState(null)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpeg)`,
        backgroundRepeat: "repeat",
        objectFit: "contain",
        height: "100vh",
        width: "100%",
        margin: "0",
        paddingBottom: "3rem"
      }}
    >

      <h1
        style={{
          fontSize: '5em',
          fontFamily: "sans-serif",
          marginTop: "0rem",
          paddingTop: "3rem"
        }}
      >Find Out Your Email here!</h1>

      <div className="cards"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0 1.5rem 2rem 1.5rem"
        }}
      >
        {
          dataCustomers.map(customer => {
            return (
              page &&
              <Card customer={customer}
                setPage={setPage}
                page={page}
                setCurrent={setCurrent}
              />
            )
          })
        }
      </div>

      {
        !page &&
        <Detail customer={currentCustomer}
          setPage={setPage}
        />
      }
    </div>
  );
}

export default App;
