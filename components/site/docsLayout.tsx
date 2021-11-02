import Layout from './layout';
import DocsNavigation from './docsNavigation';

type LayoutProps = {
  children?: React.ReactNode;
};

const DocsLayout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return <Layout navigationComponent={<DocsNavigation />}>{children}</Layout>;
};

export default DocsLayout;
