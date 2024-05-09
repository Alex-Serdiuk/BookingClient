import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    destination: undefined,
    dates: [],
    options: {
      adult: undefined,
      children: undefined,
      room: undefined,
    },
  };

  export const SearchContext = createContext(INITIAL_STATE);

  const SearchReducer = (state, action) => {
    switch (action.type) {
      case "NEW_SEARCH":
        return action.payload;
      case "RESET_SEARCH":
        return INITIAL_STATE;
      default:
        return state;
    }
  };

  export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE, () => {
      const localData = localStorage.getItem('search');
    if (localData) {
      const parsedData = JSON.parse(localData);
      // Перетворення дат з рядків у об'єкти Date
      parsedData.dates = parsedData.dates.map(date => ({
        ...date,
        startDate: new Date(date.startDate),
        endDate: new Date(date.endDate)
      }));
      return parsedData;
    }
    return INITIAL_STATE;
    });

    useEffect(() => {
      localStorage.setItem('search', JSON.stringify({
        ...state,
        // Збереження дат як рядків
        dates: state.dates.map(date => ({
          ...date,
          startDate: date.startDate.toISOString(),
          endDate: date.endDate.toISOString()
        }))
      }));
    }, [state]);
  
    return (
      <SearchContext.Provider
        value={{
          destination: state.destination,
          dates: state.dates,
          options: state.options,
          dispatch,
        }}
      >
        {children}
      </SearchContext.Provider>
    );
  };