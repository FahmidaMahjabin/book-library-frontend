import { Button } from '@/components/ui/button';
import { DatePickerWithPresets } from '@/components/ui/datePickerWithPreset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useAppSelector } from '@/redux/hooks';
// import { Icart } from '@/types/globalTypes';

import { useState } from 'react';

export default function Checkout() {
  const [scheduled, setScheduled] = useState<boolean>(false);

  //! Dummy Data
  // const { carts, total } = useAppSelector((state) => state.cart);

  //! **
  // let subTotal = 0;
  // carts.map((cart) => (subTotal += cart.price * cart.quantity!));
  // const delivery = 4.5;
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Add A New Book</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input type="text" id="title" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="author">Author</Label>
                <Input type="text" id="author" className="mt-2" />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="genre">Genre</Label>
                <Input type="text" id="genre" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="publicationDate">Publication Date</Label>
                <Input type="text" id="publicationDate" className="mt-2" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="review">Review</Label>
            <Textarea id="review" className="mt-2" />
          </div>

          <Button className="w-full">Submit</Button>
        </div>
      </div>
    </div>
  );
}
