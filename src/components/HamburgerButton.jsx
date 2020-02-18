import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerButtonWrapper = styled.div`
  width: 25px;
  height: 25px;
  transition: all 0.3s ease-in-out;
  display: block;
  cursor: pointer;
  & span {
    width: 25px;
    height: 3px;
    background-color: ${(props) => (props.color ? props.color : '#3f3f3f')};
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    display: block;
    cursor: pointer;
  }
  & span:nth-child(2) {
    opacity: ${(props) => (props.isActive ? '0' : '1')};
  }
  & span:nth-child(1) {
    transform: ${(props) => (props.isActive ? 'translateY(8px) rotate(45deg)' : '')};
  }
  & span:nth-child(3) {
    transform: ${(props) => (props.isActive ? 'translateY(-8px) rotate(-45deg)' : '')};
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const HamburgerButton = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { color, id, className } = props;

  const handleHamburgerClick = (event) => {
    event.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <HamburgerButtonWrapper
      isActive={isActive}
      onClick={handleHamburgerClick}
      color={color}
      id={id}
      className={className}
    >
      <span />
      <span />
      <span />
    </HamburgerButtonWrapper>
  );
};

export default HamburgerButton;
