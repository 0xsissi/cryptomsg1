import { useState ,useRef } from "react";
import { ethers, BigNumber } from "ethers";
import { Flex, Box, Text, Input, Button, Textarea } from '@chakra-ui/react';
import ABI from "./ABI.json"


import ExyJson from "./main_abi.json";
import {Contract} from 'starknet';


const MainPage = ({ accounts, setAccounts }) => {
    const [telephone, setTelephone] = useState(0);
    const isConnected = Boolean(accounts);
    const addref = useRef(null);
    const msgref = useRef(null);
    var contract;

    async function sendmessage() {
        console.log("accounts is :  ",accounts);
        if (isConnected) {
          
        }
        try {
            const MyContractAddress = "0x1c604c8b19da7e7610b2a2dcccddd4fa4aca01bd93d2c93a295b57eebe8f102";
            const contractConnect = new Contract(ExyJson, MyContractAddress, accounts); // We set our Contract passing our Json, ContractAddress
    //                                                          and our Account (address, provider and the signer) 
            console.log(contractConnect);
            console.log(accounts.address);
            let aa = await contractConnect.read_message(addref.current.value);
            console.log(aa);
            console.log(aa.words);
            return contractConnect.set_message(addref.current.value,msgref.current.value); // Call the mint function of our contract 



        } catch (err) {
            console.log('err is :', err);
        }
    }

   

    

    return (
        <Flex justify="center" align="center" hight="100vh" paddingBottom="150px">
            <Box width="800px" >

                <Text fontSize="48px" textShadow="0 5px #000000" >Crypto Messenger</Text>
                <Text marginTop="10px" fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">Can't find the person? Try Crypto Messenger </Text>
                {isConnected ? (
                    <div>
                        <Flex align="center" justify="center">
                            <Text
                                marginTop="10px"
                                textAlign="center"
                                padding="15px"
                              
                            >ETH Address</Text>

                            <Input
                                fontFamily="inherit"
                                width="250px"
                                height="40px"
                                marginTop="10px"
                                padding="15px"
                             
                                type="tel"
                                ref={addref}
                                placeholder="Address"
                                _placeholder={{ color: 'inherit' }}
                            />


                        </Flex>


                        <Textarea
                            width="450px"
                            height="200px"
                            marginTop="10px"
                            padding="15px"
                            ref={msgref}
                            placeholder="Message..."
                            _placeholder={{ color: 'inherit' }} />


                        <Flex align="center" justify="center">

                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="30px" onClick={sendmessage}>Send</Button>
                        </Flex>
                    </div>


                ) : (
                    <p>You must connect to send message.</p>
                )}
            </Box>


        </Flex>

    )
};

export default MainPage;