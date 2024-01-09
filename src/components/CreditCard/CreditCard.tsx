import { maskCreditCard } from "../../utils/maskCreditCard";
import styles from "./CreditCard.module.scss";

interface CreditCardProps {
  status: string;
  amount: string;
  number: string;
}

const CreditCard = ({ status, amount, number }: CreditCardProps) => {
  const maskedCardNumber = maskCreditCard(number);

  return (
    <div className={styles.creditCard}>
      <div>
        <div className={styles.cardStatus}>{status}</div>
        <h1>${amount}</h1>
        <p className={styles.cardText}>Available Balance</p>
        <p>{maskedCardNumber}</p>
      </div>
    </div>
  );
};

export default CreditCard;
