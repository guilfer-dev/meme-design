import React from 'react';
import style from './style.module.css';


export default function BrazilianPhone2() {

    const renderSelectInput = (x, keyname) => {
        return Array(x)
            .fill()
            .map((_, selectIndex) =>
                <select key={keyname + selectIndex}>
                    {Array(10)
                        .fill()
                        .map((_, optionIndex) =>
                            <option
                                value={optionIndex}
                                key={keyname + optionIndex}>
                                {optionIndex}
                            </option>
                        )}
                </select>
            )
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <h1>Brazilian Phone Number 2</h1>
            </div>
            <div className={style.wrapper}>
                <label htmlFor="">DDD</label>
                ({renderSelectInput(2, "f1")})
                <label htmlFor="">Phone Number</label>
                {renderSelectInput(5, "f2")} - {renderSelectInput(4, "f3")}
            </div>
            <div className="card-footer">
                <strong>OP:</strong><i className="bi bi-github"></i><a href="https://github.com/guilfer-dev">guilfer-dev</a>
            </div>
        </div >
    )

}