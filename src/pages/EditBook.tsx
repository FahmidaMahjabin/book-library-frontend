import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

import {
  useEditBookMutation,
  usePostABookMutation,
  useSingleBookQuery,
} from '@/redux/api/apiSlice';
import {
  setAuthor,
  setGenre,
  setPublicationDate,
  setReviews,
  setTitle,
} from '@/redux/features/book/bookSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useParams } from 'react-router-dom';
// import { Icart } from '@/types/globalTypes';

import { toast } from 'react-toast';

export default function EditBook() {
  const dispatch = useAppDispatch();
  const { title, author, genre, publicationDate, reviews } = useAppSelector(
    (state) => state.book
  );

  console.log('title:', title, 'author:', author, 'reviews:', reviews);
  const [editBook, { isLoading, isSuccess, isError }] = useEditBookMutation();
  const { id } = useParams();
  console.log('id:', id);
  const { data } = useSingleBookQuery(id);
  //   console.log('data from editbook:', data);
  const book = data?.data;
  //   change the state values for the field
  dispatch(setTitle(book.title));
  dispatch(setAuthor(book.author));
  dispatch(setPublicationDate(book.publicationDate));
  dispatch(setGenre(book.genre));
  //   dispatch(setReviews(book.reviews));
  book.reviews?.map((review: string) => dispatch(setReviews(review)));
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2 text-3xl font-bold">Edit A Book</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  className="mt-2"
                  value={title}
                  onChange={(event) => {
                    dispatch(setTitle(event.target.value));
                  }}
                />
              </div>
              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  type="text"
                  id="author"
                  value={author}
                  className="mt-2"
                  onBlur={(event) => {
                    dispatch(setAuthor(event.target.value));
                  }}
                />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="genre">Genre</Label>
                <Input
                  type="text"
                  id="genre"
                  value={genre}
                  className="mt-2"
                  onBlur={(event) => {
                    dispatch(setGenre(event.target.value));
                  }}
                />
              </div>
              <div>
                <Label htmlFor="publicationDate">Publication Date</Label>
                <Input
                  type="text"
                  id="publicationDate"
                  className="mt-2"
                  value={publicationDate}
                  onBlur={(event) => {
                    dispatch(setPublicationDate(event.target.value));
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="review">Review</Label>
            <Textarea
              id="review"
              className="mt-2"
              value={book.reviews[-1]}
              onBlur={(event) => {
                dispatch(setReviews(event.target.value));
              }}
            />
          </div>

          <Button
            className="w-full m-2"
            onClick={() => {
              const data = { title, author, genre, publicationDate, reviews };

              // eslint-disable-next-line react-hooks/rules-of-hooks

              editBook({ id, data });
              console.log(isLoading, isSuccess, isError);
              if (isSuccess) {
                toast.success('A new Book Added');
                console.log('toast');
              }
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
