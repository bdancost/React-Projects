import styles from './App.module.css'

import { Header } from './components/Header'
import { Tip } from './components/Tip'

export default function App() {
  function handleRestartGame() {
    alert('Jogo reiniciado!')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={2} max={10} onRestart={handleRestartGame} />

        <Tip tip="Linguagem de programação dinâmica" />
      </main>
    </div>
  )
}
