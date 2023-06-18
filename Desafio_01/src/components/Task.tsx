import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export function Task() {
    return (
        <div className={styles.task}>

            <input type="checkbox"  />
            <label >Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
            <button  title='Deletar Tarefa'>
                <Trash size={16} />
            </button>
        </div>

    );

}