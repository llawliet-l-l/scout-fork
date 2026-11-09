export default {
  '*.{ts,tsx}': (files) => {
    return [`eslint --fix --quiet ${files.join(' ')}`];
  },

  '*.{ts,tsx,json}': (files) => {
    return [`prettier --write ${files.join(' ')}`];
  },
};
