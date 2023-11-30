
import { Link } from 'react-router-dom';

function Navbar({ className }) {
  return (
    <nav className={className}>
      <Link to="/">Home</Link>
      <Link to="/front-end">Front-End</Link>
      <Link to="/back-end">Back-End</Link>
      <Link to="/conquistas">Conquistas</Link>
    </nav>
  );
}

export default Navbar;