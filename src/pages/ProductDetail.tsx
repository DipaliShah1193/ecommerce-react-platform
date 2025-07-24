import { useParams } from 'react-router-dom';
import { products } from '../utils/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const dispatch = useDispatch();

  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-xl mx-auto">
      <img src={product.image} alt={product.title} className="w-full h-60 object-cover" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700 my-2">{product.description}</p>
      <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
      <button onClick={() => dispatch(addToCart(product))} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
    </div>
  );
}

export default ProductDetail;