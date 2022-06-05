import React from 'react';
import "./style.css";
import myimg from "../assets/img/tick.jpg"
import docimg from "../assets/img/doc.jpg"
function Homeadmin() {
  return (
    <div className="hero">
  {/* deadline start */}
  <div className="deadline">
    <h3>Deadline is 29/06/2022</h3>
  </div>
  {/* deadline end */}
  {/* table start*/}
  <div className="table">
    <table>
      <tbody>
        <tr>
          <th>Name of the Faculty</th>
          <th>Designation</th>
          <th>School / Centre</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Name1</td>
          <td>Designation1</td>
          <td>School of cse</td>
          <td><a href={docimg} target="_blank"><img src={myimg} alt="My_Img" height="50" width="50"/></a></td>
        </tr>
        <tr>
          <td>Name2</td>
          <td>Designation2</td>
          <td>School of cse</td>
          <td><a href={docimg} target="_blank"><img src={myimg} alt="My_Img" height="50" width="50"/></a></td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* table end*/}
</div>

  )
}

export default Homeadmin