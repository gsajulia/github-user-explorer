import { useState } from "react";

interface ApiRequestHook<T> {
  data: T | null;
  error: string;
  isLoading: boolean;
  setError: React.Dispatch<React.SetStateAction<string>>;
  sendRequest: (requestFn: (...args: any[]) => Promise<T>, ...args: any[]) => Promise<void>;
}

function useFetch<T>(): ApiRequestHook<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = async (requestFn: (...args: any[]) => Promise<T>, ...args: any[]) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await requestFn(...args);
      setData(response);
    } catch (error: any) {
      setError('Erro ao realizar a busca.');
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, setError, sendRequest };
}

export default useFetch;
