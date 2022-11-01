import styles from './modal'

export default function ModalLoading(){
    return <div className={styles.loadingContainer}>
        <div className={styles.loadingView}>
        Loading...
        </div>
        </div>
}