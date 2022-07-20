
import Link from 'next/link'
import { Image, AspectRatio, Center, Text, Stack, HStack } from '@chakra-ui/react'

export function Sidebar() {

    return (
// bg='#909296'
// bg='orange.400'
        <Center w='30%' bg='#ED8936' alignItems="center" p={25} fontFamily='Inconsolata' fontStyle='normal' fontWeight='bold' >

            <Stack alignContent='center' textAlign='center' >

                <AspectRatio maxW='256' ratio={4 / 4}>
                    <Image src='/toger4.png' objectFit='contain' />
                </AspectRatio>

                <Text  >Patrick Hamill</Text>
                <Text >hamillp1@go.stockton.edu</Text>
                <Text >asdafgawfwgawwafaw</Text>
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