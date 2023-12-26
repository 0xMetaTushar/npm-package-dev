import React from 'react';
import Image from 'next/image';
const Header = () => {
	return (
		<>
			<section className="mt-2 flex justify-between text-white">
				<article className="flex items-center gap-2 font-mono font-semibold">
					<Image
						height={40}
						width={40}
						className="rounded-md object-contain h-[40px] w-[40px]"
						src="/otc.webp"
						alt="otc"
					/>
					<div className="flex flex-col h-full">
						<p className="h-full text-lg">$ZSwap</p>
						<p className="h-full text-sm">Mini-Market</p>
					</div>
				</article>
				<article>
					<button className="bg-sky-400 rounded-xl px-8 py-1 text-lg font-bold">
						Connect
					</button>
				</article>
			</section>
		</>
	);
};

export default Header;
