import React, {useState, useEffect} from 'react'
import EmployeeService from "../services/EmployeeService";

function EmployeePage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchEmployeeData();
    }, [])

    const fetchEmployeeData = () => {
        console.log("Fetching employees..");

        EmployeeService.getAllEmployees().then((response) => {
            //console.log("DATA: " + JSON.stringify(response.data.data));
            setData(response.data.data);
            console.log("Employees fetched!");
        }).catch((error) => {console.log(error)});

    }

    return (
        <div>
            <h1>Employee Page</h1>
            {
                data.map((employee) => {
                    return(
                        <div key={employee.id} className="dataContainer">
                            <h4>Name: {employee.name}</h4>
                            <h4>Location: {employee.location}</h4>
                            <h4>City: {employee.city}</h4>
                            <h4>Number: {employee.number}</h4>
                            <h4>Country: {employee.country}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default EmployeePage