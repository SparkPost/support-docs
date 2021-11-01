import React from 'react';
import { useRouter } from 'next/router';
import { getWindow } from 'utils/ssr';
import { Box } from '@sparkpost/matchbox';

const getImageSrc = (asPath: string, src: string) => {
  const environment = getWindow();
  const parts = asPath.split('/');
  const dir = parts.splice(0, parts.length - 1).join('/');
  const path = `${environment?.location.origin || 'http://localhost:3000'}/content${dir}/${src}`;
  return path;
};

type ImageProps = {
  src?: string;
  alt?: string;
};

const Image = (props: ImageProps): JSX.Element | null => {
  const { src, alt = '' } = props;
  const router = useRouter();
  const imageSrc = getImageSrc(router.asPath, src);

  return (
    <Box position="relative" display="flex" justifyContent="center" width="100%" my="600">
      {/* Not using Next.js's image component because it doesn't support dynamic aspect ratios */}
      <Box as="img" src={imageSrc} alt={alt} width="auto" maxHeight="500px" />
    </Box>
  );
};

export default Image;
