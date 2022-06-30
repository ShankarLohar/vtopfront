import React,{useState} from 'react';
import "./style.css";
import myimg from "../assets/img/tick.jpg"
import docimg from "../assets/img/doc.jpg"
function Homeadmin() {
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
          <th>Name of the Faculty</th>
          <th>Designation</th>
          <th>School / Centre</th>
          <th>Action</th>
          <th>Details</th>
        </tr>
        <tr>
          <td>Name1</td>
          <td>Designation1</td>
          <td>School of cse</td>
          <td><a href={docimg} target="_blank"><img src={myimg} alt="My_Img" height="50" width="50"/></a></td>
          <td>
            
            <button onClick={()=>setShow1(!show1)} defaultValue="CGST" ><img src={myimg} alt="My image" ></img></button>
            
          </td>
        </tr>
        {
              show1?<>
        <tr className='onclick'>
          <td>Total Earnings:- xxxxx</td>
          <td>
              <br/>
              
              Exempted portion of HRA:- xxxxx
            </td>
          <td>
              <br/>
              
              Prof Tax:- xxxxx
            </td>
          <td>
              <br/>
              
              Category:- T
            </td>
          <td>
              <br/>
              
              DOJ:- 21-07-17
            </td>
        </tr>
        </>:null
            }
        <tr>
          <td>Name2</td>
          <td>Designation2</td>
          <td>School of cse</td>
          <td><a href={docimg} target="_blank"><img src={myimg} alt="My_Img" height="50" width="50"/></a></td>
          <td>
          <button onClick={()=>setShow2(!show2)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        
        {
              show2?<>
              
        <tr className='onclick'>
          <td>Total Earnings:- xxxxx</td>
          <td>
              <br/>
              
              Exempted portion of HRA:- xxxxx
            </td>
          <td>
              <br/>
              
              Prof Tax:- xxxxx
            </td>
          <td>
              <br/>
              
              Category:- T
            </td>
          <td>
              <br/>
              
              DOJ:- 21-07-17
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

export default Homeadmin