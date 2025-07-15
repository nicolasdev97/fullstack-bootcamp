import { useState } from "react";

const Ejercicio2 = () => {
  // Guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const BtnComponent = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  );

  const StatisticsLine = ({ text, value }) => {
    return (
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const Statistics = ({ good, neutral, bad }) => {
    const totalClicks = good + neutral + bad;
    const average = (good - bad) / totalClicks || 0; // Evita división por cero
    const positive = (good / totalClicks) * 100 || 0; // Evita división por cero

    if (totalClicks === 0) {
      return <p>No feedback given</p>;
    }
    return (
      <div>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={totalClicks} />
        <StatisticsLine text="average" value={average.toFixed(1)} />
        <StatisticsLine text="positive" value={`${positive.toFixed(1)}%`} />
      </div>
    );
  };

  return (
    <div>
      <h2>Give feedback</h2>
      <BtnComponent text="good" handleClick={() => setGood(good + 1)} />
      <BtnComponent
        text="neutral"
        handleClick={() => setNeutral(neutral + 1)}
      />
      <BtnComponent text="bad" handleClick={() => setBad(bad + 1)} />
      <h2>Stadistics</h2>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default Ejercicio2;
