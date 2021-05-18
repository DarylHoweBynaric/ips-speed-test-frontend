import React, {useEffect, useState} from 'react'
import PropertyService from "../services/PropertyService";

function PropertyPage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchPropertyData();
    }, [])

    const fetchPropertyData = () => {
        console.log("Fetching properties..");

        PropertyService.getAllProperties().then((response) => {
            //console.log("DATA: " + JSON.stringify(response.data.data));
            setData(response.data.data);
            console.log("Properties fetched!");
        }).catch((error) => {console.log(error)});
    }
    return (
        <div>
            <h1>Property Page</h1>
            {
                data.map((property) => {
                    return(
                        <div key={property.id} className="dataContainer">
                            <h4>Name: {property.name}</h4>
                            <h4>Location: {property.location}</h4>
                            <h4>City: {property.city}</h4>
                            <h4>Number: {property.number}</h4>
                            <h4>Country: {property.country}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PropertyPage
