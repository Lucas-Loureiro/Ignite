import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Todo } from './components/Todo'



export function App() {
  
  
  return (
    <>
      <Header />
      <div className={styles.wrapper}> 
          <Todo />
      </div>
    </>
  )
}

