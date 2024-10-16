import Image from "next/image";


export default function Home() {

  return (
    <>
      <main className="w-full ">
        <section className="w-full flex">
          <div className="w-2/5 h-96  bg-slate-50 flex flex-col items-center justify-center gap-6 ps-40">
            <h1 className="title_gradient text-4xl font-semibold   ">
              Boostrap 5 theme
            </h1>
            <h2 className="text-xl">
              crafted by <span className="font-bold">ThemeWagon</span>
            </h2>
            <p>
              ThemeWagon offers an wide array of category-oriented <br />
              Free and Premium  Bootstrap HTML Templates and Themes.
            </p>
            <button className="w-24 h-7 button_gradient text-white  rounded-md me-60">
              Check Demo
            </button>
          </div>
          <div className="w-3/5 h-96 bg-slate-50 ">
            <Image
              src="/prac3recursos/themewagon/2.home/illustration1.png"
              alt="image meeting"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </section>
        <section className="w-full h-24  flex gap-14 justify-center items-center mt-8 border-t-2 border-b-2  ">
          <figure className="w-32 h-7 ">
            <Image
              src= "/prac3recursos/themewagon/2.home/google.png"
              alt="google logo"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </figure>
          <figure className="w-32 h-7  ">
            <Image
              src="/prac3recursos/themewagon/2.home/netflix.png"
              alt="netflix logo"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </figure>
          <figure className="w-32 h-7  ">
            <Image
              src= "/prac3recursos/themewagon/2.home/microsoft.png"
              alt="microsoft logo"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </figure>
          <figure className="w-32 h-7  ">
            <Image
              src="/prac3recursos/themewagon/2.home/mailbuster.png"
              alt="mailbuster logo"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </figure>
          <figure className="w-32 h-7  ">
            <Image
              src= "/prac3recursos/themewagon/2.home/themewagon.png"
              alt="themewagon logo"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </figure>
        </section>
      </main>
     
     

    </>
  );
}
