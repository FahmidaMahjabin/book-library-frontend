// import bookReview from '@/components/bookReview';
import { Button } from '@/components/ui/button';
import Navbar from '@/layouts/Navbar';
import { useSingleBookQuery } from '@/redux/api/apiSlice';
// import { Ibook } from '@/types/globalTypes';

import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();

  const result = useSingleBookQuery(id);
  const book = result?.data?.data;

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="mt-16 border-b border-gray-300 mt-16">
        <div>
          <h1 className="text-3xl font-semibold">Title:{book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
          <p className="text-xl">Publication Date: {book?.publicationDate}</p>
          <p className="text-xl">Genre: {book?.genre}</p>
          <ul className="space-y-1 text-lg">
            {book?.reviews?.map((review: string | null) => (
              <li>{review}</li>
            ))}
          </ul>
          <Button>Edit Book</Button>
          <br></br>
          <Button>Delete Book</Button>
        </div>
      </div>
      {/* <bookReview /> */}
    </>
  );
}
