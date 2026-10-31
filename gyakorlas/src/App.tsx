import { useState } from 'react'
import './App.css'
import './index.css'
import { COFFEELIST } from './drinks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="hero" className='lg:min-h-128 bg-[url("/assets/hero-coffee.jpg")] bg-cover bg-center bg-no-repeat py-24'>
        <h1 className='text-white lg:pt-30 text-2xl lg:text-5xl uppercase font-extrabold text-shadow-lg text-shadow-gray-700/10 relative'>
          <span className='absolute left-[12%]'>React</span>
          <span className='absolute right-[12%]'>Coffee</span>
        </h1>
      </section>

      <section id="products" className='p-4 max-w-3xl mx-auto'>
        <h2 className='my-3 capitalize font-semibold text-amber-950 text-lg'>Drinks</h2>
          <ul className='flex gap-2 justify-center flex-wrap'>
            <li><button className='py-0.5 px-2 hover:bg-(--accent) transition-all duration-300 ease-in-out cursor-pointer bg-amber-900 rounded-2xl text-white text-sm'>Refreshing</button></li>
            <li><button className='py-0.5 px-2 hover:bg-(--accent) transition-all duration-300 ease-in-out cursor-pointer bg-amber-900 rounded-2xl text-white text-sm'>Milk-based coffee</button></li>
            <li><button className='py-0.5 px-2 hover:bg-(--accent) transition-all duration-300 ease-in-out cursor-pointer bg-amber-900 rounded-2xl text-white text-sm'>Sweet without sugar</button></li>
            <li><button className='py-0.5 px-2 hover:bg-(--accent) transition-all duration-300 ease-in-out cursor-pointer bg-amber-900 rounded-2xl text-white text-sm'>Traditional</button></li>
            <li><button className='py-0.5 px-2 hover:bg-(--accent) transition-all duration-300 ease-in-out cursor-pointer bg-amber-900 rounded-2xl text-white text-sm'>Dark aroma</button></li>
          </ul>

        <div className='md:grid-cols-4 grid-cols-2 grid gap-4'>
        {
          COFFEELIST.map((e, i)=>{
            return <>
              <article key={i} id={String(i)} className='rounded-xl my-4 bg-[#c9b69b] flex flex-col gap-2 p-2 justify-around'>
                <span className='rounded-lg bg-white h-42 overflow-hidden'><img src={`/assets/${e.src}`} alt={e.name} /></span>
                <h3 className='capitalize wrap-anywhere text-amber-900 text-wrap hyphens-auto font-bold text-sm'>{e.name}</h3>
                <span className='capitalize text-amber-950 font-bold text-xs'>{e.price.toFixed(2)}€</span>
                <button className='rounded-2xl text-xs uppercase text-white border-2 bg-white/10 hover:bg-white/20 transition-all duration-300 ease-in-out cursor-pointer px-2 py-1 border-white' onClick={()=>setCount((count)=>count + Number(e.price))}>Order</button>
              </article>
            </>
          })
        }
        </div>
      </section>

      <section id="promo" className="relative w-full overflow-hidden">
        <img
          src="/assets/seasonal-coffee.jpg"
          alt="Seasonal coffee with dark chocolate aroma"
          className="w-full h-auto block object-[80%_center] object-cover min-h-90 sm:min-h-0"
        />

        <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 md:p-10 lg:p-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold text-amber-900">
            <span className="text-white">Seasonal</span>
            <br />
            Offer
          </h2>

          <h3 className="mt-2 sm:mt-3 md:mt-5 text-amber-900 font-bold text-sm sm:text-base md:text-lg lg:text-xl capitalize">
            Dark Choco Latte
          </h3>

          <p className="text-amber-900 w-full max-w-[50%] md:max-w-[45%] lg:max-w-[40%] text-xs sm:text-sm lg:text-base mt-1 sm:mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est optio dolorum blanditiis facere animi, at sunt.
          </p>

          <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 w-full sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]">
            <div>
              <h4 className="text-xs sm:text-sm lg:text-base font-semibold capitalize text-amber-900">
                90% chocolate
              </h4>
              <p className="text-amber-900 text-[10px] sm:text-xs lg:text-sm">
                Using pure cacao beans
              </p>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm lg:text-base font-semibold capitalize text-amber-900">
                High Protein
              </h4>
              <p className="text-amber-900 text-[10px] sm:text-xs lg:text-sm">
                With our new protein soy milk 11g/100ml
              </p>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm lg:text-base font-semibold capitalize text-amber-900">
                0g sugar
              </h4>
              <p className="text-amber-900 text-[10px] sm:text-xs lg:text-sm">
                Made with no added sugar
              </p>
            </div>
          </div>
        </div>

        <div className="absolute md:top-[40%] top-[43%] left-[70%] md:left-[55%] lg:left-[60%] flex flex-col items-start gap-1">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-500 md:text-amber-900 font-extrabold">
            8.50€
          </span>
          <button
            className="rounded-2xl w-6 border border-white/40 text-xs sm:text-sm uppercase text-amber-500 md:text-amber-900 bg-white/20 hover:bg-white/40 transition-all duration-300 ease-in-out cursor-pointer px-3 sm:px-4 py-1 font-semibold"
            onClick={() => setCount((count) => count + 8.50)}
          >
            Order
          </button>
        </div>
      </section>

      <section id="basket" className="p-4">
        <h2 className="font-bold text-amber-900 uppercase text-center">
          Your total is {count.toFixed(2)}€
        </h2>
      </section>
    </>
  )
}

export default App
