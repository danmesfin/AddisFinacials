'use client';
import { FaChartLine, FaPiggyBank, FaMobileAlt } from 'react-icons/fa';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-4xl text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const MainFeatures: React.FC = () => {
  return (
    <section id='features' className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Main Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaChartLine />}
            title="Intelligent Investing"
            description="Let our advanced algorithms and financial experts build a personalized investment portfolio tailored to your goals and risk tolerance."
          />
          <FeatureCard
            icon={<FaPiggyBank />}
            title="High-Yield Savings"
            description="Make your money work harder with our competitive interest rates on savings accounts. Watch your balance grow faster than ever before."
          />
          <FeatureCard
            icon={<FaMobileAlt />}
            title="User-Friendly Platform"
            description="Manage your investments and track your progress with our intuitive, easy-to-use mobile app and web platform."
          />
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
