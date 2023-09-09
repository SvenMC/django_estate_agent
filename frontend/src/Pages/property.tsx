import axios, * as others from 'axios';

function getProperty(): string {

  const url = "http://127.0.0.1:8000/api/properties/12/";
  const response = axios.get(url);
  var text: string = response.toString();
  return text;

}


function Property() {
  const property = getProperty();
  return (
    <div className="Property">
      <h1>{property}</h1>
    </div>
  );
}

export default Property;
