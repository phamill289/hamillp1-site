import Link from 'next/link'
import Navbar from '../components/navbar.js'
import Gitprofile from '../components/gitprofile.js'
import { Image, Grid, GridItem, Text, Flex, HStack } from '@chakra-ui/react'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())





export function Gitrepos(props) {


    const { data: data, error: error } = useSWR('https://api.github.com/users/phamill289/repos', fetcher)
    const { data: sjrail, error: sjrailerror } = useSWR('https://api.github.com/repos/phamill289/sjrail-openlayers', fetcher)
    const { data: user, error: usererror } = useSWR('https://api.github.com/users/phamill289', fetcher)
    const { data: site, error: siteerror } = useSWR('https://api.github.com/repos/phamill289/hamillp1-site', fetcher)
    if (error) return <div> &apos; data. An error has occurred.&apos; </div>;
    if (!data) return <div>  &apos; Loading...&apos;</div>;


   
    if (sjrailerror) return <div> &apos;data. An error has occurred.&apos; </div>;
    if (!sjrail) return <div>  &apos; Loading...&apos; </div>;

   
    if (usererror) return <div> &apos; data. An error has occurred.&apos;</div>;
    if (!user) return <div>  &apos;Loading...&apos; </div>;
    const datalength = Object.keys(data).length
    const str = data.id

    return (




        <Grid templateColumns='repeat(5, 1fr)' gap={4} >
            <GridItem colSpan={5} h='150' bg='#373A40' paddingLeft={'15px'} paddingTop={'7.5'} rounded='md'>
                <HStack >
                    <Image className='rudy'


                        boxSize={'135px'}
                        src={data[0].owner.avatar_url}
                        objectFit='cover'
                    />
                    <Link href='https://github.com/phamill289'>
                        <a>
                            <Text fontSize={'32px'} fontWeight='normal' textColor={'white'}> phamill289 <Text fontSize={'16px'}>following: {user.following} </Text> <Text fontSize={'16px'}>followers: {user.followers}</Text>  </Text >
                        </a>
                    </Link>



                </HStack>

            </GridItem>
            <GridItem colStart={1} colEnd={6} h='600' bg='#373A40' rounded='md'>

                <Grid templateColumns={'repeat(3, 1fr)'} gap={15} padding='8px'>
                    <Link href={data[2].html_url}>
                        <a>
                            <GridItem h='130' bg='#ED8936' border='1px' rounded={'xl'} >

                                <Text textColor={'white'} fontSize='20px' paddingLeft={'5px'}>

                                    {data[2].name}

                                </Text>

                                <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                                    subscribers: {sjrail.subscribers_count}

                                </Text>
                                <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                                    watchers: {sjrail.watchers_count}
                                </Text>
                            </GridItem>

                        </a>
                    </Link>

                    <Link href={data[0].html_url}>
                        <a>
                            <GridItem h='130' bg='#ED8936' border='1px' rounded={'xl'} >

                                <Text textColor={'white'} fontSize='20px' paddingLeft={'5px'}>

                                    {data[0].name}

                                </Text>

                                <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                                    subscribers: {site.subscribers_count}

                                </Text>
                                <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                                    watchers: {site.watchers_count}
                                </Text>
                            </GridItem>

                        </a>
                    </Link>

                    <GridItem h='130' bg='#ED8936' border='1px' rounded={'xl'} >

                        <Text textColor={'white'} fontSize='20px' paddingLeft={'5px'}>

                            pbot

                        </Text>

                        <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                            private repo

                        </Text>
                         
                    </GridItem>

                    <GridItem h='130' bg='#ED8936' border='1px' rounded={'xl'} >

                        <Text textColor={'white'} fontSize='20px' paddingLeft={'5px'}>

                            ImageSorter-

                        </Text>

                        <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                            private repo

                        </Text>
                         
                    </GridItem>



                </Grid>

            </GridItem>

        </Grid>

    )

}
export default Gitrepos