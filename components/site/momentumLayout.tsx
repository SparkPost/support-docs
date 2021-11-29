import Navigation from 'components/site/navigation';
import Layout from './layout';
import data from 'content/momentum/navigation.yml';

type LayoutProps = {
  children?: React.ReactNode;
};

const MomentumLayout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <Layout
      navigationComponent={
        <Navigation data={data} title="Momentum Documentation" titleLink="/momentum" />
      }
    >
      {children}
    </Layout>
  );
};

export default MomentumLayout;
