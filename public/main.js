console.log("我是main.js 2");

getCSS.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "/style.css");
	request.onreadystatechange = () => {
		// 下载完成，但不知道是成功还是失败
		// 成功是2XX，失败是 4XX 5XX
		if (request.readyState === 4) {
			if (request.status === 200) {
				// 创建style标签
				const style = document.createElement("style");
				// 填写style内容
				style.innerHTML = request.response;
				// 插到头里面
				document.head.appendChild(style);
			} else {
				alert("加载CSS失败");
			}
		}
	};
	request.onerror = () => {
		console.log("失败了");
	};

	request.send();
};

getJS.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "/2.js");
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			// 创建script标签
			const script = document.createElement("script");
			// 填写script内容
			script.innerHTML = request.response;
			// 插到body里面
			document.body.appendChild(script);
		}
	};
	request.onerror = () => {
		console.log("失败了");
	};

	request.send();
};

getHTML.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "/3.html");
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			// 创建div
			const div = document.createElement("div");
			// 填写div内容
			div.innerHTML = request.response;

			document.body.appendChild(div);
		}
	};
	request.send();
};

getXML.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "/4.xml");
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			const dom = request.responseXML;
			const text = dom.getElementsByTagName("warning")[0].textContent;
			console.log(text.trim());
		}
	};
	request.send();
};

getJSON.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "/5.json");

	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			const obj = JSON.parse(request.response);
			myName.textContent = obj.name;
			console.log(obj);
		}
	};
	request.send();
};

let n = 1;
getPage.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", `/page${n + 1}`);
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			const array = JSON.parse(request.response);
			array.forEach((item) => {
				let li = document.createElement("li");
				li.textContent = item.id;
				xxx.appendChild(li);
			});
			n += 1;
		}
	};
	request.send();
};
