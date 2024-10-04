import Board from "./components/Board";

function App() {
  return (
    <div className="bg-slate-200 min-h-screen overflow-hidden px-5">
      <header className="flex flex-col items-center justify-center text-2xl text-gray-500 h-20">
        <b>Kanban Board</b>
      </header>
      <Board />
    </div>
  );
}

export default App;
