import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import './global.css'
import styles from './App.module.css'


export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}> 
          <NewTask />
      </div>
    </>
  )
}
