import styles from './FaqItem.module.scss'
import {useState} from "react";

const FaqItem = ({question, answer}) => {

    const [active, setActive] = useState(false)

    function handleClick(e) {
        const container = e.target.closest("#container");
        const collapsible = container.querySelector("#collapsible");
        const hidden =
            collapsible.style.visibility === "hidden" ||
            collapsible.style.visibility === "";

        if (hidden) {
            collapsible.style.maxHeight = `${collapsible.scrollHeight}px`;
            collapsible.style.visibility = "visible";
            collapsible.setAttribute("aria-expanded", "true");
            setActive(!active)
        } else {
            collapsible.style.maxHeight = "0";
            collapsible.style.visibility = "hidden";
            collapsible.setAttribute("aria-expanded", "false");
            setActive(false)
        }
    }


    return (
        <div className={styles.blockradius}>
            <div id='container' className={styles.container}>
                <div className={styles.title} onClick={handleClick}>
                    {question}
                    <div className={styles.plus}>
                        {active ? <div className={styles.minus}/> : <img src='#'  alt=''/>}
                    </div>
                </div>
                <div id='collapsible' className={styles.collapsible}>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;