import { Task } from './Task'
import styles from './Todo.module.css'
import emptyLogo from '../assets/Clipboard.png'
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';

interface TaskType {
    id: string;
    content: string;
    isComplete: boolean;
}

export function Todo() {
    const tasks: TaskType[] = [
        {
            id: uuidv4(),
            content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isComplete: true
        },
        {
            id: uuidv4(),
            content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isComplete: true
        },
        {
            id: uuidv4(),
            content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isComplete: true
        },
        {
            id: uuidv4(),
            content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isComplete: true
        },
        {
            id: uuidv4(),
            content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isComplete: false
        }
    ]
    const [toDos, setToDos] = useState(tasks);
    const [newTask, setNewTask] = useState('')
    const [completeTasks, setCompleteTasks] = useState(0)
    const [changed, setChanged] = useState(0)


    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        const taskItem = {
            id: uuidv4(),
            content: newTask,
            isComplete: false,
        };

        setToDos([...toDos, taskItem])
        setNewTask('');
    }

    function deleteTask(taskToDelete: string) {

        const tasksWithoutDeletedOne = toDos.filter(task => {
            return task.id !== taskToDelete
        })

        setToDos(tasksWithoutDeletedOne);
    }
    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("")

        setNewTask(event.target.value)
    }

    function countCompleteTasks() {
        setCompleteTasks((state) => {
            const completedCount = toDos.reduce((accumulator, currentValue) => {
                if (currentValue.isComplete === true) {
                    return accumulator + 1;
                } else {
                    return accumulator;
                }
            }, 0);

            return state = completedCount;
        });
    }

    function checkedChange(id: string, valueCheck: boolean) {
        toDos.filter(todo => {
            if (todo.id === id) {
                todo.isComplete = valueCheck
            }
        })
        setChanged(changed + 1)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    useEffect(() => {
        countCompleteTasks()
    }, [changed, toDos])


    return (
        <>
            <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
                <input
                    name='task'
                    placeholder='Adicione uma nova tarefa'
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button type='submit'>Criar <PlusCircle size={16} /></button>
            </form>
            <div className={styles.container}>
                <div className={styles.status}>
                    <div className={styles.created}>
                        <p>Tarefas criadas</p>
                        <span>{toDos.length}</span>
                    </div>
                    <div className={styles.done}>
                        <p>Concluídas</p>
                        <span>{completeTasks + " de " + toDos.length}</span>
                    </div>
                </div>
                {
                    toDos.length > 0 ?
                        toDos.map(todo => {
                            return <Task
                                key={todo.id}
                                content={todo.content}
                                checked={todo.isComplete}
                                OnDeleteTask={deleteTask}
                                OnCheckedChange={checkedChange}
                                id={todo.id} />
                        }) :
                        <div className={styles.empty}>
                            <img src={emptyLogo} alt="" />
                            <div>
                                <p>Você ainda não tem tarefas cadastradas</p>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}