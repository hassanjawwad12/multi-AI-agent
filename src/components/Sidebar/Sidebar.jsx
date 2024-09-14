import { VStack, HStack, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import IconButton from '../IconButton'
import Options from './Options'
import ButtonCustom from '../Button'
import logo from '../../assets/logo.crop.png'
import { useSDK } from "@metamask/sdk-react";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Web3 from 'web3';
import ABI from '../ABI.json';
import PartnersOptions from './Partners'

export default function Sidebar(props) {
    const location = useLocation();
    const history = useHistory();
    const [account, setAccount] = useState();
    const { sdk, connected, connecting, provider, chainId } = useSDK();
    const [balance, setBalance] = useState(localStorage.getItem("balance") || 0);

    const connect = async () => {
        try {
            const accounts = (await sdk?.connect());
            setAccount(accounts?.[0]);
        } catch (err) {
            console.warn("failed to connect..", err);
        }
    };


    useEffect(() => {
        const getBalance = async () => {
            const infuraEndpoint = 'https://mainnet.infura.io/v3/6747b83c121345e497a9c03e72584e09';
            const web3 = new Web3(new Web3.providers.HttpProvider(infuraEndpoint));
            const contractAddress = '0x73454acfddb7a36a3cd8eb171fbea86c6a55e550'; // Your contract address
            const contractInstance = new web3.eth.Contract(ABI, contractAddress);
            const userAddress = account; // Assuming the user has approved the account access

            const balance = await contractInstance.methods.balanceOf(userAddress).call()

            console.log(`User balance: ${balance}`); // Output the balance
            localStorage.setItem("balance", balance);
            setBalance(balance);
        };
        if (account) {
            getBalance();
        }
    }, [account]);



    const con = async () => {
        await connect();
    }

    return (
        props.isExpanded ? (
            <VStack
                transition={'all .2s ease-in-out'}
                w={'64'}
                align={'flex-start'}
                h={'full'}
                bg={'brand.sidebar'}
                color={'white'}
                padding={'2'}
                position={['absolute', 'absolute', 'relative']}
                top={['0', '0', 'auto']}
                left={['0', '0', 'auto']}
                zIndex={['toast', 'toast', 'auto']}
                fontFamily={'body'}
            >
                <VStack
                    align={'flex-start'}
                    h={24}
                    marginTop={'2'}
                >
                    <HStack
                        w={'full'}
                        justify={'space-between'}
                        align={'center'}
                        spacing={'5'}
                    >
                        <IconButton
                            onClick={() => props.setIsExpanded(false)}
                            icon={IoIosArrowBack}
                            boxSize={10}
                            type={'light'}
                            display={['flex', 'flex', 'none', 'none']}
                        />
                        <Link href={'https://buildaierc.com/'}>
                            <Image
                                src={logo}
                                alt={'logo'}
                                w={'12'}
                                objectFit={'contain'}
                            />
                        </Link>
                    </HStack>
                </VStack>
                <VStack
                    align={'flex-start'}
                    spacing={'4'}
                    w={'full'}
                    h={'full'}
                    overflowY={'auto'}
                    overflowX={'hidden'}
                >
                    {/* options array and logic goes here */}
                    {(location.pathname == '/' || (location.pathname).includes("/AIbot")) ? props.options?.map((options, index) => (
                        <Options
                            index={index}
                            key={options.id}
                            toolId={options.id}
                            isExpanded={props.isExpanded}
                            w={'full'}
                            optionsTitle={options.title}
                            link={options.link}
                            active={options.active}
                            setOptions={props.setOptions}
                            options={props.options}
                        />
                    ))
                        : (location.pathname).includes('/builders-hub') ? props.partnerOpt?.map((options, index) => (
                            <PartnersOptions
                                index={index}
                                logo={options.logo}
                                key={options.id}
                                toolId={options.id}
                                isExpanded={props.isExpanded}
                                w={'full'}
                                optionsTitle={options.title}
                                link={options.link}
                                active={options.active}
                                setOptions={props.setPartnerOpt}
                                options={props.partnerOpt}
                            />
                        ))
                            : null}
                </VStack>
                {/* bottom buttons of dashboard and their logic goes here */}
                <VStack
                    align={'flex-start'}
                    w={'full'}
                    spacing={'4'}
                >
                    <ButtonCustom
                        h="12"
                        type={'primary'}
                        btnName={(location.pathname).includes('/builders-hub') ? 'Dapp' : 'Builders Hub'}
                        w={'full'}
                        isExpanded={true}
                        onClick={() => {
                            if ((location.pathname).includes('/builders-hub')) {
                                history.push('/');
                            } else {
                                history.push('/builders-hub');
                            }
                        }}
                    />
                    <ButtonCustom
                        h="12"
                        type={'primary'}
                        btnName={!connected ? 'Connect Wallet' : `Balance: ${balance}`}
                        w={'full'}
                        isExpanded={true}
                        onClick={() => {
                            if (!connected) {
                                con()
                            }
                        }}
                    />
                </VStack>
            </VStack>
        ) :
            (
                <VStack
                    display={['none', 'none', 'flex', 'flex']}
                    transition={'all .2s ease-in-out'}
                    w={'64'}
                    align={'flex-start'}
                    h={'full'}
                    bg={'rgba(17, 17, 17, 0.5)'}
                    color={'white'}
                    padding={'2'}
                    pos={'relative'}
                    zIndex={'toast'}
                >
                    <VStack
                        align={'flex-start'}
                        h={24}
                        marginTop={'2'}
                    >
                        <IconButton
                            transform={'rotate(180deg)'}
                            onClick={() => props.setIsExpanded(true)}
                            icon={IoIosArrowBack}
                            boxSize={10}
                            type={'light'}
                            display={['flex', 'flex', 'none', 'none']}
                        />
                        <Link href={'https://buildaierc.com/'}>
                            <Image
                                src={logo}
                                alt={'logo'}
                                w={'16'}
                                mb={'4'}
                            />
                        </Link>
                    </VStack>
                    <VStack
                        align={'flex-start'}
                        spacing={'4'}
                        w={'full'}
                        h={'full'}
                        overflowY={'auto'}
                    >
                        {/* options array and logic goes here */}
                        {(location.pathname == '/' || location.pathname == "/AIbot") && props.options?.map((options, index) => (
                            <Options
                                index={index}
                                key={options.id}
                                toolId={options.id}
                                isExpanded={true}
                                w={'full'}
                                optionsTitle={options.title}
                                link={options.link}
                                active={options.active}
                                setOptions={props.setPartnerOptions}
                                options={props.options}
                            />
                        ))}
                        {(location.pathname).includes('/builders-hub') && props.partnerOpt?.map((options, index) => (
                            <PartnersOptions
                                index={index}
                                logo={options.logo}
                                key={options.id}
                                isExpanded={true}
                                w={'full'}
                                optionsTitle={options.title}
                                link={options.link}
                                active={options.active}
                                setOptions={props.setPartnerOpt}
                                options={props.partnerOpt}
                            />
                        ))}
                    </VStack>
                    {/* bottom buttons of dashboard and their logic goes here */}
                    <VStack
                        align={'flex-start'}
                        w={'full'}
                        spacing={'4'}
                    >
                        <ButtonCustom
                            h="12"
                            type={'primary'}
                            btnName={(location.pathname).includes('/builders-hub') ? 'Dapp' : 'Builders Hub'}
                            w={'full'}
                            isExpanded={true}
                            onClick={() => {
                                if ((location.pathname).includes('/builders-hub')) {
                                    history.push('/');
                                } else {
                                    history.push('/builders-hub');
                                }
                            }}
                        />
                        <ButtonCustom
                            h="12"
                            type={'primary'}
                            btnName={!connected ? 'Connect Wallet' : `Balance: ${balance}`}
                            w={'full'}
                            isExpanded={true}
                            onClick={() => {
                                if (!connected) {
                                    con()
                                }
                            }}
                        />
                    </VStack>
                </VStack>
            )
    )
}
