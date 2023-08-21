import { Button } from '@/components/ui/button';
import { DatePickerWithPresets } from '@/components/ui/datePickerWithPreset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import {
  setAuthor,
  setGenre,
  setPublicationDate,
  setReviews,
  setTitle,
} from '@/redux/features/book/bookSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
// import { Icart } from '@/types/globalTypes';

import { useState } from 'react';

export default function AddNewBook() {
  const dispatch = useAppDispatch();
  const { title, author, genre, publicationDate, reviews } = useAppSelector(
    (state) => state.book
  );
  const handleSubmit = () => {
    console.log(title, author, genre, publicationDate, reviews);
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2 text-3xl font-bold">Add A New Book</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  className="mt-2"
                  onBlur={(event) => {
                    dispatch(setTitle(event.target.value));
                  }}
                />
              </div>
              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  type="text"
                  id="author"
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
              onBlur={(event) => {
                dispatch(setReviews(event.target.value));
              }}
            />
          </div>

          <Button className="w-full m-2" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
