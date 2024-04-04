//import React from 'react'   /* ya no es necesario en las ultimas versiones de react */
import telefono from "../assets/telefono.png";
import correo from "../assets/correo.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import x from "../assets/x.png";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import home from "../assets/home.png";
import lupa from "../assets/lupa.png";
import menu from "../assets/menu.png";

export const Header = () => {
    /* const handleChange = e => {
        setBusqueda(e.target.value);
        console.log("Busqueda: " + e.target.value)
    } */
  return (
    <header className="flex flex-col bg-rojoPrincipal w-full">
        <div id="contacto-redes" className="hidden sm:flex flex-row flex-nowrap bg-gris1 px-16 justify-between">
            
            <div id="tel-correo" className="flex">
                <div id="telefono" className="flex items-center">
                    <img className="size-5" src={telefono} alt="Telefono"/>
                    <p className="pl-2">(+57) 300 000 0000</p>
                </div>
                <div id="correo" className="flex items-center pl-5">
                    <img className="size-5" src={correo} alt="Correo"/>
                    <p className="pl-2">ventas@plustronics.com</p>
                </div>
            </div>

            <div id="redes-sociales" className="flex">
                <div className="flex items-center space-x-3">
                    <a href="https://www.whatsapp.com">
                        <img className="size-5" src={whatsapp} alt="Icono Whatsapp"/>
                    </a>
                    <a href="https://www.instagram.com">
                        <img className="size-5" src={instagram} alt="Icono Instagram"/>
                    </a>
                    <a href="https://www.facebook.com">
                        <img className="size-5" src={facebook} alt="Icono Facebook"/>
                    </a>
                    <a href="https://www.x.com">
                        <img className="size-5" src={x} alt="Icono X"/>
                    </a>
                </div>
            </div>
        </div>

        <div id="logo-busqueda" className="px-4 sm:flex sm:px-16 justify-between">

            <div id="logo-m" className="m-2 w-1/2 flex sm:m-3">
                <a href="https://www.plustronics.com">
                    <img className="w-36 hidden sm:flex" src={logo} alt="Logo Empresa"/>
                    <img className="w-32 sm:hidden" src={logo2} alt="Logo Empresa"/>
                </a>
            </div>

            <div className="flex sm:w-2/5">
                <div id="menu" className="m-2 h-9 flex sm:hidden">
                    <img className="" src={menu} alt="Logo Empresa"/>
                </div>

                <div className="bg-gris1 m-2 w-full h-9 flex self-center rounded-md shadow-md">
                        <input 
                            className="h-9 w-5/6 p-2 rounded-l-md shadow-md" 
                            placeholder="Buscar producto..."/>
                            {/* value={busqueda} */}
                        <a href="#/buscar" className="size-8 m-auto" >
                            <img className="h-full" src={lupa} alt="Lupa"/>
                        </a>
                </div>
            </div>
        </div>

        <div id="nav-bar" className="hidden sm:flex flex-row px-16 my-auto">
            <a className="pr-2" href="https://www.plustronics.com">
                <img className="w-8" src={home} alt="Logo Empresa"/>
            </a>
            <p className="h-full text-white">|</p>
            <a className="ml-5" href="https://www.plustronics/electronica.com">
                <p className="text-lg font-semibold text-white" >Electronica</p>
            </a>
            <a className="ml-5" href="https://www.plustronics/mecanica.com">
                <p className="text-lg font-semibold text-white" >Mecanica</p>
            </a>
            <a className="ml-5" href="https://www.plustronics/hobbies.com">
                <p className="text-lg font-semibold text-white" >Hobbies</p>
            </a>
            <a className="ml-5" href="https://www.plustronics/impresión 3D.com">
                <p className="text-lg font-semibold text-white" >Impresión 3D</p>
            </a>
        </div>
    </header>
  )
}



{/* <div id="logo-busqueda" className="px-4 flex sm:flex sm:px-16 justify-between">

<div id="logo" className="m-2 hidden sm:flex sm:m-3">
    <a href="https://www.plustronics.com">
        <img className="w-20 sm:w-36" src={logo} alt="Logo Empresa"/>
    </a>
</div>

<div id="logo" className="m-2 w-1/2 flex sm:hidden">
    <a href="https://www.plustronics.com">
        <img className="w-32 " src={logo2} alt="Logo Empresa"/>
    </a>
</div>

<div id="menu-movil" className="m-2 h-9 flex sm:hidden">
    <img className="" src={menu} alt="Logo Empresa"/>
</div>

<div className="bg-gris1 m-2 w-5/6 h-9 sm:w-1/3 flex self-center rounded-md shadow-md">
    <input 
        className="h-9 w-5/6 p-2 rounded-l-md shadow-md" 
        placeholder="Buscar producto..."/>
    <div className="size-8 m-auto">
        <img className="h-full" src={lupa} alt="Lupa"/>
    </div>
</div>
</div> */}
