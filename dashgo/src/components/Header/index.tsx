import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
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
            <Logo/>

            {isWideVersion && <SearchBox/>}

            <Flex 
                align="center"
                ml="auto"
            >
                <NotificationsNav/>
                <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    )
}