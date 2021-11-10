import React from 'react';
import { SnackbarProps } from '@sparkpost/matchbox';
import { createContext, useReducer } from 'react';

export type AlertProps = Pick<SnackbarProps, 'status'> & {
  title: string;
  id: string;
}

type StateProps = {
  alerts: AlertProps[];
}

const initialState: StateProps = { alerts: [] }

export const AlertsContext = createContext<{
  state: StateProps;
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
});

export const AlertsProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  
  let reducer = (state: StateProps, action: any): StateProps => {
    switch(action.type) {
      case 'addAlert':
        return {
          alerts: [
            ...state.alerts,
            action.alert
          ]
        };
      case 'removeAlert':
        return {
          alerts: [
            ...state.alerts.filter(alert => {
              return alert.id !== action.id
            })
          ]
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AlertsContext.Provider value={{ state, dispatch }}>
      {children}
    </AlertsContext.Provider>
  )
}