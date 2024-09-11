import styles from './Button.module.css';
function ButtonBuy() {

    const btnBuyStyle = {
        color: 'black'
    }
    
    return(
        <button className={styles.button} style={btnBuyStyle}>Buy Now</button>
    );
}

export default ButtonBuy