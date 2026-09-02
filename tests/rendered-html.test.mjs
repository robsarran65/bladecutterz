import assert from "node:assert/strict";
import test from "node:test";

test("renders production SEO metadata and local business schema", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<title>Orlando Lawn Care &amp; Landscaping \| BladeCutterz Inc\.<\/title>/i);
  assert.match(html, /<meta(?=[^>]*\bname=["']description["'])(?=[^>]*BladeCutterz Inc\.)[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*\bproperty=["']og:image["'])(?=[^>]*og\.png)[^>]*>/i);
  assert.match(html, /"@type":"LandscapingBusiness"/i);
  assert.match(html, /Lake Nona, Orlando, Florida/i);
  assert.match(html, /Winter Springs, Florida/i);
  assert.match(html, /32832/i);
  assert.match(html, /32708/i);
  assert.match(html, /tel:\+14073347247/i);
});
