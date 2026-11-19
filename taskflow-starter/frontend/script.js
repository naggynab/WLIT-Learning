// ============================================================================
// 1. CONFIGURATION & API ENDPOINT
// ============================================================================
// DAY 1: Uses free public mock API (simulates writes, resets on page refresh)
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// DAY 2: Comment out the line above and uncomment below to connect to your Express server!
// const API_URL = "http://localhost:3000/api/tasks";


// ============================================================================
// 2. APPLICATION STATE (Data stored in browser memory while page is open)
// ============================================================================
let tasks = [];             // Holds our array of task objects fetched from the API
let currentFilter = "all";  // Tracks which filter tab is active: "all", "pending", or "completed"


// ============================================================================
// 3. DOM ELEMENT REFERENCES (Grabbing HTML tags so JS can update them)
// ============================================================================
const taskListEl = document.getElementById("task-list");   // <ul> container for task cards
const taskForm = document.getElementById("task-form");     // <form> for adding new tasks
const titleInput = document.getElementById("task-title");  // Input field for task title
const descInput = document.getElementById("task-desc");    // Input field for task description
const loadingEl = document.getElementById("loading");      // "Loading..." banner
const errorBoxEl = document.getElementById("error-box");   // Red error banner
const taskCountEl = document.getElementById("task-count"); // "6 task(s)" counter text
const filterBtns = document.querySelectorAll(".filter-btn"); // All 3 filter buttons


// ============================================================================
// 4. READ: FETCH ALL TASKS FROM API (HTTP GET)
// ============================================================================
async function fetchTasks() {
  showLoading(true);  // Step 1: Show loading spinner before network request starts
  showError(null);    // Clear any previous error messages

  try {
    // Step 2: Send HTTP GET request with query parameter (?_limit=6)
    const response = await fetch(`${API_URL}?_limit=6`);

    // CRITICAL: fetch() does NOT throw on 404/500 errors, so we check response.ok manually!
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    // Step 3: Parse raw JSON text body into a JavaScript array
    const data = await response.json();

    // Step 4: Normalize each item so every task has a consistent shape (id, title, description, completed)
    tasks = data.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description || "Loaded via Fetch API",
      completed: Boolean(item.completed)
    }));

    // Step 5: Draw the tasks onto the webpage
    renderTasks();
  } catch (err) {
    // Runs if Wi-Fi drops OR if we threw an error above
    showError(err.message);
  } finally {
    // Always runs at the end (success or error) to hide the loading spinner
    showLoading(false);
  }
}


// ============================================================================
// 5. CREATE: ADD A NEW TASK TO API (HTTP POST)
// ============================================================================
async function addTask(e) {
  e.preventDefault(); // Stop the HTML form from refreshing the entire browser page!

  // Read and clean user input values
  const title = titleInput.value.trim();
  const description = descInput.value.trim() || "New task";
  if (!title) return; // Guard clause: do nothing if title is empty

  try {
    // Send HTTP POST request with JSON headers and stringified body
    const response = await fetch(API_URL, {
      method: "POST",                                      // Verb: Create new resource
      headers: { "Content-Type": "application/json" },     // Envelope label: Sending JSON text
      body: JSON.stringify({ title, description, completed: false }) // Pack JS object -> JSON string
    });

    if (!response.ok) throw new Error("Failed to create task");

    // Unpack the newly created task returned by the server (usually includes new server ID)
    const created = await response.json();

    // Add new task to the TOP of our local `tasks` array (.unshift)
    tasks.unshift({
      id: created.id || Date.now(), // Fallback ID if mock API doesn't return a unique one
      title: created.title,
      description,
      completed: false
    });

    taskForm.reset(); // Clear input boxes
    renderTasks();    // Re-draw UI with the new task included
  } catch (err) {
    showError(err.message);
  }
}


// ============================================================================
// 6. UPDATE: TOGGLE TASK COMPLETION (HTTP PATCH)
// ============================================================================
async function toggleTask(id) {
  // Find the matching task object in our local array
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  try {
    // Send HTTP PATCH request to `/api/tasks/:id` (Path parameter targets specific task)
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",                                     // Verb: Partial update (only changing `completed`)
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }) // Flip true -> false or false -> true
    });

    if (!response.ok) throw new Error("Failed to update task");

    // Update local state and re-draw UI (strikethrough + green "Completed" pill)
    task.completed = !task.completed;
    renderTasks();
  } catch (err) {
    showError(err.message);
  }
}


// ============================================================================
// 7. DELETE: REMOVE TASK FROM API (HTTP DELETE)
// ============================================================================
async function deleteTask(id) {
  try {
    // Send HTTP DELETE request to `/api/tasks/:id` (No request body needed)
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Failed to delete task");

    // Remove the deleted task from our local array and re-draw UI
    tasks = tasks.filter((t) => t.id !== id);
    renderTasks();
  } catch (err) {
    showError(err.message);
  }
}


// ============================================================================
// 8. DOM RENDERING: CONVERT `tasks` ARRAY INTO HTML ELEMENTS
// ============================================================================
function renderTasks() {
  taskListEl.innerHTML = ""; // Clear old list before re-drawing

  // Filter tasks locally based on which tab ("all", "pending", "completed") is selected
  const filtered = tasks.filter((t) => {
    if (currentFilter === "pending") return !t.completed;
    if (currentFilter === "completed") return t.completed;
    return true;
  });

  // Update the task counter text in the toolbar
  taskCountEl.textContent = `${filtered.length} task(s)`;

  // Loop through each visible task and build an <li> card
  filtered.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;
    li.innerHTML = `
      <div class="task-info">
        <input type="checkbox" ${task.completed ? "checked" : ""} />
        <div>
          <div class="task-title"><strong>${task.title}</strong></div>
          <div class="task-desc">${task.description}</div>
        </div>
      </div>
      <div style="display:flex; gap:0.5rem; align-items:center;">
        <span class="status-pill ${task.completed ? "done" : "pending"}">
          ${task.completed ? "Completed" : "Pending"}
        </span>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // Attach click listeners to this specific task's checkbox and Delete button
    li.querySelector("input").addEventListener("change", () => toggleTask(task.id));
    li.querySelector(".delete-btn").addEventListener("click", () => deleteTask(task.id));

    taskListEl.appendChild(li);
  });
}


// ============================================================================
// 9. UI HELPER FUNCTIONS & EVENT LISTENERS
// ============================================================================
function showLoading(show) {
  loadingEl.classList.toggle("hidden", !show);
}

function showError(msg) {
  errorBoxEl.classList.toggle("hidden", !msg);
  errorBoxEl.textContent = msg || "";
}

// Switch active filter button styling and re-render list when clicked
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// Listen for form submission to trigger POST request
taskForm.addEventListener("submit", addTask);

// Kick off initial GET request as soon as the page loads!
fetchTasks();