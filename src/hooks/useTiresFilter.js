import { useState, useMemo } from 'react';

export const useTiresFilter = (initialData) => {
  const [filter, setFilter] = useState('All');

  const filteredData = useMemo(() => {
    if (filter === 'All') return initialData;
    return initialData.filter(tire => tire.season === filter);
  }, [initialData, filter]);

  return { filter, setFilter, filteredData };
};