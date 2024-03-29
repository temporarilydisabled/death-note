/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useTypedSelector } from '../../shared/hooks/useTypedSelector';
import Backdrop from '../../shared/components/UIElements/Backdrop';
import VictimList from './VictimList';
import { User } from '../../shared/types';

const StyledUserItem = styled.div<{ isIdSame: boolean }>`
  background-color: ${(props) => (props.isIdSame ? '#888' : '#555')};
  color: ${(props) => (props.isIdSame ? '#222' : '#ccc')};
  border: ${(props) => (props.isIdSame ? '5px solid #ddd' : 'none')};
  border-radius: 20px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px;
  margin: 20px auto 0;
  padding: 30px 20px 20px;
  width: 85%;
  max-width: 1000px;
  cursor: pointer;
  & > span {
    background-color: #222;
    display: block;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    text-align: center;
    line-height: 50px;
  }
  & > div {
    margin-left: 30px;
    h3 {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }
    span {
      font-size: 1.1rem;
      display: block;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 699px) {
    width: 85%;
    padding: 10px;
    & > span {
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-size: 1.3rem;
    }
    & > div {
      margin-left: 10px;
      h3 {
        font-size: 1.1rem;
      }
      span {
        font-size: 1rem;
      }
    }
  }
`;

const UserItem: React.FC<{ user: User; idx: number }> = ({ user, idx }) => {
  const [showVictims, setShowVictims] = useState(false);
  const [isIdSame, setIsIdSame] = useState(false);
  const authState = useTypedSelector((state) => state.auth);

  const openVictimHandler = () => {
    setShowVictims(true);
  };

  const closeVictimHandler = () => {
    setShowVictims(false);
  };

  useEffect(() => {
    if (authState) {
      setIsIdSame(user.id === authState.id);
    }
  }, [authState]);

  return (
    <>
      {showVictims && <Backdrop onClick={closeVictimHandler} />}
      <StyledUserItem isIdSame={isIdSame} onClick={openVictimHandler}>
        <span>{idx}</span>
        <div>
          <h3>{`이름 : ${user.username}`}</h3>
          <span>{`최고 점수 : ${user.killedCount}`}</span>
          <span>{`응징한 범죄자 : ${user.victims.length}`}</span>
        </div>
        {showVictims && (
          <VictimList victims={user.victims} username={user.username} />
        )}
      </StyledUserItem>
    </>
  );
};

export default UserItem;
