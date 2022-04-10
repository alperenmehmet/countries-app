import { Input } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../../context';

export function SearchCountry() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCountry = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='section-center search-form'>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          className='form-input '
          ref={searchValue}
          onChange={searchCountry}
          placeholder='Search Country'
        />
      </form>
    </div>
  );
}
