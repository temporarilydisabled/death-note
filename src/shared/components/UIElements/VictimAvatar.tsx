import styled from 'styled-components';

import { Victim } from '../../types/index';

const StyledVictimItem = styled.li`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  margin: 10px;
  width: 120px;
  height: auto;
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  span {
    color: red;
    font-size: 1.1rem;
  }
  @media (max-width: 699px) {
    width: 100px;
    img {
      width: 65px;
      height: 65px;
    }
    span {
      font-size: 1rem;
    }
  }
`;
const VictimItem: React.FC<{ victim: Victim }> = ({ victim }) => {
  return (
    <StyledVictimItem>
      <img src={victim.img} alt={victim.name} />
      <span>{victim.name}</span>
    </StyledVictimItem>
  );
};

export default VictimItem;
