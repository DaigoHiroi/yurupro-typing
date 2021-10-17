import Link from "next/link";

const buttonExit = (props) => {
  return (
    <>
      <div className="pt-3 text-center">
        <Link href={props.url}>
          <button
            className="w-28 h-10 bg-green-700 hover:bg-green-900 text-white px-3 rounded"
            id="exit_button"
          >
            <div className="text-base font-bold">Exit</div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default buttonExit;
