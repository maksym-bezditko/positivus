import { useEffect, useState } from 'react';
import { CustomTheme, theme } from '../theme';

export const useMediaQuery = (
  query: keyof CustomTheme['breakpoints']
): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const matchQueryList = window.matchMedia(
      `(min-width: ${theme.breakpoints[query]})`
    );

    if (matchQueryList.matches !== matches) {
      setMatches(matchQueryList.matches);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    matchQueryList.addEventListener('change', handleChange);

    return () => {
      matchQueryList.removeEventListener('change', handleChange);
    };
  }, [query, matches]);

  return matches;
};
