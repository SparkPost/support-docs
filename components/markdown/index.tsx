import Heading from './heading';
import Paragraph from './paragraph';
import Code from './code';

type MarkdownComponentProps = {
  children?: React.ReactNode;
};

const components = {
  h1: (props: MarkdownComponentProps) => <Heading as="h1" {...props} />,
  h2: (props: MarkdownComponentProps) => <Heading as="h2" {...props} />,
  h3: (props: MarkdownComponentProps) => <Heading as="h3" {...props} />,
  h4: (props: MarkdownComponentProps) => <Heading as="h4" {...props} />,
  h5: (props: MarkdownComponentProps) => <Heading as="h5" {...props} />,
  h6: (props: MarkdownComponentProps) => <Heading as="h6" {...props} />,
  p: Paragraph,
  code: Code,
};

export default components;
