

import Stak from "./components/stak";
import { Titulo } from "./components/titulo";


export default function Home() {
  return (
    <main className='px-12 md:px-32'>
     <Titulo titulo={'Josue Triminio'} subtitulo={'ForntEnd Developer'}/>
     <Stak />
    
    </main>
  );
}
