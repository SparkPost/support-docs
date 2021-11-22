import React from 'react';
import { CategoriesContext } from 'context/categories';
import { useRouter } from 'next/router';
import { Breadcrumb } from '@sparkpost/matchbox';
import { toTitleCase } from 'utils/string';

type BreadcrumbProps = {
  title?: string;
};

const Breadcrumbs = ({ title }: BreadcrumbProps): JSX.Element => {
  const router = useRouter();
  const path = router.asPath;
  const pathAsArray = path.split('/').filter((i) => i);

  const categories = React.useContext(CategoriesContext);

  const getPrettyName = (link: string, index: number) => {
    if (index + 1 == pathAsArray.length) {
      return title;
    }

    const category = categories.find(({ key }) => key === link);
    return category?.label || toTitleCase(link);
  };

  const getLink = (link: string, index: number) => {
    return pathAsArray.slice(0, index + 1).join('/');
  };

  return (
    <Breadcrumb mb="500">
      {pathAsArray.map((link, index) => {
        return (
          <Breadcrumb.Link
            key={link}
            active={index + 1 === pathAsArray.length}
            to={`/${getLink(link, index)}`}
          >
            {getPrettyName(link, index)}
          </Breadcrumb.Link>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
