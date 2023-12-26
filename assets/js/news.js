const newsData = [
  {
    id: 1,
    imageUrl: "assets/images/breaking-news-square-1.jpg",
    name: "Persiapkan karier profesionalmu melalui Bangkit Academy 2024",
    className: "img-responsive rounded mr-20 my-15",
    href: "https://grow.google/intl/id_id/bangkit/?tab=machine-learning"
  },
  {
    id: 2,
    imageUrl: "assets/images/breaking-news-square-2.jpg",
    name: "Telah Dibuka! Pendaftaran Dicoding Bootcamp Batch 2",
    className: "img-responsive rounded mr-20 my-15",
    href : "https://www.dicoding.com/bangun-negeri/bootcamp?utm_source=program&utm_medium=organic+social&utm_campaign=bootcamp2_launch_sections_program"
  },
  {
    id: 3,
    imageUrl: "assets/images/breaking-news-square-3.jpg",
    name: "IDCamp 2023, Beasiswa Coding Terbesar untuk Seluruh Warga Indonesia",
    className: "img-responsive rounded mr-20 my-15",
    href: "https://idcamp.ioh.co.id/?utm_source=scholarship&utm_medium=organic+social&utm_campaign=idcamp_23_launch_sections_program"
  },
].map((article) => {
  const columnFour = document.createElement("div");
  const subArticleLink = document.createElement("a");
  const figureTag = document.createElement("figure");
  const imageContent = document.createElement("img");
  const figureCaption = document.createElement("figcaption");

  columnFour.className = "col-4 flex items-center justify-start";

  subArticleLink.href = article.href;
  subArticleLink.className = "no-underline hover:underline";
  subArticleLink.target = "_blank";

  figureTag.className = "flex items-center";

  imageContent.src = article.imageUrl;
  imageContent.className = article.className;
  imageContent.alt = "Content Article";
  imageContent.width = 120;

  figureCaption.className = "text-white text-left w-240";
  figureCaption.innerText = article.name;

  figureTag.append(imageContent, figureCaption);
  subArticleLink.appendChild(figureTag);
  columnFour.appendChild(subArticleLink);

  document.getElementById("sub-content").append(columnFour);
});
