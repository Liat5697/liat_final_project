import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {

const[name,setName] = useState("");
const[age,setAge] = useState(0);
const[country,setCountry] = useState("");
const[position,setPosition] = useState("");
const[wage,setWage] = useState(0);
const[employeeList,setEmployeeList] = useState([]);

const addEmployee = async () => {
  try {
    
    const res = await Axios.post('http://localhost:3001/create',{
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage
    })
    const {data} = res
    console.log('data', data, 'res', res);
    
  } catch (error) {
    console.log(error);
    
  }
};

const getEmployees = () =>{
    
Axios.get('http://localhost:3001/employees').then((response) => {
setEmployeeList(response.data);
});
}
  return (
    <div className="App">
      <div className="information">
    <label>name:</label>
    <input type="text" 
         onChange={(event) => {
         setName(event.target.value);
  }}
  />
    <label>age:</label>
    <input type="number"
         onChange={(event) => {
          setAge(event.target.value);
    }}
    />
    <label>country:</label>
    <input type="text"     
         onChange={(event) => {
         setCountry(event.target.value);
  }}
  />
    <label>position:</label>
    <input type="text"    
         onChange={(event) => {
         setPosition(event.target.value);
  }}
  />
    <label>wage (year):</label>
    <input type="number"     
         onChange={(event) => {
         setWage(event.target.value);
  }}
  />
    <button onClick={() => addEmployee()}>add employee</button>
     </div>
<div className="employees">
<button onClick={getEmployees}>Show Employees</button>

{employeeList.map((val, key) => {
  return(
    <div className="employee">
    <h3>name: {val.name}</h3>
    <h3>age: {val.age}</h3>
    <h3>country: {val.country}</h3>
    <h3>position: {val.position}</h3>
    <h3>wage: {val.wage}</h3>
  </div>
);
})}
 </div>
</div>
  );
}

export default App;
