1.
/////　페이지 열리고 3초 후 .index1-Box 보이게

        setTimeout(() => {
            const index1Box = document.querySelector('.index1-Box');
            index1Box.style.opacity = 1;
        }, 3000);
/////




2.
/////　NumberCustomers 내원 고객수

   const NumberCustomers = document.getElementById('NumberCustomers');
   const targetNumber = 5000000;
   let currentNumber = 0;
   const animationDuration = 7000; 
   const startTime = performance.now();

   function updateNumber() {
       const currentTime = performance.now();
       const elapsed = currentTime - startTime;

       if (elapsed < animationDuration) {
           const progress = elapsed / animationDuration;
           currentNumber = Math.round(progress * targetNumber);
           NumberCustomers.textContent = currentNumber.toLocaleString(); // 단위수 표시
       } else {
           currentNumber = targetNumber;
           NumberCustomers.textContent = currentNumber.toLocaleString();
           clearInterval(animationInterval);
       }
   }
   const animationInterval = setInterval(updateNumber, 16); // 60fps
/////




3.
///// 마우스 클릭시 Counting-Box 안보이게 + index1-Content 보이게

let clicked = false;

setTimeout(function () {
  document.addEventListener('click', function () {
    if (!clicked) {
      const countingBox = document.querySelector('.Counting-Box');
      countingBox.style.opacity = '0';
      const index1Content = document.querySelector('.index1-Content');
      const index1ContentH1 = document.querySelector('.index1-Content h1');
      index1Content.style.opacity = '1';
      index1ContentH1.classList.add('changeSpacing');
      clicked = true;
    }
  });
}, 5000); /* 딜레이 5초 */
/////



4.
///// index1-PhotoBox > img 클릭시 div 보이게 (모달형식) + 좌우 버튼

let currentIndex = 0;
let totalItems;

// li 클릭할 때마다 모달 표시
document.querySelectorAll('.clickable-img').forEach((img, index) => {
    img.addEventListener('click', () => {
        showModal(index);
    });
});

// 모달 닫기 버튼
document.getElementById('close-btn').addEventListener('click', () => {
    hideModal();
});

// 좌우버튼 핸들러
document.querySelector('.PhotoBox-LB').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    fetchDataAndDisplay(currentIndex);
});
document.querySelector('.PhotoBox-RB').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    fetchDataAndDisplay(currentIndex);
});

// 데이터 가져오기 
function fetchDataAndDisplay(index) {
    fetch('./data/data-index1.json')
        .then(response => response.json())
        .then(data => {
            totalItems = data.length; 
            const item = data[index];
            if (item) {
                document.getElementById('map-H3').textContent = item.title;
                document.getElementById('map-Img').src = item.src;
                document.getElementById('map-P').textContent = item.description;
            }
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

// 모달 열기
function showModal(index) {
    const modal = document.getElementById('index1-PhotoBox-Modal');
    modal.style.left = '30%';

    // 데이터 가져와 모달에 표시
    fetchDataAndDisplay(index);
}

// 모달 닫기
function hideModal() {
    const modal = document.getElementById('index1-PhotoBox-Modal');
    modal.style.left = '130%';
}


/////

