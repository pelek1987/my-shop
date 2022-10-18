import { RatingProps } from "./Rating.types";

const Rating = ({ rating }: RatingProps) => (
  <div className="my-2 text-sm text-blue-500 font-bold">Rating: {rating}</div>
);

export default Rating;
