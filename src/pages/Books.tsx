import BookCard from '@/components/BookCard';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { Slider } from '@/components/ui/slider';

import Navbar from '@/layouts/Navbar';
import { useGetBooksQuery } from '@/redux/api/apiSlice';

// import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IBook } from '@/types/globalTypes';

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
  const { data, isLoading } = useGetBooksQuery(undefined);
  console.log('data:', data);

  // const { toast } = useToast();

  const handleSlider = (value: number[]) => {
    console.log(value);
    // dispatch(setPriceRange(value[0]));
  };

  function classNames(arg0: string, arg1: string): string | undefined {
    throw new Error('Function not implemented.');
  }

  // let booksData;

  // if (status) {
  //   booksData = data?.data?.filter(
  //     (item: IBook) => item.status === true && item.price < price
  //   );
  // } else if (price > 0) {
  //   booksData = data.?data?.filter((item) => item.price < price);
  // } else {
  //   booksData = data?.data;
  // }

  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
        <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Options
                  {/* <p
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  /> */}
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="space-y-3 ">
            <h1 className="text-2xl uppercase">Price Range</h1>
            <div className="max-w-xl">
              <Slider
                defaultValue={[150]}
                max={150}
                min={0}
                step={1}
                onValueChange={(value) => handleSlider(value)}
              />
            </div>
            <div>From 0$ To price$</div>
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {data?.data.map((book: IBook) => (
            <BookCard Book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
