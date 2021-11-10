import { useContext } from 'react';
import { Box, Snackbar } from '@sparkpost/matchbox';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertsContext } from 'context/alerts';
import styled from 'styled-components';
import css from '@styled-system/css';

const MotionBox = styled(motion(Box))`
  ${css({
    pt: '500'
  })}
`;

const Alerts = (): JSX.Element => {
  const { state, dispatch } = useContext(AlertsContext);

  return (
    <Box position="fixed" right="500" top="0px" display="flex" flexDirection="column" zIndex="100">
      <AnimatePresence>
        {state.alerts.map(alert => {
          return (
            <MotionBox 
              key={alert.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0, 1, 0.25, 1]
              }}
            >
              <Snackbar onDismiss={() => dispatch({ type: 'removeAlert', id: alert.id })} status={alert.status}>
                {alert.title}
              </Snackbar>
            </MotionBox>
          )
        })}
      </AnimatePresence>
    </Box>
  )
}

export default Alerts;