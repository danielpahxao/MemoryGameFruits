import styles from './Button.module.css'
function Button(typeOfButton) {
    
    let selectype = "";

    if(typeOfButton.type == 1) 
        selectype = "Click there"; 

    return(        
        <button className={styles.button}>{selectype}</button>       
    );
}

export default Button;