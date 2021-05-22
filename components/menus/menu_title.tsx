const Menu = (props) => {
  return (
    <div className="grid">
      <div className="grid-cols-12 gap-4">
        <h1 className="font-bold text-center text-5xl text-yellow-700">
          Level<span className="text-blue-900">Select</span>
        </h1>

        <p className="font-bold text-center text-xl text-gray-500">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default Menu;
