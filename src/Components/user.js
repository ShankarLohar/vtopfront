import React,{useState} from 'react';
import "./style.css";
import myimg from "../assets/img/tick.jpg"
function User() {

  const [show1,setShow1]=useState(false)
  const [show2,setShow2]=useState(false)
  

  const [show3,setShow3]=useState(false)
  const [show4,setShow4]=useState(false)

  const [show5,setShow5]=useState(false)
  const [show6,setShow6]=useState(false)

  const [show7,setShow7]=useState(false)
  const [show8,setShow8]=useState(false)

  const [show9,setShow9]=useState(false)
  const [show10,setShow10]=useState(false)

  const [show11,setShow11]=useState(false)
  const [show12,setShow12]=useState(false)

  const [show13,setShow13]=useState(false)
  const [show14,setShow14]=useState(false)

  const [show15,setShow15]=useState(false)
  const [show16,setShow16]=useState(false)

  const [show17,setShow17]=useState(false)
  const [show18,setShow18]=useState(false)

  const [show19,setShow19]=useState(false)
  const [show20,setShow20]=useState(false)

  const [show21,setShow21]=useState(false)
  const [show22,setShow22]=useState(false)

  const [show23,setShow23]=useState(false)
  const [show24,setShow24]=useState(false)

  const [show25,setShow25]=useState(false)
  const [show26,setShow26]=useState(false)

  const [show27,setShow27]=useState(false)
  const [show28,setShow28]=useState(false)

  const [show29,setShow29]=useState(false)
  const [show30,setShow30]=useState(false)

  const [show31,setShow31]=useState(false)
  const [show32,setShow32]=useState(false)

  const [show33,setShow33]=useState(false)
  const [show34,setShow34]=useState(false)

  const [show35,setShow35]=useState(false)
  const [show36,setShow36]=useState(false)

  const [show37,setShow37]=useState(false)
  const [show38,setShow38]=useState(false)

  const [show39,setShow39]=useState(false)
  const [show40,setShow40]=useState(false)

  const [show41,setShow41]=useState(false)
  const [show42,setShow42]=useState(false)

  const [show43,setShow43]=useState(false)
  const [show44,setShow44]=useState(false)

  const [show45,setShow45]=useState(false)
  const [show46,setShow46]=useState(false)

  const [show47,setShow47]=useState(false)
  const [show48,setShow48]=useState(false)

  const [show49,setShow49]=useState(false)
  const [show50,setShow50]=useState(false)

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
          <td>Aadhar no.</td>
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
          <td>PAN</td>
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

{/* newly added Start */}


        <tr>
          <td>Total Earnings</td>
          <td>
          <button onClick={()=>setShow3(!show3)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show3?<>
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
{/* ///////// */}


        <tr>
          <td>Exempted portion of HRA </td>
          <td>
          <button onClick={()=>setShow4(!show4)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show4?<>
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
{/* ///////// */}


        <tr>
          <td>Exempted portion of Education Allowance</td>
          <td>
          <button onClick={()=>setShow5(!show5)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show5?<>
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
{/* ///////// */}


        <tr>
          <td>Prof Tax</td>
          <td>
          <button onClick={()=>setShow6(!show6)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show6?<>
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
{/* ///////// */}


        <tr>
          <td>Income chargeble under the head Salaries</td>
          <td>
          <button onClick={()=>setShow7(!show7)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show7?<>
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
{/* ///////// */}


        <tr>
          <td>Other Income declared by employee</td>
          <td>
          <button onClick={()=>setShow8(!show8)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show8?<>
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
{/* ///////// */}


        <tr>
          <td>Gross Total Income</td>
          <td>
          <button onClick={()=>setShow9(!show9)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show9?<>
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
{/* ///////// */}


        <tr>
          <td>EPF</td>
          <td>
          <button onClick={()=>setShow10(!show10)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show10?<>
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
{/* ///////// */}


        <tr>
          <td>LIC Pension employee</td>
          <td>
          <button onClick={()=>setShow11(!show11)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show11?<>
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
{/* ///////// */}


        <tr>
          <td>LIC</td>
          <td>
          <button onClick={()=>setShow12(!show12)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show12?<>
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
{/* ///////// */}


        <tr>
          <td>NSC</td>
          <td>
          <button onClick={()=>setShow13(!show13)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show13?<>
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
{/* ///////// */}


        <tr>
          <td>PPF</td>
          <td>
          <button onClick={()=>setShow14(!show14)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show14?<>
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
{/* ///////// */}


        <tr>
          <td>5 Year Fixed Deposit</td>
          <td>
          <button onClick={()=>setShow15(!show15)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show15?<>
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
{/* ///////// */}


        <tr>
          <td>Tuition Fees</td>
          <td>
          <button onClick={()=>setShow16(!show16)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show16?<>
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
{/* ///////// */}


        <tr>
          <td>Housing Loan Principle repayment</td>
          <td>
          <button onClick={()=>setShow17(!show17)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show17?<>
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
{/* ///////// */}


        <tr>
          <td>Post office savings</td>
          <td>
          <button onClick={()=>setShow18(!show18)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show18?<>
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
{/* ///////// */}


        <tr>
          <td>Investment like UTI,LIC MF etc</td>
          <td>
          <button onClick={()=>setShow19(!show19)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show19?<>
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
{/* ///////// */}


        <tr>
          <td>Other investments eligible u/s 80c</td>
          <td>
          <button onClick={()=>setShow20(!show20)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show20?<>
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
{/* ///////// */}


        <tr>
          <td>Total Deductionu/s  80C</td>
          <td>
          <button onClick={()=>setShow21(!show21)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show21?<>
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
{/* ///////// */}


        <tr>
          <td>Restricted to Rs.150000</td>
          <td>
          <button onClick={()=>setShow22(!show22)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show22?<>
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
{/* ///////// */}


        <tr>
          <td>Investment in NPS(80 CCD)</td>
          <td>
          <button onClick={()=>setShow23(!show23)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show23?<>
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
{/* ///////// */}


        <tr>
          <td>Medical Insurance Premium u/s 80D -VIT</td>
          <td>
          <button onClick={()=>setShow24(!show24)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show24?<>
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
{/* ///////// */}


        <tr>
          <td>Medical Insurance Premium u/s 80D - Self</td>
          <td>
          <button onClick={()=>setShow25(!show25)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show25?<>
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
{/* ///////// */}


        <tr>
          <td>Total Eligible u/s 80 D</td>
          <td>
          <button onClick={()=>setShow26(!show26)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show26?<>
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
{/* ///////// */}


        <tr>
          <td>Deduction for disability u/s 80DD</td>
          <td>
          <button onClick={()=>setShow27(!show27)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show27?<>
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
{/* ///////// */}


        <tr>
          <td>Interest on Education Loan u/s 80E/80EE(HL)</td>
          <td>
          <button onClick={()=>setShow28(!show28)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show28?<>
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
{/* ///////// */}


        <tr>
          <td>Donation u/s 80G</td>
          <td>
          <button onClick={()=>setShow29(!show29)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show29?<>
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
{/* ///////// */}


        <tr>
          <td>Interest on Housing Loan</td>
          <td>
          <button onClick={()=>setShow30(!show30)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show30?<>
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
{/* ///////// */}


        <tr>
          <td>Standard Deduction</td>
          <td>
          <button onClick={()=>setShow31(!show31)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show31?<>
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
{/* ///////// */}


        <tr>
          <td>Taxable Salary</td>
          <td>
          <button onClick={()=>setShow32(!show32)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show32?<>
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
{/* ///////// */}


        <tr>
          <td>Tax on Salary</td>
          <td>
          <button onClick={()=>setShow33(!show33)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show33?<>
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
{/* ///////// */}


        <tr>
          <td>Cess @4%</td>
          <td>
          <button onClick={()=>setShow34(!show34)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show34?<>
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
{/* ///////// */}


        <tr>
          <td>Total Tax</td>
          <td>
          <button onClick={()=>setShow35(!show35)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show35?<>
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
{/* ///////// */}


        <tr>
          <td>Tax Deducted at Source by VIT</td>
          <td>
          <button onClick={()=>setShow36(!show36)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show36?<>
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
{/* ///////// */}


        <tr>
          <td>Balance tax to be deducted </td>
          <td>
          <button onClick={()=>setShow37(!show37)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show37?<>
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
{/* ///////// */}


        <tr>
          <td>Tax deducted by Previous Employer</td>
          <td>
          <button onClick={()=>setShow38(!show38)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show38?<>
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
{/* ///////// */}


        <tr>
          <td>Total tax deducted</td>
          <td>
          <button onClick={()=>setShow39(!show39)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show39?<>
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
{/* ///////// */}


        <tr>
          <td>Salary for HRA Calculation</td>
          <td>
          <button onClick={()=>setShow40(!show40)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show40?<>
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
{/* ///////// */}


        <tr>
          <td>Salary for HRA Calculation - Annualised</td>
          <td>
          <button onClick={()=>setShow41(!show41)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show41?<>
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
{/* ///////// */}


        <tr>
          <td> Annual Actual rent paid </td>
          <td>
          <button onClick={()=>setShow42(!show42)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show42?<>
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
{/* ///////// */}


        <tr>
          <td>10% of salary</td>
          <td>
          <button onClick={()=>setShow43(!show43)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show43?<>
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
{/* ///////// */}


        <tr>
          <td>Rent paid in excess of 10% of salary</td>
          <td>
          <button onClick={()=>setShow44(!show44)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show44?<>
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
{/* ///////// */}


        <tr>
          <td> 40% of salary</td>
          <td>
          <button onClick={()=>setShow45(!show45)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show45?<>
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
{/* ///////// */}


        <tr>
          <td>Annualised HRA</td>
          <td>
          <button onClick={()=>setShow46(!show45)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show46?<>
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
{/* ///////// */}


        <tr>
          <td>House Rent Alowance</td>
          <td>
          <button onClick={()=>setShow47(!show47)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show47?<>
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
{/* ///////// */}


        <tr>
          <td>Exempted portion of HRA</td>
          <td>
          <button onClick={()=>setShow48(!show48)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show48?<>
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
{/* ///////// */}


        <tr>
          <td>Earning</td>
          <td>
          <button onClick={()=>setShow49(!show49)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show49?<>
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
{/* ///////// */}


        <tr>
          <td>Tax</td>
          <td>
          <button onClick={()=>setShow50(!show50)} defaultValue="SGST" ><img src={myimg} alt="My image" ></img></button>
          </td>
        </tr>
        {
              show50?<>
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
{/* ///////// */}



            {/* newly added ended */}
      </tbody>
    </table>
  </div>
  {/* table end*/}
</div>
)
}

export default User
