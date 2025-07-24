import { Link } from 'react-router-dom';
import { products } from '../utils/products';

function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg p-4">
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p>${product.price.toFixed(2)}</p>
          <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;