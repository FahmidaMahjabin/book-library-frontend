import BookCard from '@/components/BookCard';

import { Slider } from '@/components/ui/slider';
import GenreDropDown from '@/layouts/GenreDropDown';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/layouts/Navbar';
import PublicationDateDropDown from '@/layouts/PublicationDateDropDown';
import { useGetBooksQuery } from '@/redux/api/apiSlice';

// import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IBook } from '@/types/globalTypes';
import { Button } from '../components/ui/button';
import { Navigate } from 'react-router-dom';

export default function Books() {
  // const { price, rating, status } = useAppSelector((state) => state.book);
  // const dispatch = useAppDispatch();
  // const [data, setData] = useState<Ibook[]>([]);
  // useEffect(() => {
  //   fetch('./data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const { data, isLoading } = useGetBooksQuery(undefined);
  console.log('data:', data);

  // const { toast } = useToast();

  const handleSlider = (value: number[]) => {
    console.log(value);
    // dispatch(setPriceRange(value[0]));
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 max-w-7xl mx-auto relative  ">
        <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
          <div className="space-y-3 ">
            <div>
              <GenreDropDown></GenreDropDown>
            </div>
            <div>
              <PublicationDateDropDown></PublicationDateDropDown>
            </div>
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {data?.data.map((book: IBook) => (
            <BookCard Book={book} />
          ))}
        </div>
        <Button
          className="absolute bottom-0 right-0"
          onClick={() => navigate('/add-new-book')}
        >
          Add new Book
        </Button>
      </div>
    </>
  );
}
