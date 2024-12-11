import { useState, createContext, useContext, useEffect } from 'react';
import {textRtlStyle,imageRtlStyle,viewRtlStyle,viewSelfRtlStyle} from '../../styles/rtlStyle'
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';

const initialContextVal = {
  currSymbol: '$',
  currValue: 1,
  isDark: false,
  setIsDark: () => { },
  rtl: false,
  setRtl: () => { },
  setCurrValue: () => { },
  setCurrSymbol: () => { },
  textRtlStyle: 'left',
  imageRtlStyle: [{ scaleX: -1 }],
  viewRtlStyle: 'row',
  viewSelfRtlStyle: 'flex-end',
  t: '',
};

export const AppContext = createContext(initialContextVal);

export const AppContextProvider = ({ children }) => {
  const [currSymbol, setCurrSymbolState] = useState('$');
  const [currValue, setCurrValueState] = useState(1);
  const [isDark, setIsDark] = useState(false);
  const [rtl, setRtl] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const darkThemeValue = await AsyncStorage.getItem('darkTheme');
        if (darkThemeValue !== null) {
          setIsDark(JSON.parse(darkThemeValue));
        }

        const symbol = await AsyncStorage.getItem('currSymbol');
        if (symbol !== null) {
          setCurrSymbolState(symbol);
        }

        const value = await AsyncStorage.getItem('currValue');
        if (value !== null) {
          setCurrValueState(Number(value));
        }

        const rtlValue = await AsyncStorage.getItem('isRtl');
        if (rtlValue !== null) {
          setRtl(JSON.parse(rtlValue));
        }

        const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
        if (savedLanguage) {
          i18n.changeLanguage(savedLanguage);
        }


      } catch (error) {
        console.error('Error retrieving settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const setCurrSymbol = async symbol => {
    try {
      await AsyncStorage.setItem('currSymbol', symbol);
      setCurrSymbolState(symbol);
    } catch (error) {
      console.error('Error setting currSymbol:', error);
    }
  };

  const setCurrValue = async value => {
    try {
      await AsyncStorage.setItem('currValue', value.toString());
      setCurrValueState(value);
    } catch (error) {
      console.error('Error setting currValue:', error);
    }
  };

  const loadLanguageFromStorage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    } catch (error) {
      console.error('Error loading language from storage:', error);
    }
  };


  const toggleDarkMode = async () => {
    const newIsDark = !isDark;
    try {
      await AsyncStorage.setItem('darkTheme', JSON.stringify(newIsDark));
      setIsDark(newIsDark);
    } catch (error) {
      console.error('Error toggling dark mode:', error);
    }
  };

  const toggleRtl = async () => {
    const newRtl = !rtl;
    try {
      await AsyncStorage.setItem('Rtl', JSON.stringify(newRtl));
      setRtl(newRtl);
    } catch (error) {
      console.error('Rtl:', error);
    }
  };

  const contextValue = {
    currSymbol,
    setCurrSymbol,
    currValue,
    setCurrValue,
    isDark,
    setIsDark,
    toggleDarkMode,
    rtl,
    t,
    setRtl,
    toggleRtl,
    textRtlStyle: textRtlStyle(rtl),
    imageRtlStyle: imageRtlStyle(rtl),
    viewRtlStyle: viewRtlStyle(rtl),
    viewSelfRtlStyle: viewSelfRtlStyle(rtl),
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useValues = () => useContext(AppContext);



