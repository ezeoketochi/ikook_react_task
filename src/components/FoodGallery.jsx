import foodImage from "../assets/food.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Chef from "../assets/chef.svg";
import Location from "../assets/location.png";

export function FoodItem() {
  return (
    <div className="flex flex-col my-5 overflow-x-hidden">
      <div
        className="flex flex-col justify-between p-2 h-[257px] w-[320px] bg-cover bg-center"
        style={{ backgroundImage: `url(${foodImage})` }}
      >
        <div className="flex justify-between">
          <div className="bg-white px-4  rounded-xl">Italian</div>
          <FavoriteBorderIcon className="text-white" />
        </div>

        <div className="flex-col">
          <div className="flex justify-between items-center">
            <h1 className="text-white font-bold">Grilled Barbeque Dishes</h1>
            <h1 className="font-bold text-ikookYellow text-[22px]">£20pp</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between shadow-md rounded-b-xl p-2 w-[320px]">
        <div className=" flex gap-2 rounded ">
          <img src={Chef} alt="" />
          <div className="flex flex-col">
              <h1 className="text-sm">Jim Howard</h1>

              <h1 className="text-xs text-gray-600">London</h1>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <h1 className="text-xs"> ⭐ 4.6</h1>
          <h1 className="text-xs text-gray-500">(23 Reviews)</h1>
        </div>
      </div>
    </div>
  );
}

export default function FoodGallery() {
  return (
    <div className="flex-col justify-center items-center mx-20">
      <div className="flex flex-wrap gap-12 justify-center">
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </div>

      <div className=" flex w-32 my-34 h-10 text-sm text-white bg-ikookYellow p-2 rounded-lg m-auto text-center font-bold justify-center items-center my-32">
        Load More
      </div>
    </div>
  );
}
