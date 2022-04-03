import { getWorkBySlug } from "../../lib/api";

export default async function enablePreview(req, res) {
	if (
		req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
		!req.query.slug
	) {
		return res.status(401).json({ message: "Invalid token" });
	}
	const work = await getWorkBySlug(req.query.slug, true);

	if (!work) {
		return res.status(401).json({ message: "Invalid Slug" });
	}
	res.setPreviewData({});
	res.writeHead(307, { Location: `/work/${work.slug}` });
	res.end();
}
