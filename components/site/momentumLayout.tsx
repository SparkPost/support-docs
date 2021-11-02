import MomentumNavigation from 'components/site/momentumNavigation';
import Layout from './layout';

type LayoutProps = {
  children?: React.ReactNode;
};

const MomentumLayout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return <Layout navigationComponent={<MomentumNavigation />}>{children}</Layout>;
};

export default MomentumLayout;
