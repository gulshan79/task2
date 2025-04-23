// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Enter a valid email.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});

// Add Task to To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (!task) {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

// Add Image to Gallery
function addImage() {
  const url = document.getElementById("imageUrl").value.trim();

  if (!url) {
    alert("Please enter an image URL.");
    return;
  }

  const container = document.createElement("div");
  container.className = "image-container";

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Gallery Image";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => container.remove();

  container.appendChild(img);
  container.appendChild(removeBtn);  // Add button AFTER the image
  document.getElementById("gallery").appendChild(container);

  document.getElementById("imageUrl").value = "";
}
