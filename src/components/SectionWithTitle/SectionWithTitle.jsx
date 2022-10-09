import { Title } from './SectionWithTitle.styled';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
