import styles from './NewTask.module.css'
import { PlusCircle } from 'phosphor-react'

export function NewTask(){
    return(
        <form className={styles.newTaskForm} >

                <input
                    name='comment'
                    placeholder='Deixe um comentário'
                    required
                />               
                <button type='submit'>Criar <PlusCircle size={16} /></button>
            </form>
    )
}