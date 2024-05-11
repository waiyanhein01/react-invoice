import React, { useContext } from 'react'
import Container from './Container'
import { Button } from 'flowbite-react'
import { GeneralContext } from '../context/GeneralProvider'

const Footer = () => {

  const {drawerHandler} = useContext(GeneralContext)
  
  return (
    <footer className=' mt-auto mb-3'>
      <Container>
          <div className=" flex gap-3 justify-end">
            <Button
              onClick={drawerHandler}
              color="light"
              className=" outline-none"
            >
              Manage Inventory
            </Button>
            <Button>Print</Button>
          </div>
        </Container>
    </footer>
  )
}

export default Footer
