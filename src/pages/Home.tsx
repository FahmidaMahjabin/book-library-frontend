import { Button } from '@/components/ui/button';
import banner from '@/assets/images/library.jpg';
import hero from '@/assets/images/hero.png';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';

export default function Home() {
  return (
    <>
      <div className="mt-16 grid grid-cols-2 gap-4  max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">Book Worm</h1>
          <p className="text-secondary font-semibold text-xl">
            "Today a reader, tomorrow a leader." – Margaret Fuller
          </p>
          <div className="text-primary mt-20">
            <p>
              Books and doors are the same thing. You open them, and you go
              through into another world.
            </p>
            <p>Once you learn to read, you will be forever free.</p>
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="relative -right-14">
          <img src={banner} alt="" />
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
}
