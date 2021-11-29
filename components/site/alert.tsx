import { useEffect, useContext } from 'react';
import { Box, Snackbar } from '@sparkpost/matchbox';
import { motion } from 'framer-motion';
import { AlertProps, AlertsContext } from 'context/alerts';
import styled from 'styled-components';
import css from '@styled-system/css';

const DISMISS_MILLISECONDS = 3000;

const MotionBox = styled(motion(Box))`
  ${css({
    pt: '500',
  })}
`;

const Alert = (props: AlertProps): JSX.Element => {
  const { id, title, status } = props;
  const { dispatch } = useContext(AlertsContext);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'removeAlert', id: id });
    }, DISMISS_MILLISECONDS);
  });

  return (
    <MotionBox
      key={id}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: [0, 1, 0.25, 1],
      }}
    >
      <Snackbar onDismiss={() => dispatch({ type: 'removeAlert', id: id })} status={status}>
        {title}
      </Snackbar>
    </MotionBox>
  );
};

export default Alert;
