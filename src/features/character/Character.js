// =============================================================== //
// ========= Below written code is for Button pagination ========= //
// =============================================================== //

import React, { useEffect, useState } from 'react'
import { fetchCharacter } from './characterSlice'
import { useSelector, useDispatch } from 'react-redux';
import CharacterCard from './CharacterCard';
import Wrapper from '../wrapper/Wrapper';
import StyledSection from './Character.styled';
import CustomPagination from './CustomPagination';

const Character = () => {

  const dataPerPage = 20;
  const totalPages = 107;   
  // totalPages = 214 --- if pageSize = 10
  // totalPages = 107 --- if pageSize = 20
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [animeDirection, setAnimeDirection] = useState(false);
  const characterAll = useSelector(state => state.characters.character);
  const loading = useSelector(state => state.characters.loading);
  const fetchError = useSelector(state => state.characters.error);
  const characterApi = `https://www.anapioficeandfire.com/api/characters?page=${currentPage}&pageSize=${dataPerPage}`;

  useEffect(() => {
    dispatch(fetchCharacter(characterApi))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const handlePrevPage = () => {
    setCurrentPage(currentPage-1);
    setAnimeDirection(true);
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage+1);
    setAnimeDirection(false);
  }

  const nameFilteredCharater = characterAll.filter(character => character.name !== "");

  return (
    <StyledSection>
      <Wrapper className='character-wrapper'>
        <h2 className='section-title'>ice & fire character list</h2>
        {
          loading ? <h3 className='loading-text'>loading...</h3> :
          nameFilteredCharater.length > 0 && fetchError === "" ? 
          <>
          <ul className="character-cards-all">
            {
              nameFilteredCharater.map((character, i) => {
                const { name, gender, culture, aliases, playedBy } = character;
                return <CharacterCard key={i} name={name} gender={gender} culture={culture} aliases={aliases} playedBy={playedBy} animeDirection={animeDirection} />
              })
            }
          </ul>
          <CustomPagination totalPages={totalPages} currentPage={currentPage} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
          </> : fetchError !== "" && <h3 className='error-text'>{fetchError}</h3>
        }
      </Wrapper>
    </StyledSection>
  )
}

export default Character





























// // =============================================================== //
// // ===== Below written code is for Infinite Scroll Pagination ==== //
// // =============================================================== //

// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react'
// import { fetchCharacter } from './characterSlice'
// import { useSelector, useDispatch } from 'react-redux';
// import CharacterCard from './CharacterCard';
// import Wrapper from '../wrapper/Wrapper';
// import StyledSection from './Character.styled';

// const Character = () => {

//   const dataPerPage = 20;
//   const totalPages = 107;   
//   // totalPages = 214 --- if pageSize = 10
//   // totalPages = 107 --- if pageSize = 20
//   const dispatch = useDispatch();
//   const [currentPage, setCurrentPage] = useState(1);
//   const characterAll = useSelector(state => state.characters.character);
//   const loading = useSelector(state => state.characters.loading);
//   const fetchError = useSelector(state => state.characters.error);
//   const characterApi = `https://www.anapioficeandfire.com/api/characters?page=${currentPage}&pageSize=${dataPerPage}`;

//   useEffect(() => {
//     dispatch(fetchCharacter(characterApi))
    
//     // infinite scroll function
//     const handleInfiniteScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//       ) {
//         setCurrentPage(currentPage + 1);
//         if (currentPage >= totalPages) setCurrentPage(totalPages);
//       }
//     };
  
//     window.addEventListener("scroll", handleInfiniteScroll)

//     return () => {
//       window.removeEventListener("scroll", handleInfiniteScroll);
//     };
//   }, [currentPage, characterApi])

//   const nameFilteredCharater = characterAll.filter(character => character.name !== "");

//   return (
//     <StyledSection>
//       <Wrapper className='character-wrapper'>
//         <h2 className='section-title'>ice & fire character list</h2>
//         {
//           nameFilteredCharater.length > 0 && 
//           <ul className="character-cards-all">
//             {
//               nameFilteredCharater.length > 0 && nameFilteredCharater.map((character, i) => {
//                 const { name, gender, culture, aliases, playedBy } = character;
//                 return <CharacterCard key={i} uIndex={i} name={name} gender={gender} culture={culture} aliases={aliases} playedBy={playedBy} />
//               })
//             }
//           </ul>
//         } 
//           { loading && <h3 className='loading-text'>loading...</h3> }
//           { fetchError !== "" && <h3 className='error-text'>{fetchError}</h3> }
//       </Wrapper>
//     </StyledSection>
//   )
// }

// export default Character