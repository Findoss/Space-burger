export const uuid = () =>
  Array(16)
    .fill(0)
    .map(() => Math.random().toString(36).charAt(2))
    .join('');
