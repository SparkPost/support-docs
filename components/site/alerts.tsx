import { useContext } from 'react';
import { Box } from '@sparkpost/matchbox';
import { AnimatePresence } from 'framer-motion';
import { AlertsContext } from 'context/alerts';
import Alert from 'components/site/alert';

const Alerts = (): JSX.Element => {
  const { state } = useContext(AlertsContext);

  return (
    <Box position="fixed" right="500" top="0px" display="flex" flexDirection="column" zIndex="100">
      <AnimatePresence>
        {state.alerts.map(alert => {
          return (
            <Alert key={alert.id} {...alert} />
          )
        })}
      </AnimatePresence>
    </Box>
  )
}

export default Alerts;