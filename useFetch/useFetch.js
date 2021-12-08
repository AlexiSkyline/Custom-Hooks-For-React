import { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {
    const isMouted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: true });

    useEffect(() => {
        return () => {
            isMouted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {  
                if( isMouted.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'Could not load info'
                })
            });
    }, [url]);

    return state;
}