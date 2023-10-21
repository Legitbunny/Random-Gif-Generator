import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const url = `https://api.giphy.com/v1/gifs/random?api_key=cJ7rKPWofbcaVIxj4HsV9bPohq7SZ1fy`
 
const useGif = (tag) => {

    const[gif,setGif] = useState('');
    // const [tag,setTag] = useState('Car')
    const [loading,setLoading] = useState('false');

    async function fetchData(tag){
        setLoading(true);
        // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        
        const output = await axios.get(tag ? `${url}&tag=${tag}` : `${url}&tag=&rating=g`);
        console.log(output);
        const imgSrc = output.data.data.images.downsized_large.url;
        setGif(imgSrc)
        setLoading(false);
    }

    useEffect(() => {
        fetchData('Car');
    }, [])

    return {gif, loading, fetchData};

}

export default useGif