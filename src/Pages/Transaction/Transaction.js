import TransactionActionModal from "./TransactionActionModal";
import {useEffect, useState} from "react";
import TransactionApi from "../../Apis/TransactionApi";
import TransactionItem from "./TransactionItem";
import TransactionDelete from "../../Components/Transaction/TransactionDelete";
import Lottie from "lottie-react";
import AniEmpty from "../../LottieData/empty.json";
import Skeleton from "react-loading-skeleton";
import TransactionEditModal from "../../Components/Transaction/TrasactionEditModal";

function Transaction() {
    const [transactions, setTransactions] = useState([]);
    const [listTransaction, setListTransaction] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isActive,setIsActive] = useState(2)
    const fetchTransaction = async () => {
        try {

            const response = await TransactionApi.getAll();
            if (response.data == null) {

                setTransactions([])
            } else {
                setTransactions(response.data);
                setListTransaction(response.data)
            }

        } catch (error) {
            console.error('Error', error)
        } finally {
            setLoading(false);
        }
    };

    const getIncomesTransaction = ()=>{
        const incomesransactions = transactions.filter((tr)=> tr.categoryType == 1);
        setListTransaction(incomesransactions);
        setIsActive(1)
    }
    const getOutcomesTransaction = ()=>{
        const outTransactions = transactions.filter((tr)=> tr.categoryType == 0);
        setListTransaction(outTransactions)
        setIsActive(0)
    }
    const getAll = ()=>{
        setListTransaction(transactions);
        setIsActive(2)
    }

    useEffect(() => {

        fetchTransaction();
    }, []);

    return (
        <div>
            <div className="d-flex flex-wrap align-items-center mb-3">
                <div className="me-auto">
                    <div className="card-tabs style-1 mt-3 mt-sm-0">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <button className={isActive ==2 ? "nav-link active" : "nav-link"} onClick={getAll}>Tất cả</button>
                            </li>
                            <li className="nav-item">
                                <button className={isActive ==1 ? "nav-link active" : "nav-link"} onClick={getIncomesTransaction}>Thu</button>
                            </li>
                            <li className="nav-item">
                                <button className={isActive ==0 ? "nav-link active" : "nav-link"} onClick={getOutcomesTransaction}>Chi</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <TransactionActionModal/>
            </div>
            <div className="row">
                <div className="col-12">
                    {
                        loading ? (
                            <Skeleton count={2} height={200}/>
                        ) : (
                            <>{
                                listTransaction.length == 0 ?
                                    (<div className="w-25 mx-auto pb-5">
                                        <Lottie animationData={AniEmpty}
                                        />
                                    </div> ): (
                                        <>{
                                            listTransaction.map((transaction, i) =>
                                                (<TransactionItem key={transaction.id}
                                                                  transaction={transaction}
                                                                  deleteBtn={<TransactionDelete
                                                                      transactionId={transaction.id}
                                                                      />}
                                                                  editBtn={<TransactionEditModal transactionId={transaction.id}/>}
                                                />))
                                        }</>)
                            }
                            < />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
    export default Transaction;