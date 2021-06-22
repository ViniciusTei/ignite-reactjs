import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box mr="4" align="right">
                <Text>Vinicius Teixeira</Text>
                <Text color="gray.300" fontSize="small">viniciustprates@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Vinicius Teixeira" src="https://github.com/viniciustei.png"></Avatar>
        </Flex>
    )
}