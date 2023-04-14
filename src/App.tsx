import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Home from "./pages/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { queryFn: axios, retry: 0, refetchOnWindowFocus: false },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
