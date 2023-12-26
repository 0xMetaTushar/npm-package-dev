
type Order = {
    order: string;
    description: string;
};

const Card = (order:Order) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg mt-3 bg-sky-400/40 mx-2">
			<img className="h-10 w-10" src="otc.webp" alt="Card Image" />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{order.order}</div>
				<p className="text-gray-700 text-base">{order.description}</p>
			</div>
		</div>
	);
};
export default Card;
