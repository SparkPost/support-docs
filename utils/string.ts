import { NextRouter } from 'next/router';

/**
 * Slugifies a string
 */
export const slugify = (str: string): string => {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-us', { month: 'long', year: 'numeric' });
};

export const toTitleCase = (str: string): string => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

/**
 * There is something wrong with how relative links are handled in routing in netlify. This is to overcome that.
 */
export const fixRelativeLinks = (href: string, router: NextRouter): string => {
  let link = href;
  // if (href.startsWith('./') && !href.includes('./media')) {
  //   const routeComponents = router.asPath.split('/');

  //   // Trailing slashes
  //   if (!routeComponents[routeComponents.length - 1]) {
  //     routeComponents.pop();
  //   }

  //   // Remove the last item in the url since we're staying in the same directory
  //   routeComponents.pop();

  //   const updatedHref = href.replace('./', '');
  //   routeComponents.push(updatedHref);

  //   link = routeComponents.join('/');
  // }
  console.log('inside fixRelativeLinks', href);
  if (href.startsWith('./') || href.startsWith('media/')) {
    const routeComponents = router.asPath.split('/');
    console.log('routeComponents: ', routeComponents);

    // Trailing slashes
    if (!routeComponents[routeComponents.length - 1]) {
      routeComponents.pop();
      console.log('routeComponents after trailing slash pop: ', routeComponents);
    }

    // Remove the last item in the url since we're staying in the same directory
    routeComponents.pop();
    console.log('routeComponents remove last item in url: ', routeComponents);

    let tempHref = href;
    if (href.startsWith('./')) {
      tempHref = href.replace('./', '');
    }
    routeComponents.push(tempHref);

    link = routeComponents.join('/');
  }
  return link;
};
