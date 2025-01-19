import { jwtDecode } from "jwt-decode";
import { useCallback, useState } from "react";

const useToken = () => {
  const [token, setTokenState] = useState(null);

  const setToken = (tokenName, newToken) => {
    localStorage.setItem(tokenName, newToken);
  };

  const getToken = (tokenName) => {
    const token = localStorage.getItem(tokenName)

    if (token) {
      const decodedToken = jwtDecode(token)
      setTokenState(decodedToken);
      return decodedToken
    };

    setTokenState(null)
  };

  const removeToken = (tokenName) => {
    localStorage.removeItem(tokenName);
    setTokenState(null)
  };

  return {token, getToken, setToken, removeToken};
};

export default useToken;
