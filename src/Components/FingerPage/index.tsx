import React, { useEffect, useState } from "react";
import "./FingerPage.css";

interface Finger {
  print: string;
  timestamp: string;
}

const FingersPage = () => {
  const [data, setData] = useState<Finger[] | null>();

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

  if (!data?.length) return <p>Empty</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Print</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((finger, index) => (
          <tr key={index}>
            <td>{finger.print}</td>
            <td>{finger.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FingersPage;
