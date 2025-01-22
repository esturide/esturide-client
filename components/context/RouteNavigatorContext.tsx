import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

const RouteContext = createContext(null);

export default function RouteNavigatorContext({ children }: PropsWithChildren) {
  const [currentRoute, setCurrentRoute] = useState('/user/maps');

  return (
    <RouteContext.Provider
      value={{ currentRoute: currentRoute, setCurrentRoute: setCurrentRoute }}
    >
      {children}
    </RouteContext.Provider>
  );
}

export const useTravelScheduleRoute = () => {
  return useContext(RouteContext);
};
