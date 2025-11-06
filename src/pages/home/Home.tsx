import ListaCategorias from "../../components/categoria/listacategorias/ListaCategorias";

function Home() {
  return (
    <>
      <div className="bg-[#8FABD4] flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py4">
            <h2 className="text-5xl font-bold">Fast Farm</h2>

            <p className="text-xl">Saúde e Bem-Estar para todos!</p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://imgur.com/a/8LpneQR"
              alt="Logo Fast Farma"
              className="w-2/3 rounded-3xl"
            />
          </div>
        </div>
      </div>
      <ListaCategorias />
    </>
  );
}

export default Home;
