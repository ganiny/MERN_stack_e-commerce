/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../redux/apiCalls/cartApiCalls";

function CartTableRow({
  id,
  image,
  title,
  price,
  onSubtotalChange,
  onQuantityChange,
}) {
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(price);

  useEffect(() => {
    onSubtotalChange(id, subtotal);
    onQuantityChange(id, quantity);
  }, [id, quantity, subtotal]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <tr className="mt-10 grid grid-cols-[30px,150px,20px,20px,20px] gap-40 border-b border-[#0000000D] pb-6">
      <td className="flex items-center pl-2 text-left">
        <svg
          onClick={() => {
            dispatch(removeProductFromCart(id, user.token));
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          className="deleteItemBtn size-10 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
            clipRule="evenodd"
          />
        </svg>
      </td>
      <td className="flex items-center gap-5 object-contain text-left">
        <img className="h-[54px] w-[54px]" src={image} alt="product" />

        <p>{title}</p>
      </td>
      <td className="flex items-center text-left">${price}</td>
      <td className="flex items-center text-left">
        <input
          type="number"
          className="h-[44px] w-[72px] rounded"
          min={1}
          placeholder="1"
          value={quantity}
          onChange={(e) => {
            const nextQty = Math.max(1, Number(e.target.value) || 1);
            setQuantity(nextQty);
            setSubtotal(nextQty * price);
          }}
        />
      </td>
      <td className="flex items-center pr-16 text-left">
        ${subtotal.toFixed(2)}
      </td>
    </tr>
  );
}
export default CartTableRow;
