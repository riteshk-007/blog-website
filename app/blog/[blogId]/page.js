import Image from "next/image";

const page = () => {
  return (
    <div className="lg:w-11/12 flex items-center justify-center flex-col mx-auto ">
      <span className="lg:h-[500px] overflow-hidden rounded-lg">
        <Image
          src={"/images/banner2.jpg"}
          width={1780}
          height={500}
          alt="page"
        />
      </span>
      <span className="w-full flex items-center lg:items-start lg:justify-start justify-center my-5">
        <h1 className="font-bold capitalize md:text-4xl text-xl ">
          Create A Blog Webiste With Nextjs
        </h1>
      </span>
      <span className="w-full flex items-center lg:items-start lg:justify-start justify-center">
        <p className="p-2 text-base">
          About Welcome to Blog - your one-stop destination for reading and
          writing captivating blogs. As a leading blog website, we strive to
          provide an immersive platform where individuals can freely express
          their thoughts, share valuable insights, and connect with a diverse
          community of like-minded individuals. Companys Journey Our journey
          began with a simple vision - to create a space where individuals could
          unleash their creativity and thoughts through the power of blogging.
          Since our inception, we have been committed to fostering a vibrant and
          supportive environment for writers and readers alike. With each
          passing year, we have grown and evolved, constantly refining our
          platform to ensure a seamless user experience. Purpose and Goals At
          Blog, we firmly believe in the transformative power of words. Our
          purpose is to empower voices worldwide by providing a platform that
          enables writers to communicate their ideas, engage with others, and
          make a lasting impact. We strive to create an inclusive space, where
          diverse perspectives merge, fostering insightful discussions and
          encouraging personal growth. Our goals revolve around fostering
          creativity, encouraging knowledge-sharing, and nurturing a passionate
          and engaged community. By curating compelling content and facilitating
          meaningful interactions, we aim to inspire, educate, and entertain our
          audience. Introduction to the Team Behind the scenes, our dedicated
          team of skilled professionals is the backbone of Blog. We are a
          diverse group of writers, editors, developers, and enthusiasts united
          by our love for literary expression. With years of collective
          experience and a deep understanding of the blogging landscape, our
          team works tirelessly to ensure every visitors journey on our platform
          is enriching and enjoyable.
        </p>
      </span>
    </div>
  );
};

export default page;
