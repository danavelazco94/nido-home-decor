import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    };
    return (
        <div className="item-count">
            <button
                className="item-count-btn"
                onClick={restar}
                disabled={count === 0}
            >
                -
            </button>

            <span className="item-count-number">{count}</span>

            <button
                className="item-count-btn"
                onClick={sumar}
                disabled={count >= stock}
            >
                +
            </button>
        </div>
    );
};

export default ItemCount;