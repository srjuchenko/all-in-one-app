import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <h1 className="text-3xl font-bold text-center py-8">
            All In One App
          </h1>
          <p className="text-center text-gray-600">
            Initial setup complete! Ready for development.
          </p>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
