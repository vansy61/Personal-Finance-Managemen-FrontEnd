import TransactionActionModal from "../../Components/TransactionAction/TransactionActionModal";
import {useEffect, useState} from "react";
import TransactionApi from "../../Apis/TransactionApi";
import TransactionItem from "./TransactionItem";

function Transaction() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTransaction = async () => {
            try {

                const response = await TransactionApi.getAll();
                console.log(response.data);
                if (response.data == null) {
                    console.log(123445)
                    setTransactions([])
                }else{
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
                        transactions.length == 0 ? <div></div> : (
                            <>{
                                transactions.map((transaction, i) =>
                                    <TransactionItem key={transaction.id} transaction={transaction} i={i}/>)
                            }
                            </>)}

                </div>
            </div>
        </div>
    )
}

export default Transaction