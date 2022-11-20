import PropTypes from 'prop-types';
import { Container } from './Container.styled';

export const Container = ({ children }) => {
  return <Container>{children}</Container>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
