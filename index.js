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

  addBtn.addEventListener("click", () => {
    bookForm.style = "display: block; z-index: 10001";
    overlay.style = "display: block";
  });

  cancelCreate.addEventListener("click", () => {
    bookForm.style = "display: none";
    overlay.style = "display: none";
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

      const title = titleInput.value;
      const pages = pagesInput.value;
      const author = authorInput.value;
      const div = document.createElement("div");
      div.classList.add("book");

      div.innerHTML = `
       <p class="headers">${title}</p>
       <p class="desc">
            Author: ${author}
       </p>
        <p class="desc">
            Pages: ${pages}
       </p>
       <div class = edit_btns>
       <button class='delete'>Delete</button>
       <button class=
       </div>`;

      bookContainer.append(div);
      titleInput.value = "";
      pagesInput.value = "";
      authorInput.value = "";

      bookForm.style = "display: none";
      overlay.style = "display: none";

      const delBtn = div.querySelector(".delete");

      delBtn.addEventListener("click", () => {
        div.remove();
      });
    }
  });
});
