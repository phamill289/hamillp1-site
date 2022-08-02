import Link from 'next/link'
import Navbar from '../components/navbar.js'
import Gitprofile from '../components/gitprofile.js'
import React from 'react';
import { Image, Grid, GridItem, Text, Flex, HStack } from '@chakra-ui/react'
import useSWR from 'swr'
import { motion } from 'framer-motion'
const fetcher = url => fetch(url).then(r => r.json())





export function Gitrepos(props) {


    const { data: data, error: error } = useSWR('https://api.github.com/users/phamill289/repos', fetcher)
    // const { data: sjrail, error: sjrailerror } = useSWR('https://api.github.com/repos/phamill289/sjrail-openlayers', fetcher)
    const { data: user, error: usererror } = useSWR('https://api.github.com/users/phamill289', fetcher)

    if (error) return <div> &apos; data. An error has occurred.&apos; </div>;
    if (!data) return <div>  &apos; Loading...&apos;</div>;



    // if (sjrailerror) return <div> &apos;data. An error has occurred.&apos; </div>;
    // if (!sjrail) return <div>  &apos; Loading...&apos; </div>;


    if (usererror) return <div> &apos; data. An error has occurred.&apos;</div>;
    if (!user) return <div>  &apos;Loading...&apos; </div>;
    const datalength = Object.keys(data).length
    const str = data.id

    return (

        <motion.div

            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            {/* <div>
      {data &&
        data.map((item, i) => (
          <div key={i}>
            {data[i].html_url}
          </div>
        ))
      }
    </div> */}

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


                        {data &&
                            data.map((item, i) => (



                                <Link href={data[i].html_url} key={data[i].id}>
                                    <a>
                                        <GridItem h='130' bg='#ED8936' border='1px' rounded={'xl'} >
                                            <div key={i}>
                                                <Text textColor={'white'} fontSize='20px' paddingLeft={'5px'}>

                                                    {data[i].name}

                                                </Text>
                                                <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                                                    description: {data[i].description}

                                                </Text>
                                                <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                                                    language: {data[i].language}
                                                </Text>
                                                <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>

                                                    updated on: {(data[i].updated_at).substring(0, 10) + " " + (data[i].updated_at).substring(11, 19) + " UTC"}
                                                </Text>
                                            </div>
                                        </GridItem>
                                    </a>
                                </Link>
                            ))

                        }

                        <a href="https://spencersclone.azurewebsites.net/">
                            <GridItem h='130' bg='#ED8936' border='1px' rounded={'xl'} >

                                <Text textColor={'white'} fontSize='20px' paddingLeft={'5px'}>

                                    spencers website clone

                                </Text>

                                <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                                    rough recreation of spencersonline.com.



                                </Text>
                                <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                                    hosted online using azure.
                                </Text>
                                <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                                    click to visit !
                                </Text>
                            </GridItem>
                        </a>

                        <GridItem h='130' bg='#ED8936' border='1px' rounded={'xl'} >

                            <Text textColor={'white'} fontSize='20px' paddingLeft={'5px'}>

                                pbot

                            </Text>

                            <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>
                                private repo


                            </Text>
                            <Text textColor={'white'} paddingLeft={'5px'} fontWeight='normal'>

                                my old discord bot. code needs to be cleaned and some private keys need to be done via environment variables.
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
        </motion.div>
    )

}
export default Gitrepos