import {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import CategoryItem from "./CategoryItem";
import CategoryApi from "../../Apis/CategoryApi";

function Category() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) return;
    const fetchCategories = async () => {
      try {
        const response = await CategoryApi.getAll();
        setCategories(response.data);
      } catch (error) {
        setCategories([]);
        console.error('Error', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [loading])

  const reloadData = () => {
    setLoading(true);
  }

  return (
    <div>
      <div className="row">
        <div className="col-12">
          {
            loading ?
              <Skeleton count={4} height={80} />
              : categories.map((c, index) => <CategoryItem key={c.id} category={c} handleReload={reloadData}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Category;