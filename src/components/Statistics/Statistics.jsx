import PropType from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral} </li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivFeedback}%</li>
      </ul>
    </div>
  );
};

Statistics.propType = {
  good: PropType.number.isRequired,
  neutral: PropType.number.isRequired,
  bad: PropType.number.isRequired,
  total: PropType.number.isRequired,
  positivFeedback: PropType.number.isRequired,
};
