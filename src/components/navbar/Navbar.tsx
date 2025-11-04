import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
      <div className="container flex justify-between text-lg mx-8">
        <Link to="/home" className="text-2xl font-bold">
          Fast Farma
        </Link>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/categorias">Categorias</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/categorias/cadastrar">Cadastrar Categoria</Link>
          <Link to="/produtos/cadastrar">Cadastrar Produto</Link>
        </div>
      </div>
    </div>
  );
}
