import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="flex justify-between items-center container mx-auto">
        <Link
          to="/"
          className="text-3xl tracking-tight font-bold text-orange-500"
        >
          MernEats.com
        </Link>
      </div>
    </div>
  );
};

export default Header;
