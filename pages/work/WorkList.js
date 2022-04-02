import React from "react";
import Layout from "../../layout/Layout";

import { getAllWork } from "../../lib/api";
import { useGetWorks } from "../../actions";

const WorkList = () => {
	// const { data: works, error } = useGetWorks(initialData);

	return (
		<div>
			WorkList
			{/* <Layout>
		 	<WorkList works={works} />
		 </Layout> */}
		</div>
	);
};

export default WorkList;
