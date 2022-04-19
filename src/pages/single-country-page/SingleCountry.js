import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { URL_COUNTRY } from '../../constants/api';
import {
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';

export function SingleCountry() {
  const [country, setCountry] = useState({});
  const { name } = useParams();

  useEffect(() => {
    async function getCountry() {
      try {
        const response = await fetch(`${URL_COUNTRY}${name}`);
        const data = await response.json();
        setCountry(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCountry();
  }, [name]);

  return (
    <Container maxWidth='container.xl'>
      <Flex>
        <Link to={`/`} className='go-back-link'>
          <FaArrowLeft />
          Go Back
        </Link>
      </Flex>
      <Flex>
        <VStack
          w='full'
          h='full'
          p={5}
          spacing={10}
          my={15}
          alignItems='flex-start'
        >
          <Image
            src={country[0]?.flags.png}
            alt='country'
            className='box single-image'
          />
        </VStack>
        <VStack
          w='full'
          h='full'
          p={5}
          spacing={10}
          my={15}
          alignItems='flex-start'
        >
          <Text fontWeight='bold' fontSize='3xl'>
            {country[0]?.altSpellings[1]}
          </Text>
          <SimpleGrid columns={2} columnGap={6} rowGap={8} w='full'>
            <Text>
              Native Name: {country[0]?.name?.nativeName?.spa?.official}
            </Text>
            <Text>Top Level Domain : {country[0]?.tld}</Text>
            <Text>Population : {country[0]?.population}</Text>
            <Text>
              Currencies :
              {
                country[0]?.currencies[Object.keys(country[0]?.currencies)[0]]
                  .name
              }
            </Text>
            <Text>Region : {country[0]?.region}</Text>
            <Text>
              Languages :
              {country[0]?.languages[Object.keys(country[0]?.languages)[0]]}
            </Text>
            <Text>Subregion : {country[0]?.subregion}</Text>
            <Text>Capital : {country[0]?.capital}</Text>
            <Flex alignItems='center'>
              Borders:
              {country[0]?.borders?.map((border, index) => {
                return (
                  <Text
                    key={index}
                    border='1px solid black'
                    mx={5}
                    textAlign='center'
                    padding={3}
                  >
                    {border}
                  </Text>
                );
              })}
            </Flex>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Container>
  );
}
