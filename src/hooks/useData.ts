import { AxiosInstance, AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../config/api_client";
import { DATA_MOCK } from "../config/constants";

interface Response<T> {
  data: T[];
  error: string | undefined;
  isLoading: boolean;
  api: AxiosInstance;
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
): Response<T> => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const loadMock = () => {
    fetch(`../__mocks/${endpoint}.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((d: T[]) => setData(d));
  };

  const callApi = (controller: AbortController) => {
    setLoading(true);
    apiClient
      .get<T[]>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(
    () => {
      if (DATA_MOCK) {
        loadMock();
      } else {
        const controller = new AbortController();
        callApi(controller);
        return () => controller.abort();
      }
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading, api: apiClient };
};

export default useData;
