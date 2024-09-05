export default function SearchTagItem({ name, isSelected, children }) {
  const unselected =
    "flex justify-center rounded-3xl items-center text-black h-[44px] w-[148px] border border-1";
  const selected = " bg-ikookYellow text-white ";
  return (
    <>
      <div className={isSelected ? unselected + selected : unselected}>
        {name}
      </div>
      <children />
    </>
  );
}

export function SearchSection() {
  const Tags = [
    { tag: "Chef at Home", isSelected: true },
    { tag: "Large Event", isSelected: false },
    { tag: "Meal Prep", isSelected: false },
    { tag: "Gormet Deleivery", isSelected: false },
    { tag: "Cooking Class", isSelected: false },
    { tag: "Fine Dining", isSelected: false },
    { tag: "Corporate Dining", isSelected: false },
    { tag: "CHEFS", isSelected: false },
  ];

  return (
    <div className="my-10 mx-48">
      <div className="mb-10" >
        <ul className="flex gap-2 justify-between ">
          {Tags.map((tag) => {
            return (
              <li>
                {<SearchTagItem name={tag.tag} flex items-center justify-between isSelected={tag.isSelected} />}{" "}
              </li>
            );
          })}
          <div className="border-l mx-6 h-10 my-auto"></div>

          <SearchTagItem name={"Filter"}></SearchTagItem>
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-black capitalize text-3xl">
          chef at home
        </h1>
        <div className=" flex justify-around  w-2/5 h-[59px] rounded-3xl  border-2 border-gray-50 p-2">
          <input
            placeholder="Can’t find what you want? use the custom booking"
            className="outline-none w-3/5 "
          />
          <button className="bg-ikookYellow rounded-2xl text-white font-bold px-4 py-2">
            Custom Booking
          </button>
        </div>

        <div className=" flex h-12 border-2 px-4  rounded-3xl items-center">
         
          <select
            id="exampleSelect"
            name="exampleSelect"
            className="bg-transparent outline-none"
          >
            <option className="capitalize font-bold" value="option1">Most Popular </option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
    </div>
  );
}
