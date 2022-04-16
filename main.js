const handler = (element, cl) => {
	var elementChildren = element.querySelectorAll('.Element-child')
	console.log('clickeeed element is: ', element)
	element.style.opacity = element.style.opacity == 1 ? 0.5 : 1
	//  element.addEventListener('click', function handleClick(event) {
	//     // 👇️ "parent"
	//     // console.log(event.target.style)
	//     // event.target.parentElement.style.opacity= event.target.parentElement.style.opacity == 1 ? 0.5 : 1;

	//  });
	//  document.getElementsByName('box-2')[0].style.opacity=1
}
