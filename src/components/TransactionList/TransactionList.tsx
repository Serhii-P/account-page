import { Transaction } from "../../types/transactions";
import TransactionCard from "../TransactionCard/TransactionCard";
import styles from "./TransactionList.module.scss";

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className={styles.transactionList}>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
