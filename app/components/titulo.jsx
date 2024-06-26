

export const Titulo = (props) => {
  return (
    <section className="w-full flex flex-col items-center gap-1 my-[5rem] flex-1">
          <h1 className="titulo text-[2.8em] font-extrabold bg-gradient-to-r flex-1
           from-cyan-500 to-green-300 text-transparent bg-clip-text leading-normal
           md:text-[4em] lg:text-[6em]">{props.titulo}</h1>
          <h2 className=" text-cyan-500 text-[1.8em] md:text-[2.5em] flex-1">{props.subtitulo}</h2>
    </section>
  )
}
