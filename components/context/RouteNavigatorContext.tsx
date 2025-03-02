import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

interface Props {
  validTravel: boolean;
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
}

const RouteContext = createContext<Props>({
  validTravel: false,
  currentRoute: '/user/maps',
  setCurrentRoute: (route: string) => {},
});

export default function RouteNavigatorContext({ children }: PropsWithChildren) {
  const [validTravel, setValidTravel] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/user/maps');

  return (
    <RouteContext.Provider
      value={{
        currentRoute: currentRoute,
        validTravel: validTravel,
        setCurrentRoute: setCurrentRoute,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
}

export const useRouteNavigator = () => {
  return useContext(RouteContext);
};
