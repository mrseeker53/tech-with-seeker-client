import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import './App.css';

function App() {
  return (
    <div>
      {/* Set Router Provider */}
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
