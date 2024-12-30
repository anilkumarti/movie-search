import { createContext, useContext, useEffect, useState } from "react";
export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading]=useState(true);
  const [movies, setMovies]=useState([])
  const [isError, setIsError]=useState({show:'false',msg:''})
 const [query,setQuery]=useState('Titanic')
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("api", data); 
      if(data.Response==='True')
      { 
        setMovies(data.Search);
        setIsError({
          show:false, msg: ''
         })  
        setIsLoading(false);
      }  
      else {
 setIsError({
  show:true, msg: data.Error
 }) 
      }
    
    } catch (error) {
      console.log(error);  
    }
  };
  useEffect(() => {
    getMovies(`${API_URL}&s=${query}`);
    
  }, [query]);
  return (
    <AppContext.Provider value={{isLoading,isError, movies,query,setQuery}
      
    }> {children}</AppContext.Provider>
  );
};
// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
