import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App'; // App лежит в той же папке src
import './index.css';

// Настройка клиента с глобальными опциями
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Данные считаются свежими 5 минут
      cacheTime: 1000 * 60 * 10, // Кэш хранится 10 минут
      retry: 2, // Повторить запрос 2 раза при ошибке
      refetchOnWindowFocus: false, // Не делать запрос при возврате на вкладку
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);