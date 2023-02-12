import React, { useEffect, useState } from "react";
import { REGISTERED_USERS } from "../../utils/apis";
import { getTimeAgo } from "../../utils/date-utils";
import "./FingerPage.css";

interface Finger {
  print: string;
  timestamp: string;
}

const FingersPage = () => {
  const [data, setData] = useState<Finger[] | null>();

  useEffect(() => {
    fetch(REGISTERED_USERS)
      .then((response) => response.json())
      .then((responseJson: { data: Finger[] }) => {
        setData(responseJson.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!data?.length) return <p>Empty List</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Print</th>
        </tr>
      </thead>
      <tbody>
        {data
          .sort((a, b) => b.timestamp.localeCompare(a.timestamp))
          .map((finger, index) => (
            <tr key={index}>
              <td>{getTimeAgo(finger.timestamp)}</td>
              <td>{finger.print}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default FingersPage;
