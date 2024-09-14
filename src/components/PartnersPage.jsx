import React from 'react'
import { VStack, Heading, Box, Stack, Image, Text, Link, Grid, GridItem, HStack } from '@chakra-ui/react'
import { FaCircleCheck } from "react-icons/fa6";


export default function PartnersPage(props) {
    return (
        <VStack w={'full'} h={'full'} maxH={'100vh'}
            position={'relative'}
            overflowY={'auto'}
        >
            <Box
                pos={'absolute'}
                top={0}
                left={0}
                right={0}
                bottom={0}
                background={'linear-gradient(180deg, rgba(223, 214, 1, 0.2) 0%, rgba(4, 178, 248, 1) 100%)'}
                zIndex={1}
                opacity={0.25}
                filter={'blur(100px)'}
            />
            <Stack
                position={'relative'}
                zIndex={2}
                direction={['column', 'column', 'row']}
                w={'full'} spacing={'4'}
                bg={'whiteAlpha.200'}
                p={'6'}
                align={'center'}
                justify={'space-between'}
            >
                <Stack w='full' align={'center'} direction='row' spacing={'4'}>
                    <Image src={props.partner.logo} w={'24'} h={'24'} alt="Partner Logo" />
                    <Heading as="h1" size="xl" color="white">{props.partner.title}</Heading>
                </Stack>
                {/* add all links with icons and description here and on mobile enable overflowX */}
                <Grid
                    templateColumns={'repeat(9, 0fr)'}
                    overflowX={'auto'}
                    w={'full'}
                    gap={['5', '5', '4']}
                    p={'2'}
                    h={'full'}
                    color={'white'}
                    alignContent={['flex-start', 'flex-start', 'center']}
                    justifyContent={['start', 'start', 'flex-end']}
                    fontSize={'md'}
                >
                    {props.partner.links?.website && (
                        <GridItem>
                            <Link href={props.partner.links?.website} isExternal>
                                <Text>Website</Text>
                            </Link>
                        </GridItem>
                    )}
                    {props.partner.links?.docs && (
                        <GridItem>
                            <Link href={props.partner.links?.docs} isExternal>
                                <Text>Docs</Text>
                            </Link>
                        </GridItem>
                    )}
                    {props.partner.links?.twitter && (
                        <GridItem>
                            <Link href={props.partner.links.twitter} isExternal>
                                <Text>Twitter</Text>
                            </Link>
                        </GridItem>
                    )}
                    {props.partner.links?.chart && (
                        <GridItem>
                            <Link href={props.partner.links.chart} isExternal>
                                <Text>Chart</Text>
                            </Link>
                        </GridItem>
                    )}
                    {props.partner.links?.telegram && (
                        <GridItem>
                            <Link href={props.partner.links.telegram} isExternal>
                                <Text>Telegram</Text>
                            </Link>
                        </GridItem>
                    )}
                    {props.partner.links?.discord && (
                        <GridItem>
                            <Link href={props.partner.links.bot} isExternal>
                                <Text>Bot</Text>
                            </Link>
                        </GridItem>
                    )}
                    {props.partner.links?.bot && (
                        <GridItem>
                            <Link href={props.partner.links.linktree} isExternal>
                                <Text>Linktree</Text>
                            </Link>
                        </GridItem>
                    )}
                    {props.partner.links?.medium && (
                        <GridItem>
                            <Link href={props.partner.links.medium} isExternal>
                                <Text>Medium</Text>
                            </Link>
                        </GridItem>
                    )}
                    {props.partner.links?.github && (
                        <GridItem>
                            <Link href={props.partner.links.uniswap_buy} isExternal>
                                <Text>Uniswap</Text>
                            </Link>
                        </GridItem>
                    )}
                    {props.partner.links?.community && (
                        <GridItem>
                            <Link href={props.partner.links.community} isExternal>
                                <Text>Community</Text>
                            </Link>
                        </GridItem>
                    )}
                </Grid>
            </Stack>
            <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
                templateRows={'repeat(1, 1fr)'}
                w={'full'}
                color={'white'}
                alignContent={'center'}
                justifyContent={'center'}
                h={'full'}
                p={'4'}
            >
                <GridItem
                    rowSpan={[1, 1, 2]}
                    colSpan={1}
                    p={['4', '4', '12']}
                    w='full' h='full'
                >
                    <Heading as="h2" size="lg" color="white">About Us</Heading>
                    <Text
                        mt={'12'}
                        fontSize={['md', 'md', 'lg']}
                        lineHeight={['1.5', '1.5', '2']}
                        color={'white'}
                    >{props.partner.about}</Text>

                </GridItem>
                {props.partner?.features && (
                    <GridItem
                        rowSpan={[1, 1, 2]}
                        colSpan={1}
                        p={['4', '4', '12']}
                        w='full' h='full'
                    >
                        <Heading as="h2" size="lg" color="white">Features</Heading>
                        <VStack align={'start'} spacing={'4'} mt={'12'}>
                            {props.partner.features.map((feature) => {
                                return (
                                    <Stack direction={'row'} align={'center'} spacing={'2'}>
                                        <Box w={'6'} h={'6'}>
                                            <FaCircleCheck color={'green'} />
                                        </Box>
                                        <Text
                                            fontSize={['md', 'md', 'lg']}
                                            lineHeight={['1.5', '1.5', '2']}
                                            color={'white'}
                                        >{feature}</Text>
                                    </Stack>
                                )
                            })}
                        </VStack>
                    </GridItem>
                )}
                {props.partner?.how_it_works && (
                    <GridItem
                        rowSpan={[1, 1, 2]}
                        colSpan={1}
                        p={['4', '4', '12']}
                        w='full' h='full'
                        position={'relative'}
                        zIndex={'popover'}
                    >
                        <Heading as="h2" size="lg" color="white">
                            How it works ?
                        </Heading>
                        <VStack align={'start'} spacing={'4'} mt={'12'}>
                            {props.partner.how_it_works.map((feature) => {
                                return (
                                    <Stack direction={'row'} align={'center'} spacing={'2'}>
                                        <Box alignContent={'center'} w={'6'} h={'6'}>
                                            <FaCircleCheck color={'green'} />
                                        </Box>
                                        <Text
                                            fontSize={['md', 'md', 'lg']}
                                            lineHeight={['1.5', '1.5', '2']}
                                            color={'white'}
                                        >{feature}</Text>
                                    </Stack>
                                )
                            })}
                        </VStack>
                    </GridItem>
                )}
            </Grid>
            <VStack w={'full'} h={'full'}>
                <Image
                    objectFit={'cover'}
                    src={props.partner.banner} w={'full'} h={'full'} alt="Partner Banner" />
            </VStack>
        </VStack>
    )
}
