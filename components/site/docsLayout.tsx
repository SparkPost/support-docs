import Layout from './layout';

type LayoutProps = {
  children?: React.ReactNode;
};

const DocsLayout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return <Layout navigationComponent={<div>Nav goes here</div>}>{children}</Layout>;
};

export default DocsLayout;
