import { motion } from 'framer-motion'
import { FC, useRef } from 'react'
import useFollowMouse from './assets/useFollowMouse'
import Header from './components/Header'
import Hero from './sections/Hero'

const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowMouse(ref);

  return (
    <div 
      ref={ref}
      className="App"
      style={{ position: 'absolute', margin: 0, width: '100vw', height: '100vh' }}
    >
      <Header />
      <Hero />
      <motion.div
        animate={{ x, y }}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          borderRadius: '50%',
          border: '1px solid',
          borderColor: '#1DD1A1',
          zIndex: 99999,
        }}
        transition={{ 
          type: "spring",
          damping: 30,
          stiffness: 500,
          restDelta: 0.001
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-1.5px',
            marginLeft: '-1.5px',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            backgroundColor: '#1DD1A1',
          }}
         />
      </motion.div>
    </div>
  )
}

export default App
