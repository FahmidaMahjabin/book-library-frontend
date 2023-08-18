import { IBook } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cart/cartSlice';

interface IProps {
  Book: IBook;
}

export default function BookCard({ Book }: IProps) {
  // const { price, rating, status } = useAppSelector((state) => state.Book);
  const dispatch = useAppDispatch();

  const handleAddBook = (Book: IBook) => {
    dispatch(addToCart(Book));
    console.log('state:');
    toast({
      description: 'Book Added',
    });
  };
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/Book-details/${Book._id}`} className="w-full">
          {/* <img src={Book?.image} alt="Book" /> */}
          <h1 className="text-xl font-semibold">{Book?.title}</h1>
        </Link>
        <h4>Author: {Book?.author}</h4>
        <h4>Genre: {Book.genre}</h4>
        <h4>Publication Date: {Book.publicationDate}</h4>

        <Button variant="default" onClick={() => handleAddBook(Book)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
