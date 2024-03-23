import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import TextArea from "../../../ui/TextArea";
import ReviewCard from "../Review/ReviewCard";

export default function Review() {
  const review = [1, 2];
  return (
    <div className="    ">
      {review.map((item) => (
        <ReviewCard key={item} />
      ))}
      <form className="mt-4">
        <h1>
          Write a review for :
          <span className="text-xl font-semibold text-gray-600 ml-2">
            Darren Elder
          </span>
        </h1>
        <Input text="Title of your review" />
        <TextArea text="Your review" />
        <Button className="bg-[#0de0fe] py-3  px-4 my-4   text-bold rounded  text-white">
          Add Review
        </Button>
      </form>
    </div>
  );
}
