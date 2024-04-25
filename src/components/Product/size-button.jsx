// Reusable button component for size selection
const SizeButton = ({ value, key, selected, onClick }) => {
  return (
    <button
      className={
        selected
          ? "border-2 border-black  p-5 w-5 h-5 flex justify-center items-center cursor-pointer"
          : "border border-[#CCCCCC] p-5 w-5 h-5 flex justify-center items-center cursor-pointer"
      }
      key={key}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default SizeButton;
