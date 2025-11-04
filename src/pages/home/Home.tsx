function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 flex justify-center">
      <div className="grid grid-cols-[1fr_1fr] text-white w-full max-w-[1280px]">
        <div className="flex flex-col gap-4 items-center justify-center pt-4 pb-4">
          <h2 className="text-5xl font-bold">Bem-vindo à Fast Farma! 💊</h2>

          <p className="text-xl">
            Gerencie suas categorias e produtos rapidinho!
          </p>

          <div className="flex justify-center gap-4">
            <div className="rounded-[0.5rem] text-white border-2 border-solid border-white p-[0.5rem_1rem] cursor-pointer hover:bg-white hover:text-blue-600 transition">
              Começar Agora
            </div>
          </div>
        </div>

        <div className="flex justify-center"></div>
      </div>
    </div>
  );
}

export default Home;
