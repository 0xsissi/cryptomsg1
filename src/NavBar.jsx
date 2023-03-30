
import { Flex, Box, Image, Link, Spacer, Button } from '@chakra-ui/react';
import React from 'react';
import Facebook from './icon/facebook_32x32.png';
import Twitter from './icon/twitter_32x32.png';
import Email from './icon/email_32x32.png';
import { useState } from 'react';

import { connect } from "@argent/get-starknet"
import {Contract} from 'starknet';


const NavBar = ({ accounts, setAccounts }) => {
    const [isConnected, setConnected] = useState(false); // Status check

    async function connectAccount() {
       
         

             // Using connect function from @argent/get-starknet to connect our Argent X wallet to our DAPP
    const windowStarknet = await connect()
    await windowStarknet?.enable({ starknetVersion: "v4" })
    
    //setAccount(windowStarknet.account) // Set our account variable to windowStarknet.account (address, provider and the signer)
    console.log(windowStarknet.account)
   // setAddress(windowStarknet.selectedAddress) // Set our address variable to windowStarknet.selectedAddress
    setConnected(true) // isConnected = true, the page will changed according to the boolean
   
            
           await setAccounts(windowStarknet.account);
           console.log("accounts is :  ",accounts);
            return windowStarknet 
        }
    

   

    return (
        <Flex justify='space-between' align="center" padding="30px" >
            <Flex justify='space-around' width="40%" padding="0 75px" >
                <Link href="https://www.facebook.com">
                    <Image src={Facebook} boxSize="42px" margin="0 15px" ></Image>
                </Link>
                <Link href="https://www.twitter.com">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" ></Image>
                </Link>
                <Link href="https://www.gmail.com">
                    <Image src={Email} boxSize="42px" margin="0 15px" ></Image>
                </Link>
            </Flex>

            <Flex justify='space-around' align="center" width="50%" padding="30px" >

                <Link href='/' >
                    Send
                </Link>


                <Link href='/register' >
                    Register
                </Link>


                <Link href='/about' >
                    About
                </Link>



                {isConnected ? (
                    <Box margin='0 15px'>Connected</Box>
                ) : (
                    <Button
                        backgroundColor="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="0 15px"
                        onClick={connectAccount}>Connect</Button>
                )}
            </Flex>


        </Flex>
    )
};
export default NavBar;