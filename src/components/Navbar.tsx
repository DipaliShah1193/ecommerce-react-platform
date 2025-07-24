import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function Navbar() {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Ecommence Platform</Link>
        <Link to="/cart">Cart ({items.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;