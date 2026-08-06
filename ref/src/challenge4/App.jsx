import SearchButton from '../challenge4/SearchButton.jsx';
import SearchInput from '../challenge4/SearchInput.jsx';
import { useRef } from 'react';

export default function Page() {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <nav>
        <SearchButton onClick={handleClick} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
