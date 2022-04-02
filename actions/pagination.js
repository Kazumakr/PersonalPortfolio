import useSWRInfinite from "swr/infinite";
import { getWorks } from "../actions";

export const useGetWorksPages = () => {
	const results = useSWRInfinite(
		(index, previousPageData) => {
			if (index === 0) {
				return `/api/works`;
			}
			if (!previousPageData.length) {
				return null;
			}
			return `/api/works?offset=${index * 3}`;
		},
		getWorks,
		{ persistSize: true }
	);
	let hitEnd = false;
	const { data } = results;
	if (data) {
		hitEnd = data[data.length - 1].length === 0;
	}

	return { ...results, hitEnd };
};
