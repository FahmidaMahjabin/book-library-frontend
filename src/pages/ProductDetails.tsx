// import bookReview from '@/components/bookReview';
import { Button } from '@/components/ui/button';
import Navbar from '@/layouts/Navbar';
import { useSingleBookQuery } from '@/redux/api/apiSlice';
// import { Ibook } from '@/types/globalTypes';

import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();

  //! Temporary code, should be replaced with redux
  // const [data, setData] = useState<Ibook[]>([]);
  // useEffect(() => {
  //   fetch('../../public/data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  const book = useSingleBookQuery(id);

  // const book = data?.find((item) => item._id === Number(id));

  //! Temporary code ends here
  // const { data, isLoading } = useGetBooksQuery(undefined);
  return (
    <>
      <Navbar></Navbar>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        {/* <div className="w-[50%]">
          <img src={book?.} alt="" />
        </div> */}
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">Title:{book?.data?.title}</h1>
          <p className="text-xl">Author: {book?.data?.author}</p>
          <p className="text-xl">Author: {book?.data?.publicationDate}</p>
          <p className="text-xl">Author: {book?.data?.genre}</p>
          <ul className="space-y-1 text-lg">
            {book?.data?.reviews.map((review: string | null) => (
              <li>{review}</li>
            ))}
          </ul>
          <Button>Add to cart</Button>
        </div>
      </div>
      {/* <bookReview /> */}
    </>
  );
}
