import PropTypes from 'prop-types';
import { PrContainer } from './Container.styled';

export const Container = ({ children }) => {
  return <PrContainer>{children}</PrContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
