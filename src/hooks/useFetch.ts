import { useState } from "react";

interface ApiRequestHook<T> {
  data: T | null;
  error: string;
  isLoading: boolean;
  setError: React.Dispatch<React.SetStateAction<string>>;
  sendRequest: <A, R>(requestFn: (...args: A[]) => Promise<R>, ...args: A[]) => Promise<void>;
}

function useFetch<T>(): ApiRequestHook<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = async <A, R>(requestFn: (...args: A[]) => Promise<R>, ...args: A[]) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await requestFn(...args);
      setData(response as unknown as T);
    } catch (error: any) {
      setError('Algo deu errado, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, setError, sendRequest };
}

export default useFetch;
