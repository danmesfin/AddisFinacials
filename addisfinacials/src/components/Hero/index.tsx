import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <>
      <header className="bg-gray-100 py-5 rounded-b-3xl">
        <div className="container mx-auto px-5">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">Addis Finacials</div>
            <ul className="flex space-x-5">
              <li><Link href="#" className="text-gray-800">Why Us?</Link></li>
              <li><Link href="#" className="text-gray-800">How it works?</Link></li>
              <li><Link href="#" className="text-gray-800">Simulator and pricing</Link></li>
              <li><Link href="#" className="text-gray-800">FAQ</Link></li>
            </ul>
            <div className="space-x-3">
              <Link href="#" className="px-5 py-2 rounded-full border border-gray-800 text-gray-800">Register</Link>
              <Link href="#" className="px-5 py-2 rounded-full bg-indigo-600 text-white">Log in</Link>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section className="py-12">
          <div className="container mx-auto px-5 flex items-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-5">Make your money work with maximum profit</h1>
              <p className="mb-8">We help transform investments into success stories through our innovative management strategies and cutting-edge analytics</p>
              <Link href="#" className="px-5 py-2 rounded-full bg-indigo-600 text-white">Learn more</Link>
            </div>
            <div className="flex-1 text-right">
              <Image 
                src="/images/coins.jpeg" 
                alt="Abstract financial illustration" 
                width={500} 
                height={300} 
                className="rounded-3xl"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
