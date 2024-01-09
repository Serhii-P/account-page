import styles from "./DarkButton.module.scss";

interface BtnProps {
  text: string;
}
const DarkButton = ({ text }: BtnProps) => {
  return <button className={styles.button}>{text}</button>;
};

export default DarkButton;
