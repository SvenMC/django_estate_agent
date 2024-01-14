import React from "react";
import config from "../config";

export default function Home() {

  console.log(config.mapApiKey)
  return (
    <div className="Home">
      <h1 className="text-4xl">Home page</h1>
    </div>
  );
}
