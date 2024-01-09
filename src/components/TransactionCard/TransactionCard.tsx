import { Transaction } from "../../types/transactions";
import walletIcon from "../../assets/icons/wallet.svg";
import creditCardIcon from "../../assets/icons/credit-card.svg";
import styles from "./TransactionCard.module.scss";

interface TransactionCardProps {
  transaction: Transaction;
}
const TransactionCard = ({ transaction }: TransactionCardProps) => {
  const { title, amount, status, date } = transaction;

  const amountColor = status === "Payment" ? "#4E4C47" : "#0F9D58";
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.iconsBlock}>
          {status === "Payment" ? (
            <div className={`${styles.payment} ${styles.icon}`}>
              <img src={creditCardIcon} alt="Payment" />
            </div>
          ) : (
            <div className={`${styles.transfer} ${styles.icon}`}>
              <img src={walletIcon} alt="Transfer from bank" />
            </div>
          )}
        </div>
        <div>
          <h2>{title}</h2>
          <p>
            {date}, {status}
          </p>
        </div>
      </div>
      <h2 style={{ color: amountColor }}>{amount}</h2>
    </div>
  );
};

export default TransactionCard;
