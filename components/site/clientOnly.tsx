import { getWindow } from 'utils/ssr';

export type ClientOnlyTypes = {
  children?: React.ReactNode;
};

const ClientOnly = ({ children }: ClientOnlyTypes): JSX.Element | null => {
  return <div suppressHydrationWarning>{getWindow() ? children : null}</div>;
};

export default ClientOnly;
