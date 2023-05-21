import PropType from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

Section.propType = {
  Title: PropType.string,
  children: PropType.element,
};
