function openModal(imgSrc, captionText) {
	const modal = document.getElementById("modal");
	const modalImg = document.getElementById("modal-img");
	const caption = document.getElementById("modal-caption");
  
	modal.style.display = "flex";
	modalImg.src = imgSrc;
	caption.textContent = captionText;
  }
  
  function closeModal() {
	document.getElementById("modal").style.display = "none";
  }