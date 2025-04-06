interface ProductCardProps {
  name: string;
  price: string;
  backgroundColor: string;
  cupColor: string;
}

export default function ProductCard({
  name,
  price,
  backgroundColor,
  cupColor,
}: ProductCardProps) {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-[250px] h-[250px] mb-4 product-circle'>
        {/* Colored circle background */}
        <div
          className='absolute inset-0 rounded-full'
          style={{backgroundColor}}
        />

        {/* Milk tea cup SVG */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <svg
            width='140'
            height='180'
            viewBox='0 0 140 180'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='z-10 transition-transform duration-300 hover:translate-y-[-15px]'
            style={{
              filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2))',
              transform: 'translateY(-10px)', // Slightly lift the image
            }}
          >
            {/* Cup body */}
            <path
              d='M20 40H120L110 170H30L20 40Z'
              fill={cupColor}
              stroke='white'
              strokeWidth='2'
            />

            {/* Cup lid */}
            <path
              d='M15 30C15 25 20 20 25 20H115C120 20 125 25 125 30V40H15V30Z'
              fill='#333'
              stroke='white'
              strokeWidth='2'
            />

            {/* Straw */}
            <path
              d='M70 10V120'
              stroke='white'
              strokeWidth='6'
              strokeLinecap='round'
            />

            {/* Bubbles */}
            <circle cx='50' cy='140' r='6' fill='#333' />
            <circle cx='70' cy='150' r='6' fill='#333' />
            <circle cx='90' cy='140' r='6' fill='#333' />
            <circle cx='60' cy='130' r='6' fill='#333' />
            <circle cx='80' cy='130' r='6' fill='#333' />
          </svg>
        </div>

        {/* Price tag */}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-1 px-4 shadow-md z-20 price-tag'>
          <span className='font-bold text-lg'>{price}</span>
        </div>
      </div>

      <h3 className='text-white text-xl font-semibold mb-2'>{name}</h3>
      <button className='text-white flex items-center add-to-order'>
        Add to order
        <svg
          className='w-4 h-4 ml-1'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
      </button>
    </div>
  );
}
