// Read by the site's search box and by scripts/momentumIndex.mjs. A deploy of
// unreleased Momentum docs sets NEXT_PUBLIC_ALGOLIA_MOMENTUM_INDEX to its own
// index; production leaves it unset.
const DEFAULT_MOMENTUM_INDEX = 'next_momentum_documentation';

const momentumIndexName = () => process.env.NEXT_PUBLIC_ALGOLIA_MOMENTUM_INDEX || DEFAULT_MOMENTUM_INDEX;

module.exports = { DEFAULT_MOMENTUM_INDEX, momentumIndexName };
