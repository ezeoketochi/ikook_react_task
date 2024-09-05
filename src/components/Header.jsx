import ikookIcon from "../assets/Logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCart from "../assets/shopping_cart.svg";
import User from "../assets/user.svg";
import Language from "../assets/language.jpeg";
import Hamburger from "../assets/hamburger.png"


export default function Header() {
  const tabs = [
    { name: "Location", hasDiv: true },
    { name: "Event Date", hasDiv: true },
    { name: "Guest", hasDiv: false },
  ];
  return (
    <div className="h-[117px]">
      <div className="shadow-md p-5">
        <div className="flex items-center justify-between mx-48 ">
          <img className="hidden md:block h-22 w-22" src={ikookIcon} alt="" />
          <div className="flex mb-2 w-2/5 flex-row  justify-around items-center gap-3 px-4 py-2 rounded-3xl bg-white shadow-md border border-gray-50">
            <div className="   ">
              <ul className="flex flex-col md:flex-row  gap-5 items-center justify-center">
                {tabs.map((tab) => (
                  <div className="flex gap-12">
                    <h1 className="font-bold">{tab.name}</h1>
                    {tab.hasDiv && (
                      <div className="h-[30px] bg-gray-300 w-[1px]"> </div>
                    )}
                  </div>
                ))}

                <div className="flex bg-ikookYellow text-center  text-white rounded-2xl px-3 py-2 items-center text-sm font-medium">
                  <SearchIcon />
                  <h1>Search</h1>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex gap-12">
              <img src={ShoppingCart} alt="" />
              <button>
                <h1>Login</h1>
              </button>
            </div>

            <div className="flex items-center rounded-3xl mr-3 border p-2  ml-6 border-gray-300">
              <div>
                <img
                  className="bg-gray-50 p-1 rounded-xl mx-2"
                  src={User}
                  alt=""
                />
              </div>
              <div className="h-[10px] w-[20px]">
                <img src={Hamburger}/>
              </div>
            </div>
            <img
              className="h-[22px] w-[22px] rounded-xl"
              src={Language}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
