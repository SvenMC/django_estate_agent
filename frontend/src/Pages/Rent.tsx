import React, { useEffect, useState } from "react";
import axios from "axios";
import base_api from "../config";
import { Link, useParams } from "react-router-dom";
import PropertyIndex from "../Components/PropertyIndex";

export default function Rent() {
    const propertyType: string = "rent"

  return (
    <PropertyIndex propertyType={propertyType}/>
  );
}
