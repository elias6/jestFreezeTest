/**
 * @jest-environment jsdom
 */

describe("something", () => {
	test("does something", () => {
		document.documentElement.innerHTML = [
			"<head></head>",
			"<body>",
			'    <div class="container">',
			'        <button id="foo1" type="button">foo1</button>',
			'        <button id="foo2" type="button">foo2</button>',
			'        <button id="foo3" type="button">foo3</button>',
			'        <button id="foo4" type="button">foo4</button>',
			"    </div>",
			"</body>",
		].join("\n");

		console.log("about to expect");
		expect(document.body).toMatchObject(document.body);
		console.log("done expecting");
	});
});
