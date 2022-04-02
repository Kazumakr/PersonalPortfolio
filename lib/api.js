import client, { previewClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const workFields = `title,description,'slug':slug.current,image,projectlink,githublink,mediumlink,tech,`;

const builder = imageUrlBuilder(client);

const getClient = (preview) => (preview ? previewClient : client);

export function urlFor(source) {
	return builder.image(source);
}

export async function getAllWork() {
	const results = await client.fetch(
		`*[_type=="work"]|order(date desc){${workFields}}`
	);
	return results;
}
export async function getPaginatedWork({ offset = 0 } = { offset: 0 }) {
	const results = await client.fetch(
		`*[_type=="work"]|order(date desc){${workFields}}[${offset}...${
			offset + 3
		}]`
	);
	return results;
}

export async function getWorkBySlug(slug, preview) {
	const currentClient = getClient(preview);
	const result = await currentClient
		.fetch(
			`*[_type=="work"&&slug.current==$slug]{${workFields}content[]{...,"asset":asset->}}`,
			{
				slug,
			}
		)
		.then((res) => (preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]));

	return result;
}
