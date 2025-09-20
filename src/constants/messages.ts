export const SEARCH_MESSAGES = {
  LOADING: 'Searching ...',
  EMPTY: 'No result',
  ERROR: 'Something wrong happened but this is not your fault : )',
  SUCCESS: (count: number) => `${count} ${count === 1 ? 'result' : 'results'}`,
} as const;

export const SEARCH_PLACEHOLDER = 'Search what technologies we are using at DC...';

export const DEFAULT_CATEGORIES = ['Languages', 'Build', 'Design', 'Cloud'] as const;
