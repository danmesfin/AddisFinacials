import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-400 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-6xl md:text-6xl font-bold mb-4 leading-tight">
            Your Financial Freedom Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Expert-backed investing and high-yield savings solutions. 
            Grow wealth, save smarter, and secure your future with AddisFinacials.
          </p>
          <Link href="/#get-started" className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-100 transition duration-300">
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <Image 
            src="/images/man-and-coins-happy-face.jpeg" 
            alt="Financial Growth Illustration" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
