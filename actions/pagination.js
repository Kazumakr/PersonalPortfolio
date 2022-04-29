import useSWRInfinite from "swr/infinite";
import { getWorks } from "../actions";

export const useGetWorksPages = ({ limit = 3 }) => {
	const results = useSWRInfinite(
		(index, previousPageData) => {
			if (index === 0) {
				return `/api/works?limit=${limit}`;
			}
			if (!previousPageData.length) {
				return null;
			}
			return `/api/works?offset=${index * limit}&limit=${limit}`;
		},
		getWorks,
		{ persistSize: true }
	);
	let hitEnd = false;
	const { data } = results;
	if (data) {
		hitEnd = data[data.length - 1].length < limit;
	}

	return { ...results, hitEnd };
};
