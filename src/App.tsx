import React, { useState, useEffect } from "react";
import Fingers from "./Components/Finger";
import Navbar from "./Components/Navbar";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://www.tietomato.com/dropouts/fingers.php")
      .then((response) => response.json())
      .then((responseJson: any) => {
        console.log("data", responseJson);
        setData(responseJson.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>The DoorBell</h1>

      {/* <Navbar /> */}

      {data ? <Fingers fingers={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
