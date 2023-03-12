import React, { useEffect, useState } from "react";
import style from "../css/products.module.css";
import btn from "../css/Button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ImPlus, ImMinus } from "react-icons/im";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AddtoCart, ChangeQuanity } from "../Store/product/product.action";

function MyCartPage() {
  const dispatch = useDispatch();
  const [tot, setTot] = useState(0);
  const { data } = useSelector((store) => store.products);
  // console.log(data);

  function handleQuantity(id, val) {
    dispatch(ChangeQuanity(data, id, val));
  }

  function addtocart(id) {
    dispatch(AddtoCart(data, id));
  }
  useEffect(() => {
    let arr = data.filter((e) => e.added === true);
    setTot(arr.length);
  }, []);
  return (
    <div>
      <h2 className={style.heading}>MyCarts</h2>
      {tot > 0 ? (
        <div className={style.products}>
          {data
            ?.filter((e) => e.added == true)
            .map((e, i) => (
              <div className={style.product} key={i}>
                <div className={style.prodimg}>
                  <img src={e.image} alt="" />
                </div>
                <div className={style.prodinfo}>
                  <h4 className={style.title}>{e?.title.slice(1, 15)}</h4>
                  <p className={style.desc}>
                    {e?.description.slice(0, 45).toLowerCase()}
                  </p>
                  <p className={style.price}> Rs. {e?.price}</p>
                  {!e?.added ? (
                    <div
                      onClick={() => addtocart(e?.id)}
                      className={style.addtocart}
                    >
                      Add To Cart
                    </div>
                  ) : (
                    <div className={style.quantity}>
                      <button
                        onClick={() => handleQuantity(e?.id, e?.quantity + 1)}
                      >
                        <ImPlus />
                      </button>
                      <span> {e?.quantity} </span>
                      <button
                        disabled={e?.quantity == 1}
                        onClick={() => handleQuantity(e?.id, e?.quantity - 1)}
                      >
                        <ImMinus />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className={style.empty}>Please Add some Products to Cart</div>
      )}

{
  tot!=0 &&<div className={btn.moveright}>
  <div className={style.bottomsection}>
    <div className={btn.btmbtn}>
      Checkout <AiOutlineDoubleRight />
    </div>
  </div>
</div>
}
    </div>
  );
}

export default MyCartPage;
