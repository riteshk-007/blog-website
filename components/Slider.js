"use client";
import Carousel from "reactjs-nextjs-carousel";
const Slider = () => {
  const slides = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
  ];

  return (
    <>
      <div className="w-[95%] mt-5 shadow-md mx-auto overflow-hidden rounded-2xl xl:h-[85vh] object-contain relative">
        <Carousel
          slides={slides}
          autoSlide={true}
          carouselWidth={"100%"}
          effect="slide"
          autoSlideInterval={7000}
          showControlArrow={false}
          showThumbs={false}
        />
        <h1 className="absolute top-1/3 lg:top-1/2 left-[10%] transform text-xl  md:text-4xl  lg:text-7xl text-white font-bold">
          Welcome to the <br />
          <span className="md:text-4xl  lg:text-8xl text-xl">
            Blog Website{" "}
          </span>{" "}
          <br />
          <span className="text-xs   lg:text-base flex flex-col gap-5 mt-4">
            you can read and write blogs here
            <span className="text-xs   lg:text-base">made by Ritesh</span>
          </span>
        </h1>
      </div>
    </>
  );
};

export default Slider;
