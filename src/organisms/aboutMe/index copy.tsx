import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardProduto from "../cardprodutos/CardProduto";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaProdutos() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);
  const [criterio, setCriterio] = useState<"preco" | "nome" | "calorias">("preco");

  const [filtrosAtivos, setFiltrosAtivos] = useState(false);
  const [filtroPrecoMax, setFiltroPrecoMax] = useState<number | null>(null);
  const [filtroPrecoMin, setFiltroPrecoMin] = useState<number | null>(null);
  const [filtroCaloriasMin, setFiltroCaloriasMin] = useState<number | null>(null);
  const [filtroCaloriasMax, setFiltroCaloriasMax] = useState<number | null>(null);
  const [filtroSaudaveis, setFiltroSaudaveis] = useState(false);

  useEffect(() => {
    const produtosFiltrados = produtos.filter((produto) => {
      const dentroDoPreco =
        (filtroPrecoMin === null || produto.preco >= filtroPrecoMin) &&
        (filtroPrecoMax === null || produto.preco <= filtroPrecoMax);

      const dentroDasCalorias =
        (filtroCaloriasMin === null || produto.calorias >= filtroCaloriasMin) &&
        (filtroCaloriasMax === null || produto.calorias <= filtroCaloriasMax);
      
      const produtoSaudavel = filtroSaudaveis ? produto.saudavel : true;

      return dentroDoPreco && dentroDasCalorias && produtoSaudavel;
    });

    setProdutosFiltrados(produtosFiltrados);
  }, [filtroPrecoMin, filtroPrecoMax, filtroCaloriasMin, filtroCaloriasMax, filtroSaudaveis, produtos]);

  async function buscarProdutos() {
    try {
      await buscar("/produto", setProdutos, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  function ordenarProdutos(a: Produto, b: Produto) {
    if (criterio === "nome") {
      return a.nome.localeCompare(b.nome);
    }
    return Number(a[criterio]) - Number(b[criterio]);
  }

  const produtosOrdenados = [...produtosFiltrados].sort(ordenarProdutos);
  
  return (
    <>
      {produtos.length === 0 && (
        <DNA
          visible
          height="200"
          width="200"
          ariaLabel="dna-loading"
          className="dna-wrapper mx-auto"
        />
      )}

      <div className="mx-10 my-10">
        <div className="flex flex-row justify-between mb-16">
          <div className="text-md text-gray-500">
            <Link className="text-gray-700 hover:underline" to="/">
              Home
            </Link>
            / <b>NomeCategoria</b>
          </div>

          <select 
            className="rounded-xl shadow-2xl py-2 px-5 border border-gray-400"
            value={criterio}
            onChange={(e) => setCriterio(e.target.value as "preco" | "nome" | "calorias")}
          >
            <option value="preco">Preço</option>
            <option value="nome">Nome</option>
            <option value="calorias">Calorias</option>
          </select>
        </div>

        <div className="flex flex-row items-start justify-evenly gap-10">
          <div className="basis-2/12">
            <h3 className="text-xl mb-4">Filtrar por</h3>

            <div className="my-5">
              <p className="text-sm my-1">Valor</p>
              <div className="flex gap-1">
                <input type="number" placeholder="  De" className="w-1/2 py-2 px-1 rounded-xl shadow-2xl border border-gray-400"
                  onChange={(e) => setFiltroPrecoMin(e.target.value ? Number(e.target.value) : null)}
                />
                <input type="number" placeholder="  Até" className="w-1/2 py-2 px-1 rounded-xl shadow-2xl border border-gray-400"
                  onChange={(e) => setFiltroPrecoMax(e.target.value ? Number(e.target.value) : null)}
                />
              </div>
            </div>

            <div className="my-5">
              <p className="text-sm my-1">Calorias (100g)</p>
              <div className="flex gap-1">
                <input type="number" placeholder="  De" className="w-1/2 py-2 px-1 rounded-xl shadow-2xl border border-gray-400"
                  onChange={(e) => setFiltroCaloriasMin(e.target.value ? Number(e.target.value) : null)}
                />
                <input type="number" placeholder="  Até" className="w-1/2 py-2 px-1 rounded-xl shadow-2xl border border-gray-400"
                  onChange={(e) => setFiltroCaloriasMax(e.target.value ? Number(e.target.value) : null)}
                />
              </div>
            </div>

            <div className="my-5">
              <p className="text-sm">Produtos</p>
              <div className="flex flex-row mt-5 items-center space-x-2">
                <input type="checkbox" className="mr-1" checked={filtroSaudaveis}
                  onChange={() => setFiltroSaudaveis(!filtroSaudaveis)}
                />
                <p>Saudáveis</p>
              </div>
            </div>
          </div>

          <div className="basis-10/12">
            {!filtrosAtivos && (
              <div>
                <h3 className="text-2xl">Novos Produtos</h3>
                <p className="text-sm text-gray-500 mb-5">
                  Os últimos produtos adicionados à nossa loja
                </p>
                <div className="flex gap-2 flex-wrap">
                  {produtos.slice(-4).reverse().map((produto) => (
                    <CardProduto key={produto.idProduto} produto={produto} />
                  ))}
                </div>
              </div>
            )}

            <div className="my-5">
              <h3 className="text-2xl">Todos os Produtos</h3>
              <p className="text-sm text-gray-500 mb-5">
                <b>{produtosFiltrados.length}</b> produtos encontrados
              </p>

              <div className="flex gap-2 flex-wrap">
                {produtosOrdenados.map((produto) => (
                  <CardProduto key={produto.idProduto} produto={produto} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;
