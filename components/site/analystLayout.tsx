import Layout from './layout';
import AnalystNavigation, { NavigationItemProps } from 'components/site/analystNavigation';

type LayoutProps = {
  children?: React.ReactNode;
  navigationData?: NavigationItemProps[];
};

const AnalystLayout = (props: LayoutProps): JSX.Element => {
  const { children, navigationData } = props;
  return (
    <Layout
      hideDrawerButtons={true}
      navigationComponent={
        <AnalystNavigation data={navigationData} title="Analyst Documentation" titleLink="/analyst" />
      }
    >
      {children}
    </Layout>
  );
};

export default AnalystLayout;
