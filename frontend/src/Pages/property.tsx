import React, { useEffect, useState } from 'react';
import axios from 'axios';
import base_api from '../config';

function Property() {
    const [property, setProperty] = useState<PropertyData | null>(null);

    useEffect(() => {
        const url = `${base_api}api/properties/12/`;

        axios.get<PropertyData>(url)
            .then(function (response) {
                setProperty(response.data);
            })
            .catch(function (error) {
                setProperty(null);
            });
    }, []);

    return (
        <div className="Property">
            {property != null && <h1>{property.address}</h1>}
            {property != null && <p>{property.description}</p>}
        </div>
    );
}

export default Property;