const Main = () => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-18 sm:px-24 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Intelligent</span>{" "}
          <span className="block text-red-600 xl:inline">learning Centre</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center uppercase justify-center px-8 py-3 border border-transparent transition-all duration-300 ease-out font-semibold rounded-l-xl rounded-t-xl text-white bg-red-600 hover:bg-red-700 md:py-2 md:text-lg md:px-5"
            >
              Royhatdan o'ting
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center shadow-lg justify-center px-8 py-3 border border-transparent text-base font-medium rounded-l-xl rounded-t-xl text-red-700 bg-white  transition-all duration-300 ease-out hover:bg-red-200 md:py-2 md:text-lg md:px-5 "
            >
              Kurslar
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
