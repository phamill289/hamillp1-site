
import Link from 'next/link'

import { Text, Image, Box, AspectRatio, Accordion, AccordionBox, AccordionIcon, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react'
import { motion } from 'framer-motion'



export function Dropdown() {

    return (

        <motion.div

        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.6,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01]
        }}
        >

            <Accordion textColor='white' allowToggle fontFamily='Inconsolata' fontStyle='normal' fontWeight='normal' paddingTop={20} paddingInlineStart={5} >
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                SJRails Interactive Map
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >

                        <AspectRatio maxW='800' ratio={2 / 1}  >
                            <Image src='/sjrail.png' objectFit='contain' />
                        </AspectRatio>
                        <Text >Made with PHP + JS + OpenLayers, a library for creating maps.</Text>
                        <Text> Demo: <a  class="colored" href='https://phamill289.github.io/sjrail-display/'>  phamill289.github.io/sjrail-display/ </a> </Text>
                        <Text> Github: <a class="colored" href='https://github.com/phamill289/sjrail-openlayers'>  github.com/phamill289/sjrail-openlayers </a></Text>


                        <Text >Developed for the sjrails wiki as a interactive map that allows wiki pages to be easily added as points, that then redirect to said page.
                            Server host was changed so the original website it was on is no longer up but I did set up a demo on github. Point info was stored in a db and could be updated by admins via a form page.

                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Pillow
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                        <Text> Made with a Java wrapper of the Discord API + Swing.</Text>
                        <Text >A Discord bot that handles music playing, image search, image rendering, and stat tracking. </Text>
                        <Text >Has a GUI for control from host pc to multiple servers.</Text>
                        <Text >My first large project at 2.5k+ lines.</Text>
                        <Text >Got familiar with APIs, cURL and mySQL.</Text>
                        <Text >Private until I clean up the code and tokens.</Text>
                    </AccordionPanel>

                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                This site!
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text>Made with Next.js + Chakra</Text>
                        <Text>Github section uses their API for data.</Text>
                        <Text >Although I don&apos;t have enough projects to justify a portfolio website, it was more so to get familiar with front end stuff.</Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Spencers website clone
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text>Recreated the homepage and some subpages w/ net 6.0 + bootstrap to prepare for an interview.</Text>
                        <Text>The nav bar dropdown needs work.</Text>
                        <Link  href="https://spencersclone.azurewebsites.net/"> 
                        
                        <a class="colored"> Hosted via Azure </a>
                    
                        </Link> 

                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Small Projects
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text>Sudoku Solver</Text>
                        <Text>TSP genetic algorithm</Text>
                        <Text>Most small projects done in java but eventually will host online like the sjrails map. </Text>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </motion.div>
    )

}
export default Dropdown