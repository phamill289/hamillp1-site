import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar.js'
import Sidebar from '../components/sidebar.js'
import Dropdown from '../components/dropdown.js'
import Cards from '../components/cards.js'
import Git from '../components/gitrepos.js'
import { Image, AspectRatio, Flex, Spacer, Center, Heading, Button, Input, Text, Stack, HStack, Grid, GridItem, Fade, Container } from '@chakra-ui/react'


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,
} from "@chakra-ui/react"


export default function Github() {

    return (


        <Flex height="100vh" fontFamily='Inconsolata' fontStyle='normal' fontWeight='bold' >

            <Sidebar />
            <Container maxW='100%' background="#1A1B1E" paddingInlineStart={0}>
                <Navbar />
                <Container maxW='100%' paddingTop={'75px'}>
                    <Git />
                </Container>

                {/* <Dropdown/> */}
            </Container>
        </Flex>


    )
}
