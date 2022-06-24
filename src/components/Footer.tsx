import { VFC } from 'react';
import NextLink from 'next/link';
import { Box, Center, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react';

const Footer: VFC = () => {
  return (
    <Flex
      as={'footer'}
      justify={{ base: 'center', md: 'space-between' }}
      p={{ base: 4, md: 6 }}
      gap='2'
      bgColor={'blue.600'}
      textColor={'gray.200'}
      direction={{ base: 'column', md: 'column' }}
    >
      <Heading as='h1' py='2' size='lg' textAlign={{ base: 'center', md: 'start' }}>
        Sunset Time Notify
      </Heading>

      <Flex
        gap='2'
        justify={{ base: 'center', md: 'space-between' }}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Center>
          <Text size='sm'>© 2022 y4shiro</Text>
        </Center>

        <Center>
          <HStack>
            <NextLink href='https://github.com/y4shiro/sunset-time-notify' passHref>
              <Link>View this site on GitHub</Link>
            </NextLink>
          </HStack>
        </Center>
      </Flex>
    </Flex>
  );
};

export default Footer;
