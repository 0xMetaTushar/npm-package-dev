import Card from './Card';

const Browse = () => {
	
	const data = [
		{
			order: 'order',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dignissimos facilis quas unde, aliquam, ea libero commodi maiores, vero nulla nesciunt eos labore esse ut quasi ad culpa earum dolorem!',
		},
		{
			order: 'order',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dignissimos facilis quas unde, aliquam, ea libero commodi maiores, vero nulla nesciunt eos labore esse ut quasi ad culpa earum dolorem!',
		},
		{
			order: 'order',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dignissimos facilis quas unde, aliquam, ea libero commodi maiores, vero nulla nesciunt eos labore esse ut quasi ad culpa earum dolorem!',
		},
		{
			order: 'order',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dignissimos facilis quas unde, aliquam, ea libero commodi maiores, vero nulla nesciunt eos labore esse ut quasi ad culpa earum dolorem!',
		},
		{
			order: 'order',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dignissimos facilis quas unde, aliquam, ea libero commodi maiores, vero nulla nesciunt eos labore esse ut quasi ad culpa earum dolorem!',
		},
	];

	return (
		<div>
			{data.length != 0 ? (
				data.map((item) => {
					return <Card order={item.order} description={item.description} />;
				})
			) : (
				<h1 className="text-sky-200 text-center font-bold text-3xl mt-4">
					No items
				</h1>
			)}
		</div>
	);
};

export default Browse;
