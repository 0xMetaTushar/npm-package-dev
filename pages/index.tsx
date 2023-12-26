// pages/index.tsx
import type { NextPage } from 'next';
import { useState } from 'react';
import Browse from '../components/Browse';
import Create from '../components/Create';
import Header from '../components/Header';
import ToggleButton from '../components/ToggleButton';

const Home: NextPage = () => {
	const [selectedOption, setSelectedOption] = useState('browse');

	const handleOptionChange = (option: string) => {
		setSelectedOption(option);
	};

	return (
		<>
			<body className="relative flex flex-col h-screen">
				<main className="mx-auto px-6 py-3 flex-1 w-[400px] justify-between rounded-3xl border border-cyan-100/30 bg-sky-100/5 overflow-hidden flex flex-col">
					<Header />
					<ToggleButton
						selectedOption={selectedOption}
						onOptionChange={handleOptionChange}
					/>
					{selectedOption === 'browse' ? (
						<div className="overflow-y-scroll mt-2 flex-1">
							<Browse />
						</div>
					) : (
            <div className='mt-2 flex-1'><Create /></div>
						
					)}
				</main>
			</body>
		</>
	);
};

export default Home;
