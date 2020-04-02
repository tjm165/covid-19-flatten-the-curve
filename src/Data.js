import { getHotlineBling } from "./API";

export function deathsByState(state, cache) {
  return cache.filter(entry => entry.state === state);
}
