import { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

const StarRating = () => {
  const [starHover, setStarHover] = useState(0);
  const [starSelected, setStarSelected] = useState(0);
  return (
    <div className="flex gap-2 bg-slate-400 p-6">
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;
        return (
          <div
            key={index}
            onMouseEnter={() => setStarHover(starRating)}
            onMouseLeave={() => setStarHover(0)}
            onClick={() => setStarSelected(starRating)}
          >
            {starRating <= (starHover || starSelected) ? (
              <BsStarFill size={40} fill="gold" />
            ) : (
              <BsStar size={40} fill="#eadb74" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
