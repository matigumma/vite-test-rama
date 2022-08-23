import Logo from './Logo'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>{/* <-- fragmento de react se llama asi... q es lo mismo q React.Fragment() */}
          <header className="flex items-center justify-between w-full h-[100px] px-8 text-white sm:text-black  bg-black sm:bg-[#ff00dd]">
            <Logo />{/* incrustacion de componente Logo */}
            <nav>
              <ul className="flex flex-row gap-4">
                <li>
                  <Link
                    to='/blog'
                  >
                    blog Link
                  </Link>
                </li>
                <li>
                  <a 
                    href="/blog"
                  >
                    blog anchor
                  </a>
                </li>
                <li>contacto</li>
              </ul>
            </nav>
          </header>
          
          <main className='flex flex-col p-8 text-3xl font-bold underline'>{/* estilos de tailwindcss */}
            HOLA MUNDO
          </main>
          
          <footer className="fixed bottom-0 w-full h-10 bg-slate-500" />
        </>
      )
}

export default Home;
