	document.addEventListener("DOMContentLoaded", function () {
		// 自动生成缩略图
		document.querySelectorAll('.yt-lite').forEach(function(el) {
			const videoId = el.dataset.videoId;
			const thumbUrl = "https://i.ytimg.com/vi/${videoId}/sddefault.jpg";
			el.style.backgroundImage = "url('${thumbUrl}')";
		});
	});

	// 点击加载 iframe
	document.addEventListener("click", function (e) {
		const el = e.target.closest(".yt-lite");
		if (!el) return;

		const videoId = el.dataset.videoId;

		const iframe = document.createElement("iframe");
		iframe.setAttribute("width", "100%");
		iframe.setAttribute("height", "100%");
		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
		iframe.setAttribute("allowfullscreen", "");
		iframe.src = "https://www.youtube.com/embed/${videoId}";

		el.innerHTML = '';
		el.appendChild(iframe);

	});
