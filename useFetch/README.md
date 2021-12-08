## useFetch

The parameter it receives is a link of type string.

Example api Rick And Morty API: https://rickandmortyapi.com/api.

Example code.
```
    const url = 'https://rickandmortyapi.com/api'; // <- this is the parameter you receive.
    const { data: null, loading: true, error: null } = useFetch( url ); // <- receiving parameter.
```