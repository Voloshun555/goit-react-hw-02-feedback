import PropType from 'prop-types';

export const Notification = ({ name }) => {
  return <p>{name}</p>;
};

Notification.PropType = {
  name: PropType.string,
};
