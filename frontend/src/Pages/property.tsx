import React, { useEffect, useState } from 'react';
import axios from 'axios';
import base_api from '../config';
import { useParams } from 'react-router-dom';

function Property() {
    const { id } = useParams();
    const [property, setProperty] = useState<PropertyData | null>(null);

    useEffect(() => {
        const url = `${base_api}api/properties/${id}/`;

        axios.get<PropertyData>(url)
            .then(function (response) {
                setProperty(response.data);
            })
            .catch(function (error) {
                setProperty(null);
            });
    }, [id]);

    return (
        <div className="Property">
            {property != null && <h1>{property.address}</h1>}
            {property != null && <p>{property.description}</p>}
        </div>
    );
}

export default Property;