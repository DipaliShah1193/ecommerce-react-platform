import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart } from '../store/cartSlice';

function Cart() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between border-b py-2">
              <span>{item.title} - ${item.price.toFixed(2)}</span>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;