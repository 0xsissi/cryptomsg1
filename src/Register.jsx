import { useState, useRef } from "react";
import { ethers, BigNumber } from "ethers";
import { Flex, Box, Text, Input, Button, Textarea } from '@chakra-ui/react';
import ABI from "./ABI.json";



import ExyJson from "./main_abi.json";
import {Contract} from 'starknet';




const NftAddress = "0x77C469eC60fCCdbBDe9FC6Fd05B6E3D70ee8D245";


const Register = ({ accounts, setAccounts }) => {
    const [address, setAddress] = useState(0);
    const isConnected = Boolean(accounts);
    const phoneref = useRef(null);

    var contract;




    async function clickregister() {
        if (isConnected) {
           


        }
        try {
            const MyContractAddress = "0x1c604c8b19da7e7610b2a2dcccddd4fa4aca01bd93d2c93a295b57eebe8f102";
            const contractConnect = new Contract(ExyJson, MyContractAddress, accounts); // We set our Contract passing our Json, ContractAddress
    //                                                          and our Account (address, provider and the signer) 
            console.log(contractConnect);
            console.log(accounts.address);
            let aa = await contractConnect.read_telephone(accounts.address);
            console.log(aa);
            console.log(aa.words);
            return contractConnect.set_telephone(accounts.address,phoneref.current.value); // Call the mint function of our contract 

        }
        catch (err) {
            console.log('err is :', err);
        }

        // if (window.ethereum) {
        //     const provider = new ethers.providers.Web3Provider(window.ethereum);
        //     const signer = provider.getSigner();
        //     contract = new ethers.Contract(ABI.ADDR, ABI.ABI, signer);



        // }
        // try {
        //     const response = await contract.register(accounts[0], phoneref.current.value);
        //     console.log('msg send ok !', phoneref.current.value);
        //     console.log('response :', response);
        // } catch (err) {
        //     console.log('err is :', err);
        // }
    }





    return (
        <Flex justify="center" align="center" hight="100vh" paddingBottom="150px">
            <Box width="800px" >

                <Text fontSize="48px" textShadow="0 5px #000000" >Crypto Messenger</Text>
                <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">Bind your Phone and Address. </Text>
                {isConnected ? (
                    <div>
                        <Flex align="center" justify="center">
                            <Text
                                marginTop="30px"
                                textAlign="center"
                                padding="15px"
                                marginRight="5px"
                            >Telephone</Text>

                            <Input
                                fontFamily="inherit"
                                width="250px"
                                height="40px"
                                marginTop="30px"
                                padding="15px"

                                type="tel"
                                ref={phoneref}
                                placeholder="Phone Number"
                                _placeholder={{ color: 'inherit' }}
                            />


                        </Flex>

                        <Flex align="center" justify="center">
                            <Text
                                marginTop="10px"
                                textAlign="center"
                                padding="15px"
                                marginRight="5px"
                            > Address </Text>

                            <Input
                                readOnly
                                fontFamily="inherit"
                                width="250px"
                                height="40px"
                                marginTop="10px"
                                padding="15px"
                                marginLeft="30px"
                                type="tel"
                                value={accounts.address}
                                placeholder="Address"
                                _placeholder={{ color: 'inherit' }}
                            />


                        </Flex>





                        <Flex align="center" justify="center">

                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="30px" onClick={clickregister}>Register</Button>
                        </Flex>
                    </div>


                ) : (
                    <p>You must click connect to bind.</p>
                )}
            </Box>


        </Flex>

    )
};

export default Register;