
import Link from 'next/link'
import { Image, AspectRatio, Center, Text, Stack, HStack, Container, Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

export function Sidebar() {

    return (
        // bg='#909296'
        // bg='orange.400'
        <Center w='30%' bg='#ED8936' alignItems="center" p={25} fontFamily='Inconsolata' fontStyle='normal' fontWeight='bold' >

            <Stack alignContent='center' textAlign='center' >
                <motion.div

                    initial={{ opacity: 1, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <AspectRatio maxW='256' ratio={4 / 4}>
                        <Image src='/toger4.png' objectFit='contain' />
                    </AspectRatio>
                </motion.div>





                    <Text  >Patrick Hamill</Text>
                    <Text >hamillp1@go.stockton.edu</Text>
                    <Text >portfolio website</Text>
                    <HStack >
                        <Link href='https://github.com/phamill289'>
                            <a>
                                <Image
                                    boxSize={'100'}
                                    src='https://joshuapenalba.files.wordpress.com/2014/12/github-icon.png?w=640'

                                />
                            </a>
                        </Link>
                        <Link href='mailto:hamillp1@go.stockton.edu'>
                            <a>
                                <Image
                                    boxSize={'81'}
                                    src='/email2.png'

                                />
                            </a>
                        </Link>
                    </HStack>
            </Stack>
        </Center>



    )

}
export default Sidebar