import React from 'react';
import { CSSTransition } from 'react-transition-group';

type Props = {
  listener: boolean,
  animation: 'slide' | 'fade' | 'slideWithOpacity',
  transitionTime: number,
  unmountOnEnd: boolean,
  children: React.ReactNode,
};

export default function Animated({
  listener,
  animation,
  transitionTime,
  unmountOnEnd,
  children,
}: Props) {
  return (
    <CSSTransition
      classNames={animation}
      in={listener}
      timeout={transitionTime}
      unmountOnExit={unmountOnEnd}
    >
      {children}
    </CSSTransition>
  );
}
