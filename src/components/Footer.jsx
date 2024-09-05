import SteamImg from "../assets/steam.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PayPal from "../assets/paypal.png";
import Visa from "../assets/visa.png";
import MasterCard from "../assets/mastercard.png";

export default function IkookFooter() {
  return (
    <footer className="overflow-x-hidden">
      <div className="bg-ikookYellow  ">
        <div className="p-4 mx-10">
          <div className="flex flex-col justify-around mt-12 ">
            <div className="flex justify-between h-[60px] items-center mb-12">
              <h1 className="font-bold text-3xl">Join our Newsletter</h1>
              <div className="p-2 bg-white w-1/6 rounded-3xl my-auto px-3 h-full">
                <input className="outline-none text-center py-2 w-full" placeholder="Enter your name" />
              </div>
              <div className=" bg-white rounded-3xl w-2/6 my-auto  px-3 h-full items-center justify-center">
                <input
                  className="outline-none text-center justify-center flex mx-auto py-4"
                  placeholder="Enter email"
                />
              </div>
              <button className="bg-black p-2 h-full text-white font-bold rounded-3xl px-5">
                Subscribe
              </button>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col">
                <img src={SteamImg} className="h-[80px] mb-10" alt="" />
                <div className="flex justify-between gap-4">
                  <FacebookIcon /> <TwitterIcon /> <InstagramIcon />{" "}
                  <LinkedInIcon />{" "}
                </div>
              </div>
              <div className="flex flex-col justify-between h-[200px]">
                <h1 className="font-bold text-xl">iKook</h1>
                <h1 className="text-gray-700">About us</h1>
                <h1 className="text-gray-700">How it works</h1>
                <h1 className="text-gray-700">FAQs</h1>
                <h1 className="text-gray-700">Privacy Policy</h1>
                <h1 className="text-gray-700">Terms & Condition</h1>
              </div>
              <div className="flex flex-col justify-between h-[200px]">
                <h1 className="font-bold text-xl">Services</h1>
                <h1 className="text-gray-700">Chef at Home</h1>
                <h1 className="text-gray-700">Large Event</h1>
                <h1 className="text-gray-700">Meal Prep</h1>
                <h1 className="text-gray-700">Fine Dining</h1>
                <h1 className="text-gray-700">More +</h1>
              </div>
              <div className="flex flex-col justify-between h-[200px]">
                <h1 className="font-bold text-xl">Experience</h1>
                <h1 className="text-gray-700">Signup as Chef</h1>
                <h1 className="text-gray-700">Gift Experience</h1>
                <h1 className="text-gray-700">Split Bills</h1>
                <h1 className="text-gray-700">Career</h1>
                <h1 className="text-gray-700">Blog</h1>
              </div>
              <div className="flex flex-col justify-between h-[200px]">
                <h1 className="font-bold text-xl">iKook Chef in</h1>
                <h1 className="text-gray-700">United Kingdom</h1>
                <h1 className="text-gray-700">Nigeria</h1>
                <h1 className="text-gray-700">Canada</h1>
                <h1 className="text-gray-700">South Africa</h1>
                <div className="flex border border-black rounded-2xl gap-2 p-1 px-2">
                  <h1 className="text-gray-700">see other countries </h1>
                  <ArrowForwardIcon className="text-gray-700" />
                </div>
              </div>
              <div className="flex flex-col justify-between h-[200px]">
                <h1 className="font-bold text-xl">Contact Us</h1>
                <h1 className="text-gray-700">0203 807 8500</h1>
                <h1 className="text-gray-700">team@ikook.co.uk</h1>
                <h1 className="text-gray-700">support</h1>

                <div className="flex justify-between">
                  <img src={PayPal} alt="" />
                  <img src={Visa} alt="" />
                  <img src={MasterCard} alt="" />
                </div>
                <h1 className="text-black">Your payment is secured</h1>
              </div>
            </div>
            <h1 className="text-gray-700 my-5">
              Copyright © 2022 iKooK, All Right Reserved
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
