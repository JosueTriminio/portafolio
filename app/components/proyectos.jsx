import Card from "./card"
import { Titulo } from "./titulo"
import img01 from '../../public/img/01.jpg'
import img2 from '../../public/img/guitar.png'



export const Proyectos = (props) => {
    return (
        <>
         
            <section className=" z-10" >
                <Titulo titulo='Proyectos' />

                <section className="sm:w-[70%] flex item-center justify-center sm:flex-row flex-wrap gap-4 mx-auto mt-6 ">
                    <Card titulo="card-1" url={img01} name="Prueba" />
                    <Card titulo="card-2" url={img2} name="Tienda de Guitarras" />
                    <Card titulo="card-2" url={img2} name="tienda online" />
                </section>

            </section>
        </>
    )
}
