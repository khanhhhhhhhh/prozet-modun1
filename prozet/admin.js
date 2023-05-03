
// Lấy các phần tử HTML cần thiết
const productList = document.getElementById("product-list");
const addProductBtn = document.getElementById("add-product-btn");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productImageInput = document.getElementById("product-image");
const productForm = document.getElementById("product-form");
const closeBtn = document.getElementsByClassName("close")[0];

// Khai báo biến lưu trữ danh sách sản phẩm
let products = [];

// Hàm hiển thị danh sách sản phẩm
function displayProducts() {
  // Xóa hết sản phẩm trên giao diện
  productList.innerHTML = "";

  // Lặp qua danh sách sản phẩm để hiển thị
  products.forEach((product) => {
    // Tạo các phần tử HTML để hiển thị sản phẩm
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
    const productName = document.createElement("h3");
    productName.textContent = product.name;
    const productPrice = document.createElement("p");
    productPrice.textContent = product.price + " đ";
    
    // Thêm các phần tử vào container sản phẩm
    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productList.appendChild(productDiv);
  });
}

// Hàm thêm sản phẩm mới vào danh sách
function addProduct() {
  // Lấy thông tin sản phẩm từ form
  const name = productNameInput.value;
  const price = productPriceInput.value;
  const image = productImageInput.value;

  // Tạo một sản phẩm mới và thêm vào danh sách
  const product = { name, price, image };
  products.push(product);

  // Hiển thị danh sách sản phẩm
  displayProducts();

  // Ẩn modal sau khi thêm sản phẩm thành công
  closeModal();
}

// Hàm mở modal để thêm sản phẩm
function openModal() {
  // Đặt tiêu đề cho modal
  modalTitle.textContent = "Thêm sản phẩm";

  // Hiển thị modal
  modal.style.display = "block";
}

// Hàm đóng modal
function closeModal() {
  // Xóa nội dung của form
  productForm.reset();

  // Ẩn modal
  modal.style.display = "none";
}

// Xử lý sự kiện khi nhấn nút thêm sản phẩm
addProductBtn.addEventListener("click", openModal);

// Xử lý sự kiện khi nhấn nút đóng trong modal
closeBtn.addEventListener("click", closeModal);

// Xử lý sự kiện khi nhấn nút Lưu trong modal
productForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn không gửi form đi khi nhấn nút Lưu
  addProduct(); // Thêm sản phẩm vào danh sách và hiển thị danh sách sản phẩm
});
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.src = product.image;
    productImg.alt = product.name;
    productCard.appendChild(productImg);

    const productName = document.createElement("h3");
    productName.innerText = product.name;
    productCard.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.innerText = product.price;
    productCard.appendChild(productPrice);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "delete-btn");
    deleteBtn.innerText = "Xóa";
    deleteBtn.addEventListener("click", function() {
      deleteProduct(i);
    });
    productCard.appendChild(deleteBtn);

    productList.appendChild(productCard);
  }
}
function deleteProduct(index) {
  products.splice(index, 1);
  displayProducts();
}
