import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import PackageFeedbackSilver from '../components/PackageFeedbackSilver';
import PackageFeedbackGold from '../components/PackageFeedbackGold';
import PackageFeedbackPlatinum from '../components/PackageFeedbackPlatinum';

const ShowPackagesFeedbacks = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = `Packages Feedbacks | AURA Fitness`;
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filterPackageFeedback = (packageComponent, packageName) => {
    // Assuming each package component accepts a search term prop to filter feedbacks
    return (
      <div>
        {packageName.toLowerCase().includes(searchTerm.toLowerCase()) && packageComponent}
      </div>
    );
  };

  return (
    <div className='flex w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat justify-center items-center' style={{ backgroundImage: 'url(/images/sven-mieke-jO6vBWX9h9Y-unsplash.jpg)' }}>
      <div className='flex justify-center flex-col gap-6 p-10 bg-[#c7c7c72c] rounded-2xl backdrop-blur-sm items-center'>
        <SearchBar placeholder='Search for your Package ..' onInput={handleSearch} />
        <div className='flex justify-center flex-col gap-3'>
          {filterPackageFeedback(<PackageFeedbackSilver />, 'Silver')}
          {filterPackageFeedback(<PackageFeedbackGold />, 'Gold')}
          {filterPackageFeedback(<PackageFeedbackPlatinum />, 'Platinum')}
        </div>
      </div>
    </div>
  );
};

export default ShowPackagesFeedbacks;
