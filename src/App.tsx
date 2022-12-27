import { AbsoluteCenter, chakra, shouldForwardProp } from '@chakra-ui/react'
import useMouse from '@react-hook/mouse-position'
import { isValidMotionProp, motion, useMotionValue, useSpring } from 'framer-motion'
import { FC, useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
});

const App: FC = () => {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    fps: 60,
    enterDelay: 0,
    leaveDelay: 0,
  })
  const delayedMouse = useMouse(ref, {
    fps: 60,
    enterDelay: 100,
    leaveDelay: 100,
  });
  
  let mouseX = 0, mouseY = 0;
  const blured = mouse.x === null && mouse.y === null;
  if (mouse.x !== null) mouseX = mouse.x;
  if (mouse.y !== null) mouseY = mouse.y;

  return (
    <div className="App" style={{ position: 'absolute', margin: 0, width: '100vw', height: '100vh' }} ref={ref}>
      <Header />
      <Hero />
      <motion.div
        style={{
          opacity: blured ? 0 : 1,
          position: 'absolute',
          top: 0,
          left: 0,
          y: mouseY,
          x: mouseX,
          width: 20,
          height: 20,
          borderRadius: '50%',
          border: '1px solid',
          borderColor: '#1DD1A1',
          zIndex: 99999,
        }}
        transition={{ 
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
         }}
         animate={'default'}
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
