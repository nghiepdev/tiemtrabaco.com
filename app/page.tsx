import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  // In a real application, this data would come from an API or database
  const products = [
    {
      id: 1,
      name: 'Strawberry Bubble Tea',
      price: '$9.99',
      backgroundColor: '#e91e63',
      cupColor: '#f48fb1',
    },
    {
      id: 2,
      name: 'Matcha Milk Tea',
      price: '$9.99',
      backgroundColor: '#4caf50',
      cupColor: '#a5d6a7',
    },
    {
      id: 3,
      name: 'Classic Milk Tea',
      price: '$9.99',
      backgroundColor: '#ff9800',
      cupColor: '#ffcc80',
    },
  ];

  return (
    <main className='min-h-screen flex flex-col'>
      <Header />

      <section className='flex-1 bg-dark-navy py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                backgroundColor={product.backgroundColor}
                cupColor={product.cupColor}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
