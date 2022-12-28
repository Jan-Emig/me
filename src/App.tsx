import { motion } from 'framer-motion'
import { Dispatch, FC, SetStateAction, useRef, useState } from 'react'
import useFollowMouse from './hooks/useFollowMouse'
import Header from './components/Header'
import Hero from './sections/Hero'
import { Box } from '@chakra-ui/react'
import MouseContext from './context'

export type SetShowMouseState = Dispatch<SetStateAction<boolean>>;

const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowMouse(ref);
  const [showMouse, setShowMouse] = useState(true);

  return (
    <MouseContext.Provider value={{ visible: showMouse, toggleVisibility: () => setShowMouse(!showMouse), }}>
      <Box 
        ref={ref}
        className="App"
        position='absolute'
        margin={0}
        w='100vw'
        h='100vh'
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
            opacity: showMouse ? 1 : 0,
            zIndex: 99999,
            transition: 'opacity 0.1s ease-in-out'
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
      </Box>
    </MouseContext.Provider>
  )
}

export default App
