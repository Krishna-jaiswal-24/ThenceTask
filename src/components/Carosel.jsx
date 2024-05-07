import React, { useState, useEffect } from 'react';

const Carosel = () => {
	const slides = [
		"Enhance fortune 50 company’s insights teams research capabilities",
		"Accelerate innovation with cutting-edge technology",
		"Drive strategic growth with data-driven decisions"
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentSlide((prevSlide) =>
				prevSlide === slides.length - 1 ? 0 : prevSlide + 1
			);
		}, 3000); // Change slides every 3 seconds

		return () => clearTimeout(timer);
	}, [currentSlide]);

	return (
		<div className='mx-20'>
			<p className='text-[2.5rem] w-[400px] font-semibold'>{slides[currentSlide]}</p>

			<div className='flex gap-4 my-20'>
				{slides.map((_, index) => (
					<div
						key={index}
						className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-green' : 'bg-[#E4E3E3]'}`}
					></div>
				))}
			</div>

			<button
				className='px-10 py-8 bg-black text-white rounded-full flex gap-4 hover:bg-[#4E4E4E]'
				onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
			>
				Explore More
				<svg width="24" height="24"
				     viewBox="0 0 24 24"
				     fill="none"
				     xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.1716 10.9999L4 10.9999L4 12.9999L16.1716 12.9999L10.8076 18.3638L12.2218 19.778L20 11.9999L12.2218 4.22168L10.8076 5.63589L16.1716 10.9999Z"
						fill="white"/>
				</svg>
			</button>
		</div>
	);
};

export default Carosel;
