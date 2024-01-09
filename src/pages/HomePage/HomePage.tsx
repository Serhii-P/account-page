import cardLogo from "../../assets/images/card-logo.png";
import CreditCard from "../../components/CreditCard/CreditCard";
import { creditCardData } from "../../dummy_data/creditCardData";
import AddIcon from "../../components/AddIcon/AddIcon";
import { useState } from "react";
import DarkButton from "../../components/DarkButton/DarkButton";
import TransactionList from "../../components/TransactionList/TransactionList";
import { transactions } from "../../dummy_data/transaction";
import { bankCards } from "../../dummy_data/bankCards";
import { CardProps } from "../../types/card";
import { maskLastFourDigits } from "../../utils/maskAccountNumber";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const [activeTransaction, setActiveTransaction] = useState("all");

  const handleTransactionClick = (button: string) => {
    setActiveTransaction(button);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftContent}>
        <h1>XEPPT Account Balance</h1>
        <div className={styles.balance}>
          <img src={cardLogo} alt="card logo" />
          <h1>$191.00</h1>
        </div>
        <h1>XEPPT Prepaid Card</h1>

        <div className={styles.cardsBlock}>
          <CreditCard {...creditCardData} />
          <div className={styles.addNewCard}>
            <AddIcon />
            <h1>Order a new card</h1>
          </div>
        </div>

        <h1>Transactions</h1>

        <div className={styles.transactionNav}>
          <div className={styles.transactionActivity}>
            <button
              onClick={() => handleTransactionClick("all")}
              className={activeTransaction === "all" ? styles.activeButton : ""}
            >
              All
            </button>
            <button
              onClick={() => handleTransactionClick("xeppt")}
              className={
                activeTransaction === "xeppt" ? styles.activeButton : ""
              }
            >
              XEPPT Card
            </button>
          </div>
          <div className={styles.showMoreBtn}>
            <DarkButton text="Show more" />
          </div>
        </div>

        <div>
          <TransactionList transactions={transactions} />
        </div>
        <div className={styles.showMoreBtnMobile}>
          <DarkButton text="Show more" />
        </div>
      </div>
      <div className={styles.rightContent}>
        <DarkButton text="Add money" />
        <div>
          <h2>Bank Account and Cards</h2>

          <div className={styles.bankCardsBlock}>
            {bankCards.map((card: CardProps) => (
              <div key={card.id} className={styles.shortInfo}>
                <h3>
                  {card.bank} ({maskLastFourDigits(card.number)})
                </h3>
              </div>
            ))}
          </div>
          <div className={styles.linkBlock}>
            <AddIcon />
            <a href="#">Link a card or bank</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
