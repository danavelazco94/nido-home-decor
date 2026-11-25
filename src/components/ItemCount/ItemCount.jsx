import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";


const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);
    const [added, setAdded] = useState(false);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };


    return (
        <div className="item-count">
            {added ? (
                <div className="item-count-actions">
                    <button onClick={() => setAdded(false)}>
                        Seguir comprando
                    </button>

                    <Link to="/cart">
                        Ir al carrito
                    </Link>
                </div>
            ) : (
                <>
                    <button
                        className="item-count-btn"
                        onClick={restar}
                        disabled={count === 1}
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

                    <button
                        className="item-count-add"
                        onClick={() => {
                            onAdd(count);
                            setAdded(true);
                        }}
                    >
                        Agregar al carrito
                    </button>
                </>
            )}
        </div>
    );

};

export default ItemCount;