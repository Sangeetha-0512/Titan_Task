// import logo from './logo.svg';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import {Routes,Route,Link} from'react-router-dom'
// import { useEffect,useState } from 'react';
// import axios from 'axios';
// import Product from './Compont/Product';

// function App() {
//   const [userdata,setuserdata]=useState();
//   // const [showprice,setshowprice]=useState(false);
//   const handleSubmit =async()=>{
//     try{
//       const res= await axios.get('https://fakestoreapi.com/products');
//       const response=await res.data;
//       console.log(response);
//       setuserdata(response);
//     }catch(e)
//     {

//     }
//   };
// //  const handleprice=async()=>{
// //    setshowprice(true);
// //  }

//   // useEffect(()=>{
//   //   handleSubmit();
//   // },[])
//   return (
//     <div className='container'>
//       {/* {userdata &&<h4>{userdata.ids}</h4>} */}
//       {userdata && userdata.map((userdata)=>{
//         return  <Product userdata={userdata}/>
//       })}
//       <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Click Here</button>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import axios from 'axios';
// import Product from './Compont/Product';

// function App() {
//   const [userdata, setUserdata] = useState();

//   const handleSubmit = async () => {
//     try {
//       const res = await axios.get('https://fakestoreapi.com/products');
//       const response = res.data;
//       console.log(response);
//       setUserdata(response);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         {userdata && userdata.map((userdata) => (
//           <div className="col-md-3 mb-4" key={userdata.id}> {/* Sets each product in its own column */}
//             <Product userdata={userdata} />
//           </div>
//         ))}
//       </div>
//       <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
//         Click Here
//       </button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

function App() { 
  const [inputdata,setinputdata]=useState({
    fname:'',
    lname:'',
    email:'',
    phno:''
  })
  const [saveddata,setsaveddata]=useState([]);
  const[editing,setediting]=useState(false);
  const [editindex,seteditindex]=useState();
  const handleinput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setinputdata({...inputdata,[name]:value});
  }

  const handlesubmit = () => {
    if (editing) {
      const temparray = saveddata.map((data, index) => 
        index === editindex ? inputdata : data
      );
      setsaveddata(temparray);
      setediting(false);
      seteditindex(null);
    } else {
      setsaveddata([...saveddata, inputdata]);
    }
  
    setinputdata({
      fname: '',
      lname: '',
      email: '',
      phno: '',
      add:''
    });
  };
  const handledelete=(index)=>{
    console.log(index);
    const temp=[...saveddata];
    temp.splice(index,1);
    setsaveddata(temp)
  }
  const handleedit=(index)=>{
   
      setediting(true);
      seteditindex(index);
      setinputdata(saveddata[index])
  }
  return (
    <div className="container" data-bs-theme="info">
      <div className="row" >
        {/* form */}
        <div className="col-6 mt-5" >
          <div className="mb-3">
            <label  className="form-label">
              First Name
            </label><br></br>
            <input
            className="form-control"
              type="text"
              name="fname"
              value={inputdata.fname}
              placeholder="Enter first name"
              onChange={handleinput}
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Last Name
            </label><br></br>
            <input
            className="form-control"
              type="text"
              name="lname"
              value={inputdata.lname}
              placeholder="Enter last name"
              onChange={handleinput}
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">email
            </label><br></br>
            <input
            className="form-control"
              type="email"
              name="email"
              value={inputdata.email}
              placeholder="Enter email"
              onChange={handleinput}
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Phone number
            </label><br></br>
            <input
            className="form-control"
              type="number"
              name="phno"
              value={inputdata.phno}
              placeholder="Enter phno"
              onChange={handleinput}
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Address
            </label><br></br>
            <input
            className="form-control"
              type="text"
              name="add"
              value={inputdata.add}
              placeholder="Enter your address"
              onChange={handleinput}
            />
          </div>
          <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
           
          </div>
        </div>
        {/* table  */}
        <div className="col-6 mt-5">
        <table className="table">
  <thead>
    <tr>
      <th >S.No</th>
      <th >First</th>
      <th >Last</th>
      <th>Email</th>
      <th>Phno</th>
      <th>Address</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {saveddata.map((data,index)=>{
      return  <tr>
      <th>{index+1}</th>
      <td>{data.fname}</td>
      <td>{data.lname}</td>
      <td>{data.email}</td>
      <td>{data.phno}</td>
      <td>{data.add}</td>
      <td><button className="btn btn-primary" onClick={()=>{handleedit(index)}}>Edit</button></td>
      <td><button className="btn btn-danger" onClick={()=>{handledelete(index)}}>Delete</button></td>
    </tr>
    })}
   
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
}
export default App;
