import HeroImage from "../../assets/hero.jpg";
import AddPostForm from "../posts/AddPostForm";

export default function Hero() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="col-span-2">
        <img
          src={HeroImage}
          alt="today's pick"
          className="rounded-md  max-h-72 w-full bg-cover"
        />
      </div>
      <div className="col-span-1">
        <AddPostForm />
      </div>
    </div>
  );
}
