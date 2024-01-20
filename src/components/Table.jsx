import { cars } from "../data";

export default function Table() {
  const [buggae, lambourghini] = cars;

  const {
    speedStats: { topSpeed: buggaePash2 },
  } = buggae;
  const {
    speedStats: { topSpeed: lambourghiniPash2 },
  } = lambourghini;

  const {
    color: [itom, pula, puti],
  } = buggae;

  const {
    color: [negro, asul, foil, misay],
  } = lambourghini;

  return (
    <div className="prac-table">
      {" "}
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{buggae.model}</td>
            <td>{buggaePash2}</td>
            <td>{itom}</td>
          </tr>
          <tr>
            <td>{lambourghini.model}</td>
            <td>{lambourghiniPash2}</td>
            <td>{misay}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
