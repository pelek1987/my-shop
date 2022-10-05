import { RatingProps } from "./Rating.types";

const Rating = ({ rating }: RatingProps) => (
  <div className="text-sm text-blue-500 font-bold">{rating}</div>
);

export default Rating;
