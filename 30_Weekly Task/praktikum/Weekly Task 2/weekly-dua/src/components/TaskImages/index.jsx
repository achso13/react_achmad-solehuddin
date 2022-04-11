import { useEffect, useState } from "react";

export default function TaskImages(props) {
  const images = props.imagesList;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChangeImage = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (images) {
      setActiveIndex(0);
    }
  }, [images]);

  return (
    <>
      <div>
        <div className="my-8 flex justify-center">
          {images.map((value, index) => (
            <button
              key={index}
              className={
                index === activeIndex
                  ? "mx-2 cursor-default rounded-full border-2 border-blue-500 bg-blue-500  px-4 py-2 text-white"
                  : "mx-2 rounded-full border-2 border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white"
              }
              onClick={() => handleChangeImage(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <img className="mx-auto" src={images[activeIndex]} alt="" />
      </div>
    </>
  );
}
