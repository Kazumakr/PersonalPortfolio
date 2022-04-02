import { getPaginatedWork } from "../../lib/api";
export default async function getWorks(req, res) {
	const offset = parseInt(req.query.offset || 0, 10);
	const data = await getPaginatedWork({ offset });
	res.status(200).json(data);
}
