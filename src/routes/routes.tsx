import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Products from '@/pages/Books';
import Checkout from '@/pages/Checkout';
import Signup from '@/pages/Signup';
import ProductDetails from '@/pages/BookDetails';
import Books from '@/pages/Books';
import BookDetails from '@/pages/BookDetails';
import AddNewBook from '@/pages/AddNewBook';
import EditBook from '@/pages/EditBook';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      // {
      //   path: '/checkout',
      //   element: <Checkout />,
      // },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/edit-book/:id',
    element: (
      <PrivateRoute>
        <EditBook></EditBook>
      </PrivateRoute>
    ),
  },
  {
    path: '/add-new-book',
    element: (
      <PrivateRoute>
        <AddNewBook />
      </PrivateRoute>
    ),
  },
  {
    path: '/all-books',
    element: (
      <PrivateRoute>
        <Books />
      </PrivateRoute>
    ),
  },
  {
    path: '/bookDetail/:id',
    element: <BookDetails></BookDetails>,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
