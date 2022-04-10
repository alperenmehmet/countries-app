import { useColorMode, Button, Text } from '@chakra-ui/react';

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav className='nav'>
      <div className='section-center nav-center'>
        <Text fontWeight='bold' fontSize='2xl'>
          Where in the world?
        </Text>
        <Button className='btn' onClick={toggleColorMode}>
          {'light' ? 'Dark' : 'Light'}
        </Button>
      </div>
    </nav>
  );
}
