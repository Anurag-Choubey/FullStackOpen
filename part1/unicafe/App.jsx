import React, { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>;

const Statistics = ({ good, neutral, bad }) => {
  const getTotal = () => good + neutral + bad;
  const getAverage = () => getTotal() / 3; // changed to calculate the correct average
  const getPositivePercentage = () => (good / getTotal()) * 100 + " %";

  // Check if any feedback has been given
  if (getTotal() === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
        <StatisticLine value={good} text="good" />
        <StatisticLine value={neutral} text="neutral" />
        <StatisticLine value={bad} text="bad" />
        <StatisticLine value={getTotal()} text="all" />
        <StatisticLine value={getAverage()} text="average" />
        <StatisticLine value={getPositivePercentage()} text="positive" />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood((prevGood) => prevGood + 1);
  const handleNeutralClick = () => setNeutral((prevNeutral) => prevNeutral + 1);
  const handleBadClick = () => setBad((prevBad) => prevBad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
