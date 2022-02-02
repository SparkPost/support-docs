import React from 'react';
import { useRouter } from 'next/router';
import { getWindow } from 'utils/ssr';
import { Box } from '@sparkpost/matchbox';

const getImageSrc = (asPath: string, src?: string) => {
  const environment = getWindow();
  const pathArr = asPath.split('/');

  // Check for 'trailing slash'
  if (!pathArr[pathArr.length - 1]) {
    pathArr.pop();
  }
  pathArr.pop();
  const dir = pathArr.join('/');
  const path = `${environment?.location.origin || 'https://localhost:3000'}/content${dir}/${src}`;
  return path;
};

type ImageProps = {
  src?: string;
  alt?: string;
};

const Image = (props: ImageProps): JSX.Element | null => {
  const { src, alt = '' } = props;
  const router = useRouter();

  if (!getWindow()) {
    return null;
  }

  const imageSrc = getImageSrc(router.asPath, src);

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      width="100%"
      my="550"
      boxShadow="200"
      border="300"
    >
      {/* Not using Next.js's image component because it doesn't support dynamic aspect ratios */}
      <Box as="img" src={imageSrc} alt={alt} width="auto" maxWidth="100%" maxHeight="500px" />
    </Box>
  );
};

export default Image;
