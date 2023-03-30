import { useState, useRef } from "react";
import { ethers, BigNumber } from "ethers";
import { Flex, Box, Text, Input, Button, Textarea } from '@chakra-ui/react';
import ABI from "./ABI.json";



import ExyJson from "./main_abi.json";
import {Contract} from 'starknet';




const NftAddress = "0x77C469eC60fCCdbBDe9FC6Fd05B6E3D70ee8D245";


const About = ({ accounts, setAccounts }) => {
    const [address, setAddress] = useState(0);
    const isConnected = Boolean(accounts);
    const phoneref = useRef(null);

    var contract;




    async function click() {
        if (window.ethereum) {
           


        }
        try {
            const MyContractAddress = "0x601b2b84ac5b1d24b9c988ea1f6fd8ca9131b4ffcb00a8dd927075043ed0b59";
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
                <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">We want to create a dapp that can find any person in the world through a blockchain address. </Text>

                <p></p>
                <p></p>
                <p>Click to register, bind your blockchain address and phone number, then use the sending interface to send messages to the corresponding blockchain address on your phone.</p>
            </Box>


        </Flex>

    )
};

export default About;