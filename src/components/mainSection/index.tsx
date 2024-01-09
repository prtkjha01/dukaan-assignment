import "./styles.css";
import NextPayoutCard from "./dataCards/nextPayoutCard";
import AmountPendingCard from "./dataCards/amountPendingCard";
import AmountProcessedCard from "./dataCards/amountProcessedCard";
import Table from "./transactionsTable/Table";
const index = () => {
  return (
    <div className="main-section-wrapper p-8">
      <section className="overview">
        <header className="section-header flex justify-between mb-6">
          <div className="text-[20px] tracking-wider">Overview</div>
          <div className="time-dropdown flex items-center h-9 rounded">
            <span>This Month</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
                  fill="#4D4D4D"
                />
              </svg>
            </span>
          </div>
        </header>
        <div className="data-cards flex gap-5">
          <NextPayoutCard />
          <AmountPendingCard />
          <AmountProcessedCard />
        </div>
      </section>
      <section className="transactions mt-8">
        <div className="text-[20px] mb-5 tracking-wider">
          Transactions | This Month
        </div>
        <div className="badge-row flex gap-3 mb-6">
          <div className="badge active text-white px-4">Payouts (22)</div>
          <div className="badge px-4">Refunds (2)</div>
        </div>
        <Table />
      </section>
    </div>
  );
};

export default index;
