let nextDom = document.getElementById('next')
let prevDom = document.getElementById('prev')
let carouselDom = document.querySelector('.carousel')
let SliderDom = carouselDom.querySelector('.carousel .list')
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail')
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item')
let timeDom = document.querySelector('.carousel .time')

thumbnailBorderDom.appendChild(thumbnailItemsDom[0])
let timeRunning = 3000
let timeAutoNext = 27000

nextDom.onclick = function () {
	showSlider('next')
}
prevDom.onclick = function () {
	showSlider('prev')
}
let runTimeOut
let runNextAuto = setTimeout(() => {
	next.click()
}, timeAutoNext)

function showSlider(type) {
	let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item')
	let thumbnailItemsDom = document.querySelectorAll(
		'.carousel .thumbnail .item'
	)
	if (type === 'next') {
		SliderDom.appendChild(SliderItemsDom[0])
		thumbnailBorderDom.appendChild(thumbnailItemsDom[0])
		carouselDom.classList.add('next')
	} else {
		SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1])
		thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1])
		carouselDom.classList.add('prev')
	}
	clearTimeout(runTimeOut)
	runTimeOut = setTimeout(() => {
		carouselDom.classList.remove('next')
		carouselDom.classList.remove('prev')
	}, timeRunning)
	clearTimeout(runNextAuto)
	runNextAuto = setTimeout(() => {
		next.click()
	}, timeAutoNext)
}

document.querySelectorAll('.buttons button:first-child').forEach(button => {
	button.addEventListener('click', function () {
		const item = this.closest('.item')
		const title = item.querySelector('.title').textContent
		const author = item.querySelector('.author').textContent
		const topic = item.querySelector('.topic').textContent
		const des = item.querySelector('.des').textContent
		const imgSrc = item.querySelector('img').src

		localStorage.setItem(
			'storyData',
			JSON.stringify({
				title,
				author,
				topic,
				des,
				imgSrc,
			})
		)
		window.location.href = 'read.html'
	})
})

window.addEventListener('resize', function () {
	const burgerToggle = document.getElementById('burger-toggle')
	const headerList = document.querySelector('.header__list')
	if (window.innerWidth > 768) {
		burgerToggle.checked = false
		headerList.style.left = ''
		headerList.style.right = ''
	}
})
document.querySelectorAll('.filter-list input').forEach(checkbox => {
  checkbox.addEventListener('change', filterStories);
});
function filterStories() {
  const checkedGenres = Array.from(document.querySelectorAll('.filter-list input:checked'))
    .map(el => el.parentElement.textContent.trim());
  
  document.querySelectorAll('.story-card').forEach(card => {
    const cardGenre = card.querySelector('.genre').textContent;
    const shouldShow = checkedGenres.includes('Все жанры') || 
                      checkedGenres.includes(cardGenre);
    
    card.style.display = shouldShow ? 'block' : 'none';
  });
}
const button = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
}

function checkTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

button.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.querySelector('.icon-sun').classList.add('rotate-icon');
    document.querySelector('.icon-moon').classList.add('rotate-icon');

    setTimeout(() => {
        if (newTheme === 'dark') {
            document.querySelector('.icon-sun').style.display = 'none';
            document.querySelector('.icon-moon').style.display = 'block';
        } else {
            document.querySelector('.icon-sun').style.display = 'block';
            document.querySelector('.icon-moon').style.display = 'none';
        }
    }, 2500);
    setTheme(newTheme);
});
checkTheme();

document.querySelectorAll('.filter-list input').forEach(checkbox => {
    checkbox.addEventListener('change', filterStories);
});

document.querySelector('.sort-select').addEventListener('change', function() {
    const sortBy = this.value;
    const grid = document.querySelector('.stories-grid');
    const cards = Array.from(grid.querySelectorAll('.story-card'));
    
    cards.sort((a, b) => {
        if (sortBy === 'По популярности') {
            const viewsA = parseFloat(a.querySelector('.views').textContent.split(':')[1].trim().replace('k', ''));
            const viewsB = parseFloat(b.querySelector('.views').textContent.split(':')[1].trim().replace('k', ''));
            return viewsB - viewsA;
        } else if (sortBy === 'По рейтингу') {
            const ratingA = parseFloat(a.querySelector('.rating').textContent.split(' ')[1]);
            const ratingB = parseFloat(b.querySelector('.rating').textContent.split(' ')[1]);
            return ratingB - ratingA;
        } else if (sortBy === 'По количеству глав') {
            const chaptersA = parseInt(a.querySelector('.chapters').textContent.split(':')[1].trim());
            const chaptersB = parseInt(b.querySelector('.chapters').textContent.split(':')[1].trim());
            return chaptersB - chaptersA;
        } else { // По новизне (по умолчанию)
            return 0;
        }
    });
    grid.innerHTML = '';
    cards.forEach(card => grid.appendChild(card));
});
const ratingSlider = document.querySelector('.rating-slider');
const ratingValue = document.querySelector('.rating-value');

ratingSlider.addEventListener('input', function() {
    const value = parseFloat(this.value);
    ratingValue.textContent = `От ${value} ★`;
    document.querySelectorAll('.story-card').forEach(card => {
        const cardRating = parseFloat(card.querySelector('.rating').textContent.split(' ')[1]);
        card.style.display = cardRating >= value ? 'block' : 'none';
    });
});

document.querySelectorAll('.read-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.story-card');
        const title = card.querySelector('.story-title').textContent;
        const author = card.querySelector('.genre').textContent;
        const imgSrc = card.querySelector('img').src;
        
        localStorage.setItem('storyData', JSON.stringify({
            title,
            author,
            imgSrc
        }));
        window.location.href = 'read.html';
    });
});