import React, { useEffect, useState } from 'react';
import { fetchCast } from 'components/api';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const movieId = useParams();
  useEffect(() => {
    const getApiInfo = async () => {
      try {
        const cast = await fetchCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getApiInfo();
  }, [movieId]);

  const castArr = cast?.cast?.map(el => (
    <li key={el.cast_id}>
      <img
        style={{ width: '200px' }}
        src={
          el?.profile_path
            ? `https://image.tmdb.org/t/p/original${el?.profile_path}`
            : 'https://abrakadabra.fun/uploads/posts/2021-12/1640528610_2-abrakadabra-fun-p-serii-chelovek-na-avu-2.jpg'
        }
        alt=""
      />
      <h4>{el.name}</h4>
      <p>{el.character}</p>
    </li>
  ));

  return <>{cast && <ul>{castArr}</ul>}</>;
};

export default Cast;
