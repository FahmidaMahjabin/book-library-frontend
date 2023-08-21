import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { ToastContainer } from 'react-toast';
function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <MainLayout />
    </div>
  );
}

export default App;
