'use client';
import Image from "next/image";

export default function Modal(props) {

  return (
    <section id="modal" className={`${props.show}  ${props.modal ? 'flex' : 'hidden opacity-0'} 
                                  justify-center items-center fixed inset-0 bg-[#0000006f]  backdrop-blur-md`}>
      <div className={` ${props.show}   text-black bg-white  w-[90%] sm:h-[50%]  sm:w-[80%] lg:w-[60%]
                                        rounded-lg shadow p-2 flex flex-col justify-between items-center `}>

        <div className="flex flex-col justify-between w-full h-[50%] sm:flex-row gap-4 sm:gap-2">
          <Image src={props.url} className="sm:w-1/2 bg-cover object-cover rounded-lg " />
          <div className=" sm:w-1/2 border border-dashed w-full rounded-lg h-full p-2">
            <h2 className="text-center  font-semibold text-2xl"> {props.name}</h2>
            <p className="text-pretty leading-snug tracking-widest mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga itaque necessitatibus ut quod rerum perspiciatis,
              asperiores quo at cupiditate aspernatur illo odio! Molestias, laudantium! Dolorum adipisci itaque iusto ipsa.</p>
          </div>
        </div>
        <button className="text-xl text-rose-400 font-bold p-6"
          onClick={() => props.close()}


        >Cerrar</button>

       
      </div>

    </section>

  )
}
