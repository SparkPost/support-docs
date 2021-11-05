import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Table as MBTable } from '@sparkpost/matchbox';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import remarkCode from 'remark-code-blocks';

// Markdown Components
import Heading from './heading';
import Paragraph from './paragraph';
import Image from './image';
import Code from './code';
import Table from './table';
import Hr from './hr';
import Link from './link';
import { Ul, Ol } from './lists';
import DescriptionLists from './descriptionLists';
import BlockQuote from './blockquote';

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
  img: Image,
  code: Code,
  table: Table,
  hr: Hr,
  a: Link,
  ul: Ul,
  ol: Ol,
  blockquote: BlockQuote,
  tr: (props: MarkdownComponentProps) => <MBTable.Row {...props} />,
  td: (props: MarkdownComponentProps) => <MBTable.Cell {...props} />,
  th: (props: MarkdownComponentProps) => <MBTable.HeaderCell {...props} />,
};

type MarkdownProps = {
  children: string;
};

const Markdown = (props: MarkdownProps): JSX.Element => {
  return (
    <DescriptionLists>
      <ReactMarkdown
        components={components}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm, remarkCode]}
      >
        {props.children}
      </ReactMarkdown>
    </DescriptionLists>
  );
};

export default Markdown;
