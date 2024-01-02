const fs = require("fs");
const path = require("path");

function genSiteMap() {
	const pagesDir = path.resolve(process.cwd(), "src/app");
	const files = fs.readdirSync(pagesDir);
	const url = process.env.WEBSITE_URL || "http://localhost:3000/";

	let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
	for (var i = 0; i < files.length; i++) {
		let fileName = files[i];
		let formattedFileName = fileName.replace(/\.[^/.]+$/, "");
		sitemap =
			sitemap +
			`<loc>${url}${formattedFileName}</loc>` +
			`<lastmod>${new Date().toISOString()} </lastmod> ` +
			`<changefreq>weekly</changefreq>` +
			`<priority>1.0</priority>`;
	}
	sitemap = sitemap + `</urlset > `;
	fs.writeFileSync("public/sitemap.xml", sitemap);
}

genSiteMap();
