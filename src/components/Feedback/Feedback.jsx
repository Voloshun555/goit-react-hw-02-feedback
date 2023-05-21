import PropType from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

Feedback.propType = {
  options: PropType.arrayOf(PropType.string.isRequired).isRequired,
};
