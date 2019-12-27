import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  color: #000;
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: ${({ variant }) => (
    ((variant === 'primary') && '#000') || ((variant === 'secondary') && '#999')
  )};
`;

Paragraph.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Paragraph.defaultProps = {
  variant: 'primary',
};

const Copyright = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ccc;
`;

export { Title, Paragraph, Copyright };
