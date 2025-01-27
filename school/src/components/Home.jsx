import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css"
export default function Home(){
    const navigate = useNavigate();
    function handleButton(){
        navigate("/dashboard");
    }
    return(
        <div className={styles.background}>
            <div className={styles.head}>
                <h1 className={styles.headOne}>Welcome to Gayathri Institutions</h1>
                <h2 className={styles.headSecond}>A school for IIT-JEE-NEET Foundation</h2>
                <h3 className={styles.headThree}>Rambagh, Dubbaka, Siddipet, Telangana, 502108</h3>
            </div>
            <div className={styles.submitContainer}>
                <button className={styles.submitButton} onClick={handleButton}>Enter</button>
            </div>
        </div>
    )
}
