import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  background-color: #000;
  text-decoration: none;
  font-size: 1.6rem;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 20px 30px;
  margin: 30px;
  @media (max-width: 699px) {
    font-size: 1.2rem;
    padding: 10px 20px;
    margin: 10px;
  }
`;

const LinkButton: React.FC<{ href: string }> = ({ href, children }) => {
  return <StyledLink to={href}>{children}</StyledLink>;
};

export default LinkButton;
