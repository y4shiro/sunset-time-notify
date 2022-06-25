import { VFC } from 'react';
import NextLink from 'next/link';
import { Center, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

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
        gap={{ base: 0, md: 2 }}
        justify={{ base: 'center', md: 'space-between' }}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Center>
          <Flex gap={{ base: 0, md: 4 }} direction={{ base: 'column-reverse', md: 'row' }}>
            <Text size='sm'>© 2022 y4shiro</Text>
            <NextLink href='https://twitter.com/y4shiro_' passHref>
              <Link isExternal>
                <HStack>
                  <FaTwitter />
                  <Text>@y4shiro_</Text>
                </HStack>
              </Link>
            </NextLink>
            <NextLink href='https://github.com/y4shiro/sunset-time-notify' passHref>
              <Link isExternal>
                <HStack>
                  <FaGithub />
                  <Text>View this site on GitHub</Text>
                </HStack>
              </Link>
            </NextLink>
          </Flex>
        </Center>
      </Flex>
    </Flex>
  );
};

export default Footer;
