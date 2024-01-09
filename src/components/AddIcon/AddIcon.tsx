import addIcon from "../../assets/icons/plus.svg";
import styles from "./AddIcon.module.scss";

const AddIcon = () => {
  return (
    <div className={styles.wrapper}>
      <img src={addIcon} alt="click to add" />
    </div>
  )
}

export default AddIcon