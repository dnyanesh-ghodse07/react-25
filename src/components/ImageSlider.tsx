import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ImageSlider = () => {
  const [imageId, setImageId] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1718554517666-2978ede88574?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718554517663-83ffd1ce66f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1694452285990-63cf7a538bec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1694452285887-5778834ee492?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
  ];

  const handleNext = () => {
    setImageId((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handlePrev = () => {
    setImageId((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex">
        <button onClick={handleNext}>
          <MdKeyboardArrowLeft size={30} />
        </button>
        <div className="w-96 shadow-lg rounded-md">
          <img
            className="shadow-lg rounded-md"
            src={images[imageId]}
            alt={`image`}
          />
        </div>
        <button onClick={handlePrev}>
          <MdOutlineKeyboardArrowRight size={30} />
        </button>
      </div>
      <div className="flex gap-2 justify-between items-center">
        {images.map((item, index) => {
          return (
            <div className={`cursor-pointer ${index !== imageId && 'opacity-40'}`} key={item} onClick={() => setImageId(index)}>
              <img src={item} width={50} alt="image-bottom" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
