import { httpRequest, routeTo } from '@core/utils';
import { localStorageKeys } from '@core/utils/constants';
import { toast } from 'react-hot-toast';
import { envConfig } from '@core/config';
import create from 'zustand';
import { appRoutes } from '@core/routes';
import { log } from '@core/logger';
import { useRouting } from '../common';

export const useOnboarding = create((set, get) => ({
  user: {
    username: 'acharlota',
    password: 'M9lbMdydMN',
    confirmPassword: '',
    error: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  },
  otpVerified: false,
  loading: false,
  error: null,
  signIn: async () => {
    try {
      const { isInputsValid, user } = get();

      if (!isInputsValid()) return;

      set({ loading: true });
      // Hitting the signin API
      const response = await httpRequest(
        'post',
        `${envConfig.auth_url}/login`,
        {
          username: user?.username ?? '',
          password: user?.password ?? '',
        }
      );
      // If the user is exists
      if (response?.status === 200 && response?.data?.token) {
        const token = response?.data?.token;
        localStorage.setItem(localStorageKeys.authToken, token);
        toast.success('Signed in successfully');
        routeTo(useRouting, appRoutes.home);
      }
      set({ loading: false });
    } catch (err) {
      set({ loading: false });
      log('error', err);
      toast.error(
        err?.response?.data?.status?.message ??
          err?.message ??
          'Something went wrong please try again!'
      );
    }
  },
  logOut: () => {
    set({
      user: {
        username: 'acharlota',
        password: 'M9lbMdydMN',
        confirmPassword: '',
        error: {
          username: '',
          password: '',
          confirmPassword: '',
        },
      },
    });
    localStorage.setItem(localStorageKeys.authToken, null);
    toast.success('Signed out successfully');
    return routeTo(useRouting, appRoutes.login);
  },
  handleLoginChange: (key, value) => {
    const { user } = get();
    set({
      user: {
        ...user,
        [key]: value,
        error: {
          ...user.error,
          [key]: '',
        },
      },
    });
  },

  isInputsValid: () => {
    const { user, showError } = get();

    let isValid = true;
    const error = user?.error;
    //  Checking username
    if (user?.username.length === 0) {
      isValid = false;
      error.username = 'Enter a valid username';
    } else {
      error.username = '';
    }
    // Checking password
    if (user?.password.length === 0) {
      isValid = false;
      error.password = 'Enter the password';
    } else {
      error.password = '';
    }
    showError(error);
    return isValid;
  },

  // updateErrorOnboarding
  showError: (error) => {
    const { user } = get();
    set({
      user: {
        ...user,
        error: {
          ...user.error,
          error,
        },
      },
    });
  },
}));
