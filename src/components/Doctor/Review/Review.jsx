import ReviewCard from "./ReviewCard";

export default function Review() {
  const review = [1, 2, 3, 4, 5, 6];
  return (
    <div className=" m-6 md:mt-0 flex flex-col gap-4 border">
      {review.map((item) => (
        <ReviewCard key={item} />
      ))}
    </div>
  );
}
