import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { ToastContainer } from 'react-toast';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from './redux/features/user/userSlice';
import { useEffect } from 'react';
function App() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        console.log('user from app:', user);
      } else {
        console.log('logout');
      }
    });
  }, []);
  return (
    <div>
      <ToastContainer></ToastContainer>
      <MainLayout />
    </div>
  );
}

export default App;
