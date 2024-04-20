import React, { useEffect } from 'react'
import './Table.css'
import { table_values } from '../../ApiData'


const makeStyle = (status) => {


  if (status === "Approved") {
    return {
      background: "rgb(145 254 158 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};


function Table(){
  return (
    <div className="table-container">
      <table className='table' style={{height:'200px', overflow: 'auto' }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Tracking ID</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            table_values.map((item)=>(
              <tr key={item.id}>
                <td className='td'>{item.name}</td>
                <td className='td'>{item.trackingId}</td>
                <td className='td'>{item.date}</td>
                <td className="status td" style={makeStyle(item.status)}>{item.status}</td>
                <td className='details td'>Details</td>
  
  
  
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

    )
  }

export default Table



















