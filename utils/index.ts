export function uniqBy<T extends Object, K extends keyof T>(
  arr: T[],
  key: K
): T[] {
  const cb = (o: T): T[K] => o[key];

  const result = arr
    .reduce((map, item) => {
      const key = item === null || item === undefined ? item : cb(item);

      map.has(key) || map.set(key, item);

      return map;
    }, new Map<T[K], T>())
    .values();

  return [...result];
}
