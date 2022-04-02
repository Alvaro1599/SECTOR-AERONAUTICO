import React from 'react';
import CardCourse from './Components/CardCourse';
import NavigationCardCourse from './Components/NavigationCardCourse';
import border from '../../assets/Home/borderButton.svg';
import CardProgram from './Components/CardProgram';
import DetailsCard from './Components/DetailsCard';
import fly from '../../assets/Home/fly.svg';
import person from '../../assets/Home/person.svg';
import teach from '../../assets/Home/teach.svg';
import fedd from '../../assets/Home/fedd.svg';
import CardDetail from './Components/CardDetail';
import laptop from '../../assets/Home/laptop.svg';
import Review from './Components/Review';
function Home() {
    return (
        <section className='text-white px-[30px]  pb-[50px] '>
            <article className='w-full pb-[88px] flex flex-col justify-start text-full  leading-[46px]'>
                <h1 className='text-[40px] text-left mb-[22px] '>
                    <span className='font-extrabold text-transparent bg-clip-text bg-text'>Potencia </span>
                    <span className='font-normal'>tus </span>
                    <span className='font-extrabold text-transparent bg-clip-text bg-text'>conocimientos </span>
                    <span className='font-normal'>y genera nuevas</span>{' '}
                    <span className='font-extrabold text-transparent bg-clip-text bg-text'>habilidades</span>{' '}
                </h1>
                <button className=' w-[191px] py-[6px] bg-button pr-[19.8px]  pl-[17.8px] text-left font-prox text-[16px] rounded-[5px] leading-[150%]'>
                    Ver cursos y carreras
                </button>
            </article>
            <article className='w-full text-left pb-[48px]'>
                <h1 className='pb-[10px] font-prox font-extrabold text-[24px] text-left leading-[28.8px]'>
                    Aprovecha de nuestros cursos gratuitos
                </h1>
                <p className='font-prox font-semibold text-[18px] leading-[25.2px]'>
                    Próximos inicios training online a tiempo real
                </p>
            </article>
            <div className='w-full px-[18px] pb-[109px]'>
                <div className='w-full pb-[48px] '>
                    {/* contenedor de los cards */}
                    <CardCourse />
                </div>
                <NavigationCardCourse />
            </div>
            <section className='w-full font-prox'>
                <h1 className='text-[28px] font-extrabold leading-[38.4px] text-center pb-[37px]'>
                    Descubre Nuestras Carreras
                </h1>
                <div className='w-full flex justify-between pb-[67px]'>
                    <button className='text-[16px] leading-[24px] font-extrabold'>Aeronáutica</button>
                    <button className='text-[16px] text-center  px-[27.88px] py-[6px] leading-[24px] font-extrabold text-transparent bg-clip-text  bg-button '>
                        Aeronáutica
                    </button>
                </div>
            </section>
            <div className='flex flex-col px-[23px] pb-[84px]'>
                <div className='w-full pb-[48px] '>
                    <CardProgram />
                </div>
                <NavigationCardCourse />
            </div>
            <section className='pb-[63px]'>
                <DetailsCard
                    ico={fly}
                    title={'Sumergete en la industria'}
                    text={
                        'Profundiza tus conocimientos en aviónica, motores, fundamentos, mecatrónica y otras especialidades en una plataforma educativa en en ciencia aeronáuticas.'
                    }
                />
                <DetailsCard
                    ico={person}
                    title={'Sumergete en la industria'}
                    text={
                        'Profundiza tus conocimientos en aviónica, motores, fundamentos, mecatrónica y otras especialidades en una plataforma educativa en en ciencia aeronáuticas.'
                    }
                />
                <DetailsCard
                    ico={teach}
                    title={'Sumergete en la industria'}
                    text={
                        'Profundiza tus conocimientos en aviónica, motores, fundamentos, mecatrónica y otras especialidades en una plataforma educativa en en ciencia aeronáuticas.'
                    }
                />
                <DetailsCard
                    ico={fedd}
                    title={'Sumergete en la industria'}
                    text={
                        'Profundiza tus conocimientos en aviónica, motores, fundamentos, mecatrónica y otras especialidades en una plataforma educativa en en ciencia aeronáuticas.'
                    }
                />
            </section>
            <section className='w-full  font-prox'>
                <h1 className='text-[28px] leading-[38.4px] font-extrabold'>Aprende a tu Ritmo</h1>
                <p className='text-[17px] leading-[28.2px] font-semibold pb-[30px]'>Nuevos Cursos, Nuevos Retos</p>
                <div className='w-full pb-[41px]'>
                    <CardDetail />
                </div>
                <NavigationCardCourse />
            </section>
            <section className='w-full pt-[99px] pb-[47px]'>
                <h1 className='text-[32px] leading-[38.4px] font-extrabold pb-[30px]'>
                    Potenciamos el pensamiento estratégico
                </h1>
                <DetailsCard
                    ico={laptop}
                    title={'Educación digital a través del microlearning'}
                    text={
                        'Clases en video cortas que generan mayor recordación comparada con la educación tradicional.'
                    }
                    other={true}
                />
                <DetailsCard
                    ico={laptop}
                    title={'Educación digital a través del microlearning'}
                    text={
                        'Clases en video cortas que generan mayor recordación comparada con la educación tradicional.'
                    }
                    other={true}
                />
                <DetailsCard
                    ico={laptop}
                    title={'Educación digital a través del microlearning'}
                    text={
                        'Clases en video cortas que generan mayor recordación comparada con la educación tradicional.'
                    }
                    other={true}
                />
            </section>
            <section className='flex flex-col font-prox items-center'>
                <div className='w-[300px] h-[246px] bg-[#C4C4C4] rounded-[10px] ' />
                <h1 className='pt-[42px] text-[32px] font-extrabold leading-[38.4px] text-CP1 pb-[18px]'>
                    Verifica tu certificado
                </h1>
                <p className='font-semibold text-[23px] leading-[28.8px] pb-[51px]'>
                    Verifica el certificado Sector Aeronautico usando el código único del diploma.
                </p>
                <input type='text' className='w-full h-[38px] rounded-[5px] mb-[28px]' />
                <button className='w-full bg-button px-[119.06px] py-[6px] font-extrabold text-[16px] leading-[24px] rounded-[5px] mb-[127px]'>
                    Conocer
                </button>
            </section>
            <section className=' pb-[38px]'>
                <div className='w-full flex  pb-[38px]'>
                    <Review />
                </div>
                <NavigationCardCourse />
            </section>
            <section className=' pb-[124px]'>
                <img src='' alt='' />
                <h1>Capacita a tu equipo para el mañana </h1>
                <h2>Sector Aeronautico para empresas.</h2>
                <button className='w-full bg-button px-[119.06px] py-[6px] font-extrabold text-[16px] leading-[24px] rounded-[5px] mb-[127px]'>
                    Conocer
                </button>
            </section>
        </section>
    );
}

export default Home;
