import { useSDK } from "@metamask/sdk-react";
import { useState,useEffect } from "react";
import { Button} from '@chakra-ui/react'
import Web3 from 'web3';
import ABI from './ABI.json';
export const Metamask = () => {
    const [account, setAccount] = useState();
    const { sdk, connected, connecting, provider, chainId } = useSDK();

    const connect = async () => {
        try {
            const accounts = (await sdk?.connect());
            setAccount(accounts?.[0]);
        } catch (err) {
            console.warn("failed to connect..", err);
        }
    };


    useEffect(() => {
        if (account) {
            getBalance();
        }
    }, [account]);

    const getBalance = async () => {
        const infuraEndpoint = 'https://mainnet.infura.io/v3/6747b83c121345e497a9c03e72584e09';
        const web3 = new Web3(new Web3.providers.HttpProvider(infuraEndpoint));
        const contractAddress = '0x73454acfddb7a36a3cd8eb171fbea86c6a55e550'; // Your contract address
        const contractInstance = new web3.eth.Contract(ABI, contractAddress);
        const userAddress = account; // Assuming the user has approved the account access

        const balance = await contractInstance.methods.balanceOf(userAddress).call()
        window.sessionStorage.setItem("balance", balance);
    };

    const con = async () => {
        await connect();
    }

    return (
    <>      
            {!connected && (
            <Button style={{ padding: 10, margin: 10 }} onClick={connect}>
                Connect
            </Button>
            )
            }
            {connected && (
                <Button style={{ padding: 10, margin: 10,backgroundColor:"red",color:"white",fontSize:14 }} onClick={con}>
                {sessionStorage.getItem("balance")}
                </Button>
            )}
    </>
    );
};