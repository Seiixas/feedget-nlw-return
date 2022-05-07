import { Navbar } from './Navbar';
import Skeleton from 'react-loading-skeleton'
import { useState } from 'react';

export function Placeholder() {
  const [isScreenLoading, setIsScreenLoading] = useState(true);

  return (
    <>
      <Navbar />
      <main className="p-16 px-56">
        <header className="flex items-center justify-between h-14">
          <div className="flex gap-12">
            <h1 className="text-4xl"><strong>Olá, Mateus</strong></h1>
            <span>
              <p className="mb-2">É bom ter você de volta!</p>
              <p>Continue aprendendo, retorne para aula que parou.</p>
            </span>
          </div>
          <span className="text-zinc-400">#NeverStopLearning</span>
        </header>
        <section className="mt-8">
          <div className="bg-zinc-800 rounded-xl h-36 animate-pulse"></div>
          <div className="flex gap-4 mt-4">
            <div className="bg-zinc-800 rounded-xl h-44 w-[50%] animate-pulse"></div>
            <div className="bg-zinc-800 rounded-xl h-44 w-[25%] animate-pulse"></div>
            <div className="bg-zinc-800 rounded-xl h-44 w-[25%] animate-pulse"></div>
          </div>
        </section>
      </main>
    </>
  );
}