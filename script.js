document.addEventListener("DOMContentLoaded", () => {
  const bookContainer = document.querySelector(".book-container");
  const createBook = document.querySelector(".createBook");
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const addBtn = document.querySelector(".addBtn");
  const bookForm = document.getElementById("bookForm");
  const overlay = document.getElementById("overlay");
  const cancelCreate = document.querySelector(".cancel");

  cancelCreate.addEventListener("click", () => {
    bookForm.style = "display: none";
    overlay.style = "display: none";
  });

  addBtn.addEventListener("click", () => {
    bookForm.style = "display: block; z-index: 10001";
    overlay.style = "display: block";
  });

  createBook.addEventListener("click", () => {
    if (
      titleInput.value === "" ||
      pagesInput.value === "" ||
      authorInput.value === ""
    ) {
      return;
    } else {
      event.preventDefault();
      const div = document.createElement("div");

      const title = titleInput.value;
      const author = authorInput.value;
      const pages = pagesInput.value;

      div.classList.add("book");

      // Populate the div with form values
      div.innerHTML = `
    <h3>Title: ${title}</h3>
    <p>Author: ${author}</p>
    <p>Pages: ${pages}</p>
  `;

      bookContainer.append(div);
      titleInput.value = "";
      authorInput.value = "";
      pagesInput.value = "";

      bookForm.style = "display: none";
      overlay.style = "display: none";
    }
  });
});
