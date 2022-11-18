import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



// function App() {
//   var x=45,y=4;
//   return (
//     <>
//     <h2>this is expressin </h2>
//     <h4>{x}{"<"}{y}{":"}{x <y ? 'true':'false'}</h4>
//     </>
//   );
// }

// function App() {
  // let element =null;
  // let islogin=false;
  // if(islogin){
  //   element=<h1>wellcome admin</h1>
  // }else{
  //   element=<h2>Login</h2>
  // }
  // return <>{element}</>
// }

// function App() {
//   let islogin=true
//   return islogin ?<h2>wellcome</h2>: <h2>Login</h2>
// }

// function App() {
//   let element =null;
//   let islogin=false;
//   islogin ? (element=<h1>wellcome</h1>):(element=<h1>Login</h1>);
//   return <>{element}</>
// }

// function App(){
//   let age=57;
//   let element=null;
//   if (age>50){
//     element="you are verry old"
//   }else{
//     element="you are young"
//   }
//   return <>
//   <h1>{element}</h1>
//   </>
// }


// function App() {
//   var employees = [
//     { empId: 1234, name: "John", designation: "SE" },
//     { empId: 4567, name: "Tom", designation: "SSE" },
//     { empId: 8910, name: "Kevin", designation: "TA" },
//   ];
//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>EmpID</th>
//             <th>Name</th>
//             <th>Designation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => {
//             return (
//               <tr key={employee.empId}>
//                 <td>{employee.empId}</td>
//                 <td>{employee.name}</td>
//                 <td>{employee.designation}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }

// import React from "react";

function App(){
return(
<button className="btn btn-success">Submit</button>);
}

export default App;
