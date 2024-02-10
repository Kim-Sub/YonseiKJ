1.
/////　메인 섹션 1스크롤 = 100vh 이동

   let currentSection = 1;
   // 스크롤 이벤트 중복 방지를 위한 플래그 변수
   let isScrolling = false;
   function handleWheel(event) {
    // 이벤트 중복 방지
    if (isScrolling) return;
    // 휠의 방향에 따라 현재 섹션을 증가 또는 감소
    if (event.deltaY > 0) {
        currentSection++;
    } else {
        currentSection--;
    }
    // 현재 섹션이 1보다 작으면 1로 설정
    if (currentSection < 1) {
        currentSection = 1;
    }
    // 현재 섹션이 총 섹션 수보다 크면 총 섹션 수로 설정
    const totalSections = document.querySelectorAll('section').length;
    if (currentSection > totalSections) {
        currentSection = totalSections;
    }
    // 이벤트 중복 방지를 위해 플래그 설정
    isScrolling = true;
    // 현재 섹션의 위치로 스크롤
    const targetSection = document.getElementById(`index${currentSection}`);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    // 이벤트 전파 중지
    event.preventDefault();
    // 스크롤 이벤트 중복 방지 플래그 해제 (500ms 이후)
    setTimeout(() => {
        isScrolling = false;
    }, 500);
   }
   document.addEventListener('wheel', handleWheel);
/////


2.
/////　메인 섹션 이동마다 페이지네이션 스타일 변경

document.addEventListener('DOMContentLoaded', function () {
    const paginationLinks = document.querySelectorAll('#Pagination a');
    const sections = document.querySelectorAll('section');
    let options = {threshold: .5};
    let observer = new IntersectionObserver(handleIntersection, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          setActiveLink(targetId);
        }
      });
    }

    function setActiveLink(targetId) {
      paginationLinks.forEach(link => {
        const linkTargetId = link.getAttribute('href').substring(1);
        if (linkTargetId === targetId) {
          link.classList.add('Pagination-Active');
        } else {
          link.classList.remove('Pagination-Active');
        }
      });
    }
  });
/////






3.
///// y스크롤 100vh 이상에서 position : fixed
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("Nav-Bar");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= window.innerHeight) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
});
/////

