import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';
import { NotificationsNav } from './Header/NotificationsNav';
import { Profile } from './Header/Profile';

export function Header() {
    return(
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            marginX="auto"
            mt="4"
            align="center"
            px="6"
            >
            <Text
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
            >dashgo
            <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxW={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input 
                    color="gray.50"
                    variant="unstyled"
                    placeholder="Buscar na plataforma"
                    _placeholder={{color: 'gray.400'}}
                    px="4"
                    mr="4"
                />
                <Icon as={RiSearchLine} fontSize="20" />
            </Flex>

            <Flex 
                align="center"
                ml="auto"
            >
                <NotificationsNav/>
                <Profile/>
            </Flex>
        </Flex>
    )
}