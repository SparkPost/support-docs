import Heading from './heading';
import Paragraph from './paragraph';

type MarkdownComponentProp = {
  children?: React.ReactNode;
};

const components = {
  h1: (props: MarkdownComponentProp) => <Heading as="h1" {...props} />,
  h2: (props: MarkdownComponentProp) => <Heading as="h2" {...props} />,
  h3: (props: MarkdownComponentProp) => <Heading as="h3" {...props} />,
  h4: (props: MarkdownComponentProp) => <Heading as="h4" {...props} />,
  h5: (props: MarkdownComponentProp) => <Heading as="h5" {...props} />,
  h6: (props: MarkdownComponentProp) => <Heading as="h6" {...props} />,
  p: Paragraph,
  /**
   * TODO
   * Other things to style:
   * ul, ol
   * blockquote
   * hr
   * image
   * link
   * tables
   * inline code
   * code block
   * table
   */
};

export default components;
