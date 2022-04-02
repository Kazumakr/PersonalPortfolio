import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export const useGetHello = () => {
	return useSWR("/api/hello", fetcher);
};

export const useGetWorks = ({ offset }, initialData) => {
	return useSWR(`/api/works?offset=${offset || 0}`, fetcher, {
		fallbackData: initialData,
	});
};

export const getWorks = (url) => fetcher(url);
