import Link from 'next/link'
import Navbar from './navbar.js'
import { Image, Grid, GridItem, Text, Flex } from '@chakra-ui/react'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())




export function Gitprofile(props) {

console.log('https://api.github.com/users/' + props.name + '/repos')
const str = 'https://api.github.com/users/' + props.name + '/repos'
console.log("STR: " +str)
    const { data, error } = useSWR(str, fetcher)
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    var newData = data.html_url;

    return (

        <GridItem bg='orange.500' >
            <Text> Github acc: </Text>
            <Text>{data[0].owner.login} </Text>
            <Image
                boxSize={'-webkit-fit-content'}
                src={data[0].owner.avatar_url}
                objectFit='cover'
            />

        </GridItem>
    )

}
export default Gitprofile

