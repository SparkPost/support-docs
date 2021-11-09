import { useRouter } from 'next/router';
import { Breadcrumb } from '@sparkpost/matchbox';

type BreadcrumbProps = {
  title?: string;
};

const urlMap: { [key: string]: string } = {
  momentum: 'Momentum Documentation',
  '4': 'Momentum 4.x',
  '3': 'Momentum 3.x',
  mobile: 'Momentum Mobile',
  changelog: 'Changelog',
};

const Breadcrumbs = ({ title }: BreadcrumbProps): JSX.Element => {
  const router = useRouter();
  const path = router.asPath;
  const pathAsArray = path.split('/').filter((i) => i);

  const getPrettyName = (link: string, index: number) => {
    if (index + 1 == pathAsArray.length) {
      return title;
    }

    return urlMap[link] || link;
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
