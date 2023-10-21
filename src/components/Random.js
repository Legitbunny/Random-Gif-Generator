import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => { 

    // const[gif,setGif] = useState('');

    // const [loading,setLoading] = useState('false');

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const url2 = `https://api.giphy.com/v1/gifs/random?api_key=cJ7rKPWofbcaVIxj4HsV9bPohq7SZ1fy&tag=&rating=g`
    //     const output = await axios.get(url2);
    //     console.log(output);
    //     const imgSrc = output.data.data.images.downsized_large.url;
    //     setGif(imgSrc)
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    const {gif, loading, fetchData} = useGif();

    // function clickHandler() {
    //     fetchData();
    // }

  return (
    <div className='w-1/2  bg-green-700 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] font-bold text-2xl underline uppercase'>Random Gif</h1>
        
        {
          loading ? (<Spinner/>) : (<img src={gif} width={450}/>)
        }
        

        <button 
        className='w-9/12 mb-[20px] bg-yellow-500 text-xl py-2 rounded-lg '
         onClick={() => fetchData()}>Generate</button>
    </div>
  )
}

export default Random