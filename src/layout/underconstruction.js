import { FaTools } from 'react-icons/fa';
import { HeaderMainlogo } from '../constants/header/menuData.ts';


const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center h-[100vh] justify-center bg-gray-100 text-gray-800 px-3">
        <img
                          src={HeaderMainlogo.headerMainLogo}
                          alt="Header Logo"
                          className='mb-6 w-[200px] object-contain'
                        />
      <div className="text-6xl text-[#e70000] animate-bounce">
        <FaTools />
      </div>
      <h1 className="mt-4 text-4xl font-bold text-center">We're Under Construction</h1>
      <p className="mt-2 text-lg text-gray-600 text-center">
        This page is currently being built. Check back soon for updates!
      </p>
    </div>
  );
};

export default UnderConstruction;
