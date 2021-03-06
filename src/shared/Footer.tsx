import React from 'react';
import logo from '../assets/Nav/logo-sm.svg';
import fb from '../assets/Home/facebook.svg';
import ig from '../assets/Home/ig.svg';
import banc1 from '../assets/Home/bancs1.svg';
import banc2 from '../assets/Home/bancs2.svg';

function Footer() {
    return (
        <footer className='flex pt-[49px] flex-wrap bg-footer text-left px-[30px] text-white justify-center'>
            <div className='w-1/2  flex flex-col items-center'>
                <img src={logo} alt='' />
                <div className='pt-[49px] w-full '>
                    <h1 className='mb-[21px]  font-prox  font-extrabold text-[12px] text-left  leading-[14.4px]'>
                        Contenido
                    </h1>
                    <div className='flex flex-col items-start gap-3'>
                        <h1 className='text-[12px]'>Artículos Recientes</h1>
                        <h1 className='text-[12px]'>Vídeos</h1>
                        <h1 className='text-[12px]'>Livestream</h1>
                    </div>
                </div>
                <div className='pt-[49px] w-full pb-[30px]'>
                    <h1 className='mb-[21px] font-prox font-extrabold text-[12px] leading-[14.4px]'>
                        ¿Necesitas Ayuda?
                    </h1>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[12px]'>Términos y condiciones</h1>
                        <h1 className='text-[12px]'>Política de privacidad</h1>
                        <h1 className='text-[12px]'>Politica de cookies</h1>
                        <h1 className='text-[12px]'>Libro de reclamaciones</h1>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex flex-col items-center'>
                <div className='flex items-center justify-around w-full pb-[60px]'>
                    <img src={fb} alt='' />
                    <img src={ig} alt='' />
                </div>
                <div className=' pb-[30px]'>
                    <h1 className='mb-[21px] font-prox font-extrabold text-[12px] leading-[14.4px]'>Plataforma</h1>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[12px]'>Iniciar Sesión</h1>
                        <h1 className='text-[12px]'>Cursos Inscritos</h1>
                        <h1 className='text-[12px]'>Logros</h1>
                        <h1 className='text-[12px]'>Mis notas</h1>
                        <h1 className='text-[12px]'>Tus pagos</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center pt-[80px] pb-[30.5px]'>
                    <img src={banc1} alt='' className='pb-[17.5px]' />
                    <img src={banc2} alt='' className='w-[40%]' />
                </div>
                <h1 className='text-[9px] pb-[43px] w-full text-center font-normal text-N80'>
                    © TODOS LOS DERECHOS RESERVADOS 2020
                </h1>
            </div>
        </footer>
    );
}

export default Footer;
