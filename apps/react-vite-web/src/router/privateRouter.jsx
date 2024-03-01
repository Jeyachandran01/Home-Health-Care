/* eslint-disable react/display-name */
import { PageNotFound } from '@core/ui/components';
import { localStorageKeys } from '@core/utils';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { appRoutes } from '@core/routes';

function PrivateRouter(props) {
  const { children } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // get the authToken from local storage
    const authToken = localStorage.getItem(localStorageKeys?.authToken);

    // If no auth token redirect to login & the path is not in the login routes
    if (!authToken) {
      navigate(appRoutes.login);
    } else {
      setShowComponent(true);
    }
  }, [location]);

  if (showComponent) {
    return children;
  }
  if (!Object.values(appRoutes).some((key) => key === location?.pathname)) {
    return <PageNotFound />;
  }
}

export { PrivateRouter };
