import Layout from './layout';
import { NavigationItemProps } from './baseNavigation';
import Navigation from './navigation';

type LayoutProps = {
  children?: React.ReactNode;
  navigationData?: NavigationItemProps[];
};

const DocsLayout = (props: LayoutProps): JSX.Element => {
  const { children, navigationData } = props;
  return (
    <Layout
      navigationComponent={
        <Navigation data={navigationData} title="Documentation" titleLink="/docs" />
      }
    >
      {children}
    </Layout>
  );
};

export default DocsLayout;
