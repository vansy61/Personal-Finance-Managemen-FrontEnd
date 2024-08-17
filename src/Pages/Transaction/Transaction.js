import TransactionActionModal from "./TransactionActionModal";
import {useEffect, useState} from "react";
import TransactionApi from "../../Apis/TransactionApi";
import TransactionItem from "./TransactionItem";
import TransactionDelete from "../../Components/Transaction/TransactionDelete";
import Lottie from "lottie-react";
import AniEmpty from "../../LottieData/empty.json";
import Skeleton from "react-loading-skeleton";
import TransactionEditModal from "../../Components/Transaction/TrasactionEditModal";
import Helper from "../../utils/helpers";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";
import {useSelector} from "react-redux";


function Transaction() {
    const [transactions, setTransactions] = useState(null);
    const [categoryType, setCategoryType] = useState(2);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [startDate, setStartDate] = useState(moment().subtract(30, 'days'));
    const [endDate, setEndDate] = useState(moment());
    const statusReloadWallet = useSelector((state) => state.wallet.status);

    useEffect(() => {
        const fetchTransaction = async () => {
          await Helper.delay(600)
          try {
            const response = await TransactionApi.getAll({
              categoryType,
                startDate: startDate.format('YYYY-MM-DD'),
                endDate: endDate.format('YYYY-MM-DD'),
              page
            });
            setTransactions(response.data.content);
            setTotalPages(response.data.totalPages);
          } catch (error) {
            console.error('Error', error)
          }
        };
        setTransactions(null);
        fetchTransaction();
    }, [statusReloadWallet, categoryType, page, startDate, endDate]);

    const handleTypeChange = (type) => {
      setCategoryType(type);
    };

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(
        <li key={i} className={`page-item ${page === i ? "active" : ""}`}>
          <a className="page-link" href="javascript:void(0)" onClick={() => handlePageChange(i)}>
            {i + 1}
          </a>
        </li>
      );
    }

    return (
      <nav>
        <ul className="pagination pagination-gutter pagination-primary no-bg">
          <li className="page-item page-indicator">
            <a className="page-link" href="javascript:void(0)" onClick={() => handlePageChange(page - 1)} disabled={page === 0}>
              <i className="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          {pages}
          <li className="page-item page-indicator">
            <a className="page-link" href="javascript:void(0)" onClick={() => handlePageChange(page + 1)} disabled={page === totalPages - 1}>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  };

    const handleApplyDate = (event, picker) => {
        setStartDate(picker.startDate);
        setEndDate(picker.endDate);
    };



    const renderTransactions = () => {
        const transactionsGrouped = Helper.groupBy(transactions, "datetime");
        const sortedTransactions = Helper.sortStringDate(Object.keys(transactionsGrouped));
        return sortedTransactions.map((datetime) => {
          return (
            <div key={datetime} className="p-3 bg-white mb-3 rounded-1">
              <h4 className="mb-3"><span className="badge light badge-secondary">{datetime}</span></h4>
              {transactionsGrouped[datetime].map((transaction, j) => {
                console.log(transaction);
                return (
                  <TransactionItem key={transaction.id}
                   transaction={transaction}
                   deleteBtn={<TransactionDelete transactionId={transaction.id} />}
                   editBtn={<TransactionEditModal transactionId={transaction.id} />}
                   />
                )
              })}
            </div>
          );
        })
    }
  return (
      <div>
          <div className="d-flex flex-wrap align-items-center mb-3">
              <div className="me-auto d-flex">
                  <div className="card-tabs style-1 mt-3 mt-sm-0 me-3">
                      <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                              <button className={categoryType === 2 ? "nav-link active" : "nav-link"} onClick={() => handleTypeChange(2)}>Tất cả</button>
                          </li>
                          <li className="nav-item">
                              <button className={categoryType === 1 ? "nav-link active" : "nav-link"} onClick={() => handleTypeChange(1)}>Thu</button>
                          </li>
                          <li className="nav-item">
                              <button className={categoryType === 0 ? "nav-link active" : "nav-link"} onClick={() => handleTypeChange(0)}>Chi</button>
                          </li>
                      </ul>
                  </div>
                  <DateRangePicker
                      initialSettings={{
                          startDate: startDate.toDate(),
                          endDate: endDate.toDate(),
                          locale: {
                              format: 'DD/MM/YYYY',
                          },
                      }}
                      onApply={handleApplyDate}
                  >
                      <input
                          type="text"
                          className="form-control"
                          value={`${startDate.format('DD/MM/YYYY')} - ${endDate.format('DD/MM/YYYY')}`}
                          readOnly
                      />
                  </DateRangePicker>
              </div>

              <TransactionActionModal />
          </div>
          <div className="row">
              <div className="col-12">
                  {
                      transactions === null ? (
                          <Skeleton count={2} height={200}/>
                      ) : (
                          <>{
                            transactions.length === 0 ?
                                  (<div className="w-25 mx-auto pb-5">
                                      <Lottie animationData={AniEmpty}
                                      />
                                  </div> ): (
                                <>
                                  {
                                    renderTransactions()
                                  }
                                  <div className="d-flex justify-content-center mt-3">
                                    {renderPagination()}
                                  </div>
                                </>)
                          }
                          </>
                      )
                  }
              </div>
            <div className="col-12">

            </div>
          </div>
      </div>
  )
}

export default Transaction;