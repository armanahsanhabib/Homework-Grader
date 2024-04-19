import Header from "../components/common/Header";

const Error404 = () => {
  return (
    <div className="w-[calc(100%-300px)] overflow-hidden p-3">
      <Header title="404 not found" />
      <main className="flex h-[calc(100%-61px)] items-center justify-center overflow-auto">
        <div className="item flex flex-col gap-3 text-center text-gray-800">
          <h1 className="text-8xl font-bold">404</h1>
          <h2 className="text-2xl font-bold">Not Found</h2>
          <p>The resource requested could not found on this server.</p>
        </div>
      </main>
    </div>
  );
};

export default Error404;
