import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-mint-green p-4 flex items-center justify-between'>
      <div className='flex items-center'>
        <Link href='/' className='text-2xl font-bold flex items-center'>
          <span className='text-[#333] mr-1'>Tiệm Trà</span>
          <span className='text-[#333] italic'>Baco</span>
        </Link>
      </div>

      <nav className='hidden md:flex space-x-6'>
        <Link href='/trending' className='text-[#333] hover:text-black'>
          Trending
        </Link>
        <Link href='/stories' className='text-[#333] hover:text-black'>
          Stories
        </Link>
        <Link href='/gift-card' className='text-[#333] hover:text-black'>
          Gift Card
        </Link>
        <Link href='/reserve' className='text-[#333] hover:text-black'>
          Reserve
        </Link>
        <Link href='/delivery' className='text-[#333] hover:text-black'>
          Delivery
        </Link>
      </nav>

      <div className='flex items-center space-x-4'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search'
            className='bg-white rounded-full py-2 px-4 pl-10 w-[180px] focus:outline-none'
          />
          <svg
            className='absolute left-3 top-2.5 w-4 h-4 text-gray-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>

        <Link href='/cart' className='text-[#333]'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
