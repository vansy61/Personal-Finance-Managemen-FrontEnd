import TransactionActionModal from "./TransactionActionModal";
import {useEffect, useState} from "react";
import TransactionApi from "../../Apis/TransactionApi";
import TransactionItem from "./TransactionItem";
import TransactionDelete from "../../Components/TransactionDelete/TransactionDelete";
import Lottie from "lottie-react";
import AniEmpty from "../../LottieData/empty.json";
import Skeleton from "react-loading-skeleton";

function Transaction() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTransaction = async () => {
            try {

                const response = await TransactionApi.getAll();
                if (response.data == null) {

                    setTransactions([])
                } else {
                    setTransactions(response.data);
                }

            } catch (error) {
                console.error('Error', error)
            } finally {
                setLoading(false);
            }
        };
        fetchTransaction();
    }, []);

    return (
        <div>
            <div className="d-flex flex-wrap align-items-center mb-3">
                <div className="me-auto">
                    <div className="card-tabs style-1 mt-3 mt-sm-0">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" href="javascript:void(0);">Tất cả</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0);">Thu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0);">Chi</a>
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
                                transactions.length == 0 ?
                                    (<div className="w-25 mx-auto pb-5">
                                        <Lottie animationData={AniEmpty}
                                        />
                                    </div> ): (
                                        <>{
                                            transactions.map((transaction, i) =>
                                                (<TransactionItem key={transaction.id}
                                                                  transaction={transaction}
                                                                  deleteBtn={<TransactionDelete
                                                                      transactionId={transaction.id}
                                                                      handleShow={true}/>}
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