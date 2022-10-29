const categories = { jekyll: [{ url: `https://bishoyatif.com/posts/communication-for-engineers/`, date: `29 Oct 2022`, title: `Communication Tips For Engineers`},{ url: `https://bishoyatif.com/posts/%D9%83%D9%8A%D9%81%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D8%A7%D9%84%D9%81%D8%B9%D8%A7%D9%84-%D9%83%D9%85%D8%A8%D8%B1%D9%85%D8%AC/`, date: `04 Nov 2021`, title: `نصائح للتواصل الأمثل كمبرمج`},{ url: `https://bishoyatif.com/posts/jekyll-markdown/`, date: `04 Nov 2021`, title: `Jekyll Markdown`},], }

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};