export default function Home() {
  const user = JSON.parse(
    localStorage.getItem("vistaraUser")
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">

      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

        <h1 className="text-5xl font-bold text-slate-800">
          Welcome to Vistara 🇮🇳
        </h1>

        <p className="mt-4 text-slate-600 text-xl">
          Hello {user?.name}
        </p>

      </div>

    </div>
  );
}