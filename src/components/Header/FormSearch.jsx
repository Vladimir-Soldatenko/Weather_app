// @ts-nocheck
import { FaSistrix } from "react-icons/fa";
import { useState } from "react";
import { useSubmit } from "../../hooks/useSubmit";
import "../../styles/Header.scss";


const FormSearch = () => {
    const onSubmit = useSubmit()
    const [searchValue, setSearchValue] = useState("Kiev");

    const formHandler = (e) => {
        e.preventDefault();
        searchValue && onSubmit(searchValue);
        setSearchValue("");
    };

    return (
        <form onSubmit={formHandler} style={{ display: "flex" }}>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="header__search"
                placeholder="Введите город..."
            />
            <button className="header__btn" type='submit'>
                <FaSistrix
                    style={{
                        width: "25px",
                        height: "25px",
                        cursor: "pointer",
                        color: "#4793ff55",
                    }}
                />
            </button>
        </form>
    );
};

export default FormSearch;
