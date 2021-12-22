import React from 'react';
import { InlineCode as MBInlineCode, Box } from '@sparkpost/matchbox';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styled from 'styled-components';
import css from '@styled-system/css';

const StyledPre = styled.pre`
  ${css({
    color: 'gray.200',
  })}

  .react-syntax-highlighter-line-number {
    ${css({
      color: 'gray.600',
    })}
  }
`;

const Pre = (props: { children?: React.ReactNode }) => {
  return <StyledPre>{props.children}</StyledPre>;
};

type CodeProps = {
  children: React.ReactNode;
  inline?: boolean;
  className?: string;
};

const Code = (props: CodeProps): JSX.Element | null => {
  const { inline, children, className } = props;
  const language = className?.replace(/^language-/, '');

  if (!children) {
    return null;
  }

  if (inline) {
    return <MBInlineCode>{props.children}</MBInlineCode>;
  }

  return (
    <Box mb="550" p="400" bg="gray.1000" overflow="auto">
      <SyntaxHighlighter
        language={language || 'text'}
        style={a11yDark}
        PreTag={Pre}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </Box>
  );
};

export default Code;
