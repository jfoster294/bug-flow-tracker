const jobForm = document.getElementById("jobForm");
const companyInput = document.getElementById("companyInput");
const titleInput = document.getElementById("titleInput");
const linkInput = document.getElementById("linkInput");
const statusInput = document.getElementById("statusInput");
const dateInput = document.getElementById("dateInput");
const notesInput = document.getElementById("notesInput");

const applicationsList = document.getElementById("applicationsList");
const emptyState = document.getElementById("emptyState");
const listMessage = document.getElementById("listMessage");

const searchInput = document.getElementById("searchInput");
const filterStatus = document.getElementById("filterStatus");
const clearAllButton = document.getElementById("clearAllButton");
const themeSelect = document.getElementById("themeSelect");

const totalCount = document.getElementById("totalCount");
const appliedCount = document.getElementById("appliedCount");
const interviewCount = document.getElementById("interviewCount");
const offerCount = document.getElementById("offerCount");

let applications = JSON.parse(localStorage.getItem("remoteJobApplications")) || [];

const themeClasses = [
  "theme-clean",
  "theme-terminal",
  "theme-focus",
  "theme-corporate",
  "theme-warm"
];

themeSelect.addEventListener("change", function () {
  applyTheme(themeSelect.value);
});

jobForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const company = companyInput.value.trim();
  const title = titleInput.value.trim();
  const link = linkInput.value.trim();
  const status = statusInput.value;
  const date = dateInput.value;
  const notes = notesInput.value.trim();

  if (company === "" || title === "") {
    return;
  }

  const application = {
    id: Date.now(),
    company: company,
    title: title,
    link: link,
    status: status,
    date: date,
    notes: notes
  };

  applications.unshift(application);
  saveApplications();
  renderApplications();
  jobForm.reset();
  statusInput.value = "Saved";
});

searchInput.addEventListener("input", function () {
  renderApplications();
});

filterStatus.addEventListener("change", function () {
  renderApplications();
});

clearAllButton.addEventListener("click", function () {
  if (applications.length === 0) {
    return;
  }

  const confirmClear = confirm("Clear all saved job applications?");

  if (confirmClear) {
    applications = [];
    saveApplications();
    renderApplications();
  }
});

applicationsList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    const id = Number(event.target.dataset.id);

    applications = applications.filter(function (application) {
      return application.id !== id;
    });

    saveApplications();
    renderApplications();
  }
});

applicationsList.addEventListener("change", function (event) {
  if (event.target.classList.contains("status-select")) {
    const id = Number(event.target.dataset.id);
    const newStatus = event.target.value;

    applications = applications.map(function (application) {
      if (application.id === id) {
        return {
          ...application,
          status: newStatus
        };
      }

      return application;
    });

    saveApplications();
    renderApplications();
  }
});

function applyTheme(theme) {
  document.body.classList.remove(...themeClasses);
  document.body.classList.add(`theme-${theme}`);
  localStorage.setItem("selectedJobTrackerTheme", theme);
}

function saveApplications() {
  localStorage.setItem("remoteJobApplications", JSON.stringify(applications));
}

function renderApplications() {
  applicationsList.innerHTML = "";

  const searchText = searchInput.value.toLowerCase().trim();
  const selectedStatus = filterStatus.value;

  const filteredApplications = applications.filter(function (application) {
    const matchesSearch =
      application.company.toLowerCase().includes(searchText) ||
      application.title.toLowerCase().includes(searchText);

    const matchesStatus =
      selectedStatus === "All" || application.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  updateStats();

  listMessage.textContent = `${filteredApplications.length} showing`;

  if (filteredApplications.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  filteredApplications.forEach(function (application) {
    const card = document.createElement("article");
    card.className = "application-card";

    const safeLink = application.link || "";

    card.innerHTML = `
      <div class="application-top">
        <div>
          <h3>${application.title}</h3>
          <p class="company">${application.company}</p>
        </div>

        <span class="status-badge">${application.status}</span>
      </div>

      <div class="application-meta">
        <p><strong>Date:</strong> ${formatDate(application.date)}</p>
        <p><strong>Notes:</strong> ${application.notes || "No notes added"}</p>
      </div>

      <div class="application-actions">
        <select class="status-select" data-id="${application.id}">
          <option value="Saved" ${application.status === "Saved" ? "selected" : ""}>Saved</option>
          <option value="Applied" ${application.status === "Applied" ? "selected" : ""}>Applied</option>
          <option value="Interview" ${application.status === "Interview" ? "selected" : ""}>Interview</option>
          <option value="Offer" ${application.status === "Offer" ? "selected" : ""}>Offer</option>
          <option value="Rejected" ${application.status === "Rejected" ? "selected" : ""}>Rejected</option>
        </select>

        ${
          safeLink
            ? `<a class="visit-button" href="${safeLink}" target="_blank">Open Job</a>`
            : `<span></span>`
        }

        <button class="delete-button" data-id="${application.id}" type="button">Delete</button>
      </div>
    `;

    applicationsList.appendChild(card);
  });
}

function updateStats() {
  totalCount.textContent = applications.length;

  appliedCount.textContent = applications.filter(function (application) {
    return application.status === "Applied";
  }).length;

  interviewCount.textContent = applications.filter(function (application) {
    return application.status === "Interview";
  }).length;

  offerCount.textContent = applications.filter(function (application) {
    return application.status === "Offer";
  }).length;
}

function formatDate(dateString) {
  if (!dateString) {
    return "Not added";
  }

  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

const savedTheme = localStorage.getItem("selectedJobTrackerTheme") || "clean";
themeSelect.value = savedTheme;
applyTheme(savedTheme);

renderApplications();
