import styles from './Task.module.css'
import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react';

interface TaskProps {
    content: string;
    checked: boolean;
    OnDeleteTask: (id: string) => void;
    OnCheckedChange: (id: string, valueCheck: boolean) => void;
    id: string;
}

export function Task({ content, checked, OnDeleteTask, id, OnCheckedChange}: TaskProps) {
    const [isComplete, setIsComplete] = useState(checked)
    function handleCheckedChange(event: ChangeEvent<HTMLInputElement>) {
        OnCheckedChange(id, event.target.checked)
        setIsComplete(event.target.checked)
    }


    return (
        <div className={styles.task}>

            <input type="checkbox" checked={isComplete} onChange={handleCheckedChange} />
            <label >{content}</label>
            <button title='Deletar Tarefa' onClick={() => OnDeleteTask(id)}>
                <Trash size={16} />
            </button>
        </div>

    );

}