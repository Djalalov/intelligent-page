import HeroImg from "../../assets/4.png";

const Slide = () => {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={HeroImg}
        alt=""
      />
    </div>
  );
};

export default Slide;
