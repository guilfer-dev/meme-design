import React from 'react';
import style from './style.module.css';


export default function BadPhoneInput() {
    const [phone, setPhone] = React.useState({
        ddd: '',
        firstPart: '',
        secondPart: '',
    });

    const parsePhone = () => {
        const ddd = phone.ddd.padStart(2, '0');
        const firstPart = phone.firstPart.padStart(4, '0');
        const secondPart = phone.secondPart.padStart(4, '0');
        return `(${ddd}) ${firstPart}-${secondPart}`
    }

    return (
        <div className={style.wrapper}>
            <h1>Brazilian Phone Number</h1>
            <label htmlFor="">DDD</label>
            <input type="range" min="0" max="99"
                onChange={(e) =>
                    setPhone(prev => {
                        return {
                            ...prev,
                            ddd: e.target.value
                        }
                    })} />
            <label htmlFor="">First part</label>
            <input type="range" min="0" max="99999"
                onChange={(e) =>
                    setPhone(prev => {
                        return {
                            ...prev,
                            firstPart: e.target.value
                        }
                    })} />
            <label htmlFor="">Second part</label>
            <input type="range" min="0" max="9999"
                onChange={(e) =>
                    setPhone(prev => {
                        return {
                            ...prev,
                            secondPart: e.target.value
                        }
                    })} />
            <label htmlFor="">Phone number</label>
            <input
                type="text"
                value={parsePhone()}
                readOnly
            />
        </div>
    )

}