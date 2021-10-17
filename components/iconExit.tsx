import Link from "next/link";
import { IoIosArrowDropleft } from "react-icons/io";
import styles from "styles/Home.module.css";
const buttonExit = (props) => {
  return (
    <>
      <div className="text-left">
        <Link href={props.url}>
          <button>
              <IoIosArrowDropleft size="35" className={styles.exit_icon}/>
          </button>
        </Link>
      </div>
    </>
  );
};

export default buttonExit;
