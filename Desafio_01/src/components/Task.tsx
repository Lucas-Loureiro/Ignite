import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export function Task() {
    return (
        <div className={styles.task}>

            <input type="checkbox" id="task1" />
            <label htmlFor="task1">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
            <Trash size={16}/>
        </div>

    );

}