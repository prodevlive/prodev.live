export function useSession(key: string) {
  key = `prodev_live_${key}`;
  const setSession = (value: string) => {
    sessionStorage.setItem(key, value);
  };    
  const getSession = () => {
    return sessionStorage.getItem(key);
  };
  return [ getSession, setSession];
}