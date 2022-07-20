import Link from 'next/link'
import Navbar from '../components/navbar.js'
import { Image, Grid, GridItem } from '@chakra-ui/react'

export function cards() {

  return (
    <Grid gap={6} templateColumns='repeat(4,1fr)'>

      <Navbar />

      <GridItem bg='orange.500' >


        <Link href='/project1'>
          <a>
            <Image
              boxSize={'-webkit-fit-content'}
              src='/koro.jpg'
              objectFit='fill'

              _hover={{ boxSize: 400 }} />
          </a>
        </Link>
      </GridItem>

      <GridItem bg='orange.500' >
        <Link href='/project1'>
          <a>
            <Image
              boxSize={'-webkit-fit-content'}
              src='/1.jpg'
              objectFit='cover'
              _hover={{ boxSize: 400 }} />
          </a>
        </Link>
      </GridItem>

      <GridItem bg='orange.500' >
        <Link href='/project1'>
          <a>
            <Image
              boxSize={'-webkit-fit-content'}
              src='/koro.jpg'
              objectFit='cover'
              _hover={{ boxSize: 400 }} />
          </a>
        </Link>
      </GridItem>

      <GridItem bg='orange.500' >
        <Link href='/project1'>
          <a>
            <Image
              boxSize={'-webkit-fit-content'}
              src='/koro.jpg'
              objectFit='cover'

              _hover={{ boxSize: '-webkit-fit-content' + 100 }} />
          </a>
        </Link>
      </GridItem>


    </Grid>
  )

}
export default cards