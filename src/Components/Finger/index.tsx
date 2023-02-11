import React from "react";
import "./Finger.css";

interface Finger {
  print: string;
  timestamp: string;
}

interface Props {
  fingers: Finger[];
}

const Fingers: React.FC<Props> = ({ fingers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Print</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {fingers.map((finger, index) => (
          <tr key={index}>
            <td>{finger.print}</td>
            <td>{finger.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Fingers;
