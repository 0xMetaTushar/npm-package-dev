// components/ToggleButton.tsx
import React from 'react';

type ToggleButtonProps = {
  selectedOption: string;
  onOptionChange: (option: string) => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ selectedOption, onOptionChange }) => {
  return (
    <div className="flex items-center justify-center mt-8">
      <button
        className={`px-4 py-2 rounded-l-full w-full ${
          selectedOption === 'browse' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
        }`}
        onClick={() => onOptionChange('browse')}
      >
        Browse
      </button>

      <button
        className={`px-4 py-2 rounded-r-full w-full  ${
          selectedOption === 'create' ? 'bg-green-500 text-white ' : 'bg-gray-300 text-gray-700'
        }`}
        onClick={() => onOptionChange('create')}
      >
        Create
      </button>
    </div>
  );
};

export default ToggleButton;
