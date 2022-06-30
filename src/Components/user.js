import React,{useState} from 'react';
import "./style.css";
import myimg from "../assets/img/tick.jpg"
function User() {
  const [show1,setShow1]=useState(false)
  const [show2,setShow2]=useState(false)
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
          <th>List of Policies</th>
          <th>Checkbox</th>
        </tr>
        <tr>
          <td>CGST(9%)</td>
          <td>
            
            <button onClick={()=>setShow1(!show1)} defaultValue="CGST" ><img src={myimg} alt="My image" ></img></button>
            
          </td>
        </tr>
        {
              show1?<>
        <tr>
          <td>Amount
              <input type="text" placeholder="Amount" /></td>
          <td>
              <br/>
              
              Document
              <input type="file" placeholder="upload" />
            </td>
        </tr>
        </>:null
            }
        <tr>
          <td>SGST(9%)</td>
          <td>
          <button onClick={()=>setShow2(!show2)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show2?<>
        <tr>

          <td>Amount
              <input type="text" placeholder="Amount" /></td>
          <td>
              <br/>
              
              Document
              <input type="file" placeholder="upload" />
            </td>
        </tr>
        </>:null
            }
      </tbody>
    </table>
  </div>
  {/* table end*/}
</div>
)
}

export default User
