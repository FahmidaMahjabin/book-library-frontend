// import bookReview from '@/components/bookReview';
import { Button } from '@/components/ui/button';
import Navbar from '@/layouts/Navbar';
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from '../redux/features/book/bookAPI';
// import { Ibook } from '@/types/globalTypes';

import { useNavigate, useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();

  const result = useSingleBookQuery(id);
  const book = result?.data?.data;
  const navigate = useNavigate();
  const [deleteBook, { isError, isSuccess }] = useDeleteBookMutation();
  return (
    <>
      <div className="flex flex-col">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="my-16">
          <div className="rounded-2xl flex bg-yellow-100 items-center justify-center w-75 p-5 shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
            <div>
              <h1 className="text-3xl font-semibold">Title:{book?.title}</h1>
              <p className="text-xl">Author: {book?.author}</p>
              <p className="text-xl">
                Publication Date: {book?.publicationDate}
              </p>
              <p className="text-xl">Genre: {book?.genre}</p>
              <p className="text-xl">Reviews:</p>
              <ul>
                {book?.reviews?.map((review: string | null) => (
                  <li className="space-y-1 text-lg border border-indigo-500 rounded p-2 m-2">
                    {review}
                  </li>
                ))}
              </ul>
              <Button
                className="m-2"
                onClick={() => navigate(`/edit-book/${book?._id}`)}
              >
                Edit Book
              </Button>
              <br></br>
              <Button
                onClick={() => {
                  deleteBook(id);
                  if (isSuccess) {
                    console.log('successfully deleted');
                  }
                  if (isError) {
                    console.log('error occure');
                  }
                }}
              >
                Delete Book
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <bookReview /> */}
    </>
  );
}
