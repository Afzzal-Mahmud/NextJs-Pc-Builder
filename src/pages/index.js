import RootLayout from "@/layout/RootLayout";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";
export default function Home() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div>
      <div className="max-w-[1400px] h-[100vh] w-full m-auto py-[6rem] px-4 relative group">

        {/* ovarlay */}
        <div className="absolute right-[18px] left-[18px]  bg-black/70 h-[80vh] rounded-2xl">
          
        </div>

        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})`}}
          className="w-full h-[80vh] rounded-2xl bg-center bg-cover duration-300"
        >
          <div className="relative">

          <h1 className="text-white absolute top-[20%] sm:top-[40] md:top-[35%] left-[15%] sm:left-[10%] right-[10%]">Experience the New <br className="hidden sm:block" /> Perspective of <span className="text-[#0ee195]">Building Your <br className="hidden lg:block" /> Dream PC</span></h1>
          <button className="mt-[22rem] md:mt-[27rem] ml-[15%] sm:ml-[10%] top-[100%] inline-block px-6 pb-2 pt-2.5 shadow-[0_4px_9px_-4px_#3b71ca]">
                Chose Yours
          </button>
        </div>
          </div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsCaretLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsCaretRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              /* sends the index of each slide and setting the state*/
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
