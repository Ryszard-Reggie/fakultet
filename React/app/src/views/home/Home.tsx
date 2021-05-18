import React from 'react';

import NavPanel from '../../components/NavPanel';

import { omdAPIKey } from '../../key';

import http from '../../utils/http'


const Home = () =>
{
    const [search, setSearch] = React.useState('harry potter');
    const [movie, setMovie] = React.useState({});

    React.useEffect(() => 
    {
        const makeRequest = async () =>
        {
            try
            {
                const response = await <any>http.get('http://www.omdbapi.com/',
                {
                    apikey: omdAPIKey,
                    s: search,
                    plot: 'full',
                });
                setMovie(response);
            }
            catch (error)
            {
                console.log(error);
            }

        };
        makeRequest();
    }, [search]);
    
    return (
        <div>
            <NavPanel />
            <div>Dom</div>
        </div>
    );
}

export default Home;
