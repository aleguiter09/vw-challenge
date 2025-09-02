import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/queryClient";
import { Table } from "./components/ui/Table";

function App() {
  return (
    <>
      <h1>Volkswagen Digital:Hub</h1>
      <h3>Frontend Challenge</h3>
      <div className="card">
        <QueryClientProvider client={queryClient}>
          <Table />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
