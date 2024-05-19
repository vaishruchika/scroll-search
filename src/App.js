import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react';
import ScrollSearch from './components/Main';


const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
      <ScrollSearch />
      </QueryClientProvider>
  );
}

export default App;
