/* eslint-disable react/prop-types */
const StarRating = ({ rating }) => {
  const maxStars = 5;

  // Create an array with values from 1 to maxStars
  const stars = Array.from({ length: maxStars }, (_, index) => index + 1);

  return (
    <div className="flex items-center">
      {stars.map((star,index) => (
        <>
          <svg
            key={index}
            className={`h-4 w-4 fill-current ${
              star <= rating ? "text-yellow-500" : "text-gray-300"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 0l2.5 7h7.5l-6 5 2.5 7-6-5-6 5 2.5-7-6-5h7.5z" />
          </svg>
        </>
      ))}

      {/* <span className="ml-2 text-gray-700">
        {rating}/{maxStars}
      </span> */}
    </div>
  );
};

export default StarRating;
