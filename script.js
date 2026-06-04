const STORAGE_KEY = "bugflowOsTickets";
const PERSONNEL_STORAGE_KEY = "bugflowOsPersonnel";
const ACTIVITY_STORAGE_KEY = "bugflowOsActivities";
const SESSION_STORAGE_KEY = "bugflowOsSession";

const demoAccounts = {
  requester: {
    name: "Jordan Miles",
    role: "requester",
    roleLabel: "User",
    title: "Employee Requester",
    department: "Operations",
    initials: "JM"
  },
  staff: {
    name: "Maya Patel",
    role: "staff",
    roleLabel: "IT Staff",
    title: "IT Technician",
    department: "IT",
    initials: "MP"
  },
  admin: {
    name: "Joel Foster",
    role: "admin",
    roleLabel: "Admin",
    title: "Super Admin",
    department: "IT",
    initials: "JF"
  }
};

const starterPersonnel = [
  { id: "P-1001", name: "Joel Foster", role: "Super Admin", initials: "JF", status: "Online" },
  { id: "P-1002", name: "Maya Patel", role: "IT Technician", initials: "MP", status: "Online" },
  { id: "P-1003", name: "Alex Rivera", role: "Support Engineer", initials: "AR", status: "Online" },
  { id: "P-1004", name: "Sophia Clark", role: "Help Desk Analyst", initials: "SC", status: "Online" },
  { id: "P-1005", name: "Daniel Walker", role: "IT Technician", initials: "DW", status: "Online" }
];

const starterTickets = [
  {
    id: "TKT-1024",
    title: "Password reset required",
    requester: "Priya Patel",
    submittedBy: "Priya Patel",
    department: "HR",
    category: "Account Access",
    priority: "High",
    status: "Open",
    assignedTo: "Unassigned",
    description: "User cannot access their account and needs a password reset.",
    createdAt: "May 19, 2026 09:15 AM",
    updatedAt: "May 19, 2026 09:45 AM",
    notes: [],
    timeline: [
      { text: "Ticket created by Priya Patel", at: "May 19, 2026 09:15 AM" },
      { text: "Marked as High priority", at: "May 19, 2026 09:45 AM" }
    ]
  },
  {
    id: "TKT-1023",
    title: "Office printer is offline",
    requester: "Michael Chen",
    submittedBy: "Michael Chen",
    department: "Operations",
    category: "Printer",
    priority: "Medium",
    status: "Open",
    assignedTo: "Alex Rivera",
    description: "Main office printer is showing offline for multiple users.",
    createdAt: "May 19, 2026 08:50 AM",
    updatedAt: "May 19, 2026 09:10 AM",
    notes: [],
    timeline: [
      { text: "Ticket created by Michael Chen", at: "May 19, 2026 08:50 AM" },
      { text: "Assigned to Alex Rivera", at: "May 19, 2026 09:10 AM" }
    ]
  },
  {
    id: "TKT-1022",
    title: "VPN not connecting from home",
    requester: "Sarah Johnson",
    submittedBy: "Sarah Johnson",
    department: "Engineering",
    category: "Network",
    priority: "High",
    status: "In Progress",
    assignedTo: "Maya Patel",
    description: "VPN disconnects immediately after login attempt.",
    createdAt: "May 19, 2026 08:20 AM",
    updatedAt: "May 19, 2026 09:02 AM",
    notes: [
      {
        author: "Maya Patel",
        role: "IT Staff",
        text: "Checking VPN profile and network permissions.",
        createdAt: "May 19, 2026 09:02 AM"
      }
    ],
    timeline: [
      { text: "Ticket created by Sarah Johnson", at: "May 19, 2026 08:20 AM" },
      { text: "Assigned to Maya Patel", at: "May 19, 2026 09:00 AM" },
      { text: "Moved to In Progress", at: "May 19, 2026 09:02 AM" }
    ]
  },
  {
    id: "TKT-1021",
    title: "New laptop setup for employee",
    requester: "David Lee",
    submittedBy: "David Lee",
    department: "IT",
    category: "Hardware",
    priority: "Low",
    status: "In Progress",
    assignedTo: "Joel Foster",
    description: "Prepare laptop with required apps for new hire.",
    createdAt: "May 19, 2026 07:45 AM",
    updatedAt: "May 19, 2026 08:40 AM",
    notes: [],
    timeline: [
      { text: "Ticket created by David Lee", at: "May 19, 2026 07:45 AM" },
      { text: "Assigned to Joel Foster", at: "May 19, 2026 08:40 AM" }
    ]
  },
  {
    id: "TKT-1020",
    title: "Install Microsoft Office",
    requester: "Emily Davis",
    submittedBy: "Emily Davis",
    department: "Marketing",
    category: "Software",
    priority: "Medium",
    status: "Open",
    assignedTo: "Unassigned",
    description: "User needs Microsoft Office installed on work laptop.",
    createdAt: "May 19, 2026 07:30 AM",
    updatedAt: "May 19, 2026 07:30 AM",
    notes: [],
    timeline: [
      { text: "Ticket created by Emily Davis", at: "May 19, 2026 07:30 AM" }
    ]
  },
  {
    id: "TKT-1019",
    title: "Email not syncing in Outlook",
    requester: "James Wilson",
    submittedBy: "James Wilson",
    department: "Finance",
    category: "Email",
    priority: "High",
    status: "In Progress",
    assignedTo: "Alex Rivera",
    description: "Outlook inbox stopped syncing this morning.",
    createdAt: "May 19, 2026 06:50 AM",
    updatedAt: "May 19, 2026 08:15 AM",
    notes: [],
    timeline: [
      { text: "Ticket created by James Wilson", at: "May 19, 2026 06:50 AM" },
      { text: "Assigned to Alex Rivera", at: "May 19, 2026 08:15 AM" }
    ]
  },
  {
    id: "TKT-1018",
    title: "Monitor flickering issue",
    requester: "Lisa Brown",
    submittedBy: "Lisa Brown",
    department: "Design",
    category: "Hardware",
    priority: "Low",
    status: "Open",
    assignedTo: "Maya Patel",
    description: "External monitor flickers when connected through dock.",
    createdAt: "May 18, 2026 05:20 PM",
    updatedAt: "May 18, 2026 05:45 PM",
    notes: [],
    timeline: [
      { text: "Ticket created by Lisa Brown", at: "May 18, 2026 05:20 PM" },
      { text: "Assigned to Maya Patel", at: "May 18, 2026 05:45 PM" }
    ]
  },
  {
    id: "TKT-1017",
    title: "Account locked out after multiple attempts",
    requester: "Robert Taylor",
    submittedBy: "Robert Taylor",
    department: "Sales",
    category: "Account Access",
    priority: "High",
    status: "Open",
    assignedTo: "Unassigned",
    description: "Account locked after failed login attempts.",
    createdAt: "May 18, 2026 04:10 PM",
    updatedAt: "May 18, 2026 04:10 PM",
    notes: [],
    timeline: [
      { text: "Ticket created by Robert Taylor", at: "May 18, 2026 04:10 PM" }
    ]
  },
  {
    id: "TKT-1016",
    title: "Cannot access shared drive",
    requester: "Jordan Miles",
    submittedBy: "Jordan Miles",
    department: "Operations",
    category: "Account Access",
    priority: "Medium",
    status: "Open",
    assignedTo: "Unassigned",
    description: "The shared operations drive is not appearing on the workstation.",
    createdAt: "May 18, 2026 03:20 PM",
    updatedAt: "May 18, 2026 03:20 PM",
    notes: [],
    timeline: [
      { text: "Ticket created by Jordan Miles", at: "May 18, 2026 03:20 PM" }
    ]
  }
];

const starterActivities = [
  "TKT-1022 status changed to In Progress",
  "TKT-1024 created by Priya Patel",
  "TKT-1019 assigned to Alex Rivera",
  "TKT-1021 assigned to Joel Foster"
];

let tickets = loadTickets();
let personnel = loadPersonnel();
let activities = loadActivities();
let currentUser = loadSession();
let currentView = currentUser ? getDefaultView(currentUser.role) : "dashboard";
let activeTicketId = null;

const app = document.querySelector(".app");
const navMenu = document.querySelector(".nav-menu");

const searchInput = document.getElementById("searchInput");
const priorityFilter = document.getElementById("priorityFilter");
const statusFilter = document.getElementById("statusFilter");
const ticketTableBody = document.getElementById("ticketTableBody");
const ticketCountText = document.getElementById("ticketCountText");
const ticketsTitle = document.getElementById("ticketsTitle");

const totalTickets = document.getElementById("totalTickets");
const openTickets = document.getElementById("openTickets");
const criticalTickets = document.getElementById("criticalTickets");
const progressTickets = document.getElementById("progressTickets");
const resolvedTickets = document.getElementById("resolvedTickets");

const teamList = document.getElementById("teamList");
const unassignedList = document.getElementById("unassignedList");
const unassignedCount = document.getElementById("unassignedCount");
const activityList = document.getElementById("activityList");

const submitSection = document.getElementById("submitSection");
const ticketForm = document.getElementById("ticketForm");
const newTicketButton = document.getElementById("newTicketButton");
const clearFormButton = document.getElementById("clearFormButton");
const resetButton = document.getElementById("resetButton");
const toast = document.getElementById("toast");

const statsGrid = document.querySelector(".stats-grid");
const dashboardGrid = document.querySelector(".dashboard-grid");
const rightColumn = document.querySelector(".right-column");
const panelActions = document.querySelector(".panel-actions");
const helperText = document.querySelector(".helper-text");
const topbarEyebrow = document.querySelector(".topbar .eyebrow");
const topbarTitle = document.querySelector(".topbar h2");
const teamPillSmall = document.querySelector(".team-pill small");
const visibilityCard = document.querySelector(".visibility-card");

safeStart();

function safeStart() {
  try {
    injectExtraStyles();
    ensureLoginScreen();
    ensureAdminNavButton();
    ensureAdminSection();
    ensureTicketModal();
    ensureRoleControls();
    setupEventListeners();

    if (!currentUser || !demoAccounts[currentUser.role]) {
      currentUser = null;
      localStorage.removeItem(SESSION_STORAGE_KEY);
      showLogin();
      return;
    }

    showApp();
    renderApp();
  } catch (error) {
    console.error("BugFlow OS failed to start:", error);
    forceRecoveryScreen();
  }
}

function setupEventListeners() {
  document.addEventListener("click", (event) => {
    const loginButton = event.target.closest("[data-login-role]");
    const navButton = event.target.closest(".nav-link");
    const ticketButton = event.target.closest("#ticketTableBody button");
    const quickButton = event.target.closest(".quick-button");
    const removePersonnelButton = event.target.closest("[data-remove-personnel]");

    if (loginButton) {
      loginAs(loginButton.dataset.loginRole);
      return;
    }

    if (navButton && navButton.dataset.view) {
      changeView(navButton.dataset.view);
      return;
    }

    if (ticketButton) {
      handleTicketAction(ticketButton);
      return;
    }

    if (quickButton) {
      loadQuickAction(quickButton.dataset.quick);
      return;
    }

    if (event.target.closest("#newTicketButton")) {
      changeView("submit");
      focusField("titleInput");
      return;
    }

    if (event.target.closest("#clearFormButton")) {
      if (ticketForm) {
        ticketForm.reset();
      }

      prepareFormForRole();
      showToast("Ticket form cleared.");
      return;
    }

    if (event.target.closest("#resetButton")) {
      resetDemo();
      return;
    }

    if (event.target.closest("#logoutButton")) {
      logout();
      return;
    }

    if (event.target.closest("#closeTicketModal")) {
      closeTicketModal();
      return;
    }

    if (event.target.closest("#addTicketNoteButton")) {
      addTicketNote();
      return;
    }

    if (event.target.closest("#adminBackButton")) {
      changeView("dashboard");
      return;
    }

    if (removePersonnelButton) {
      removePersonnel(removePersonnelButton.dataset.removePersonnel);
      return;
    }

    if (event.target.id === "ticketModal") {
      closeTicketModal();
    }
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id === "ticketForm") {
      event.preventDefault();
      submitTicketForm();
    }

    if (event.target.id === "addPersonnelForm") {
      event.preventDefault();

      const nameInput = document.getElementById("personnelNameInput");
      const roleInput = document.getElementById("personnelRoleInput");

      addPersonnel(nameInput.value.trim(), roleInput.value);

      nameInput.value = "";
      roleInput.value = "";
    }
  });

  document.addEventListener("change", (event) => {
    const assignSelect = event.target.closest(".assign-select");

    if (assignSelect) {
      assignTicketTo(assignSelect.dataset.id, assignSelect.value);
      return;
    }

    if (event.target.id === "priorityFilter" || event.target.id === "statusFilter") {
      renderTickets();
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.id === "searchInput") {
      renderTickets();
    }
  });
}

function changeView(view) {
  if (!canAccessView(view)) {
    showToast("That view is not available for this login role.");
    return;
  }

  currentView = view;
  renderApp();

  if (view === "submit") {
    focusField("titleInput");
  }
}

function renderApp() {
  if (!currentUser) {
    showLogin();
    return;
  }

  if (!canAccessView(currentView)) {
    currentView = getDefaultView(currentUser.role);
  }

  renderRoleText();
  renderRoleNavigation();
  renderLayout();
  renderStats();
  renderTickets();
  renderTeam();
  renderUnassigned();
  renderActivities();
  renderAdminPanel();
  prepareFormForRole();
  updateRoleControls();
}

function renderLayout() {
  const isSubmitView = currentView === "submit";
  const isAdminView = currentView === "admin";

  safeDisplay(statsGrid, isSubmitView || isAdminView ? "none" : "grid");
  safeDisplay(dashboardGrid, isSubmitView || isAdminView ? "none" : "grid");
  safeDisplay(submitSection, isSubmitView ? "block" : "none");
  safeDisplay(document.getElementById("adminSection"), isAdminView ? "block" : "none");
  safeDisplay(rightColumn, currentUser.role === "requester" ? "none" : "grid");

  if (resetButton) {
    resetButton.style.display = currentUser.role === "admin" ? "inline-flex" : "none";
  }

  if (panelActions) {
    panelActions.style.display = "flex";
  }

  if (searchInput) {
    searchInput.placeholder =
      currentUser.role === "requester"
        ? "Search your tickets..."
        : "Search tickets, users, departments...";
  }
}

function renderRoleText() {
  const roleText = {
    requester: {
      eyebrow: "User Portal",
      title: "Submit And Track IT Tickets",
      helper: "You are viewing the requester portal. Users can submit tickets, track their own tickets, and add notes for IT."
    },
    staff: {
      eyebrow: "IT Staff Portal",
      title: "IT Service Desk",
      helper: "IT staff can view the shared queue, claim tickets, update statuses, and add technician notes."
    },
    admin: {
      eyebrow: "Admin Command Center",
      title: "BugFlow OS Admin",
      helper: "Admins can view every ticket, assign work, manage personnel, review workload, and control demo data."
    }
  };

  const active = roleText[currentUser.role];

  safeText(topbarEyebrow, active.eyebrow);
  safeText(topbarTitle, active.title);
  safeText(helperText, active.helper);

  if (teamPillSmall) {
    teamPillSmall.textContent = `${personnel.length} members online`;
  }

  if (newTicketButton) {
    newTicketButton.textContent = currentUser.role === "requester" ? "＋ Submit Ticket" : "＋ New Ticket";
  }

  if (!visibilityCard) {
    return;
  }

  if (currentUser.role === "requester") {
    visibilityCard.innerHTML = `
      <strong>User Portal</strong>
      <span>SUBMIT & TRACK</span>
      <p>You only see tickets submitted under this user login.</p>
    `;
  }

  if (currentUser.role === "staff") {
    visibilityCard.innerHTML = `
      <strong>IT Staff View</strong>
      <span>QUEUE ACCESS</span>
      <p>Staff can claim work, update tickets, and resolve issues.</p>
    `;
  }

  if (currentUser.role === "admin") {
    visibilityCard.innerHTML = `
      <strong>Admin Access</strong>
      <span>FULL CONTROL</span>
      <p>Admins can assign tickets and manage IT personnel.</p>
    `;
  }
}

function renderRoleNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const view = link.dataset.view;
    link.style.display = canAccessView(view) ? "flex" : "none";
    link.classList.toggle("active", view === currentView);
  });
}

function renderStats() {
  const visibleTickets = getVisibleTicketsForRole();

  safeText(totalTickets, visibleTickets.length);
  safeText(openTickets, visibleTickets.filter((ticket) => ticket.status === "Open").length);
  safeText(criticalTickets, visibleTickets.filter((ticket) => ticket.priority === "High").length);
  safeText(progressTickets, visibleTickets.filter((ticket) => ticket.status === "In Progress").length);
  safeText(resolvedTickets, visibleTickets.filter((ticket) => ticket.status === "Resolved").length);
}

function renderTickets() {
  if (!ticketTableBody) {
    return;
  }

  const filteredTickets = getFilteredTickets();

  ticketTableBody.innerHTML = "";
  safeText(ticketsTitle, getViewTitle());

  if (filteredTickets.length === 0) {
    ticketTableBody.innerHTML = `
      <tr>
        <td colspan="9">
          <div class="empty-row">No tickets match your current view or filters.</div>
        </td>
      </tr>
    `;

    safeText(ticketCountText, "Showing 0 tickets");
    return;
  }

  filteredTickets.forEach((ticket) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><span class="ticket-id">${escapeHTML(ticket.id)}</span></td>

      <td class="ticket-title">
        <strong>${escapeHTML(ticket.title)}</strong>
        <small>${escapeHTML(ticket.description)}</small>
      </td>

      <td>${escapeHTML(ticket.requester)}</td>

      <td>
        <span class="badge ${getPriorityClass(ticket.priority)}">
          ${escapeHTML(ticket.priority)}
        </span>
      </td>

      <td>
        <span class="badge ${getStatusClass(ticket.status)}">
          ${escapeHTML(ticket.status)}
        </span>
      </td>

      <td>${renderAssignedCell(ticket)}</td>
      <td>${escapeHTML(ticket.department)}</td>
      <td>${escapeHTML(ticket.updatedAt)}</td>

      <td>
        <div class="action-row">
          ${renderTicketActions(ticket)}
        </div>
      </td>
    `;

    ticketTableBody.appendChild(row);
  });

  safeText(ticketCountText, `Showing ${filteredTickets.length} of ${getVisibleTicketsForRole().length} visible tickets`);
}

function renderAssignedCell(ticket) {
  if (currentUser.role !== "admin") {
    return escapeHTML(ticket.assignedTo);
  }

  const options = ["Unassigned", ...personnel.map((member) => member.name)];

  return `
    <select class="table-select assign-select" data-id="${escapeHTML(ticket.id)}">
      ${options
        .map((name) => {
          const selected = name === ticket.assignedTo ? "selected" : "";
          return `<option value="${escapeHTML(name)}" ${selected}>${escapeHTML(name)}</option>`;
        })
        .join("")}
    </select>
  `;
}

function renderTicketActions(ticket) {
  const actions = [
    `<button class="icon-button" data-action="view" data-id="${escapeHTML(ticket.id)}" title="View Details">👁</button>`
  ];

  if (currentUser.role === "requester") {
    if (ticket.status === "Open") {
      actions.push(`<button class="icon-button" data-action="cancel" data-id="${escapeHTML(ticket.id)}" title="Cancel Ticket">✕</button>`);
    }

    return actions.join("");
  }

  if (currentUser.role === "staff") {
    if (ticket.assignedTo === "Unassigned") {
      actions.push(`<button class="icon-button" data-action="claim" data-id="${escapeHTML(ticket.id)}" title="Claim Ticket">👤</button>`);
    }

    if (ticket.status !== "In Progress" && ticket.status !== "Resolved") {
      actions.push(`<button class="icon-button" data-action="progress" data-id="${escapeHTML(ticket.id)}" title="Move to In Progress">↻</button>`);
    }

    if (ticket.status !== "Resolved") {
      actions.push(`<button class="icon-button" data-action="resolve" data-id="${escapeHTML(ticket.id)}" title="Resolve Ticket">✓</button>`);
    }

    return actions.join("");
  }

  if (currentUser.role === "admin") {
    if (ticket.status !== "In Progress" && ticket.status !== "Resolved") {
      actions.push(`<button class="icon-button" data-action="progress" data-id="${escapeHTML(ticket.id)}" title="Move to In Progress">↻</button>`);
    }

    if (ticket.status !== "Resolved") {
      actions.push(`<button class="icon-button" data-action="resolve" data-id="${escapeHTML(ticket.id)}" title="Resolve Ticket">✓</button>`);
    }

    actions.push(`<button class="icon-button" data-action="delete" data-id="${escapeHTML(ticket.id)}" title="Delete Ticket">🗑</button>`);
  }

  return actions.join("");
}

function renderTeam() {
  if (!teamList) {
    return;
  }

  teamList.innerHTML = "";

  personnel.forEach((member) => {
    const item = document.createElement("div");
    item.className = "team-member";

    item.innerHTML = `
      <div class="avatar">${escapeHTML(member.initials)}</div>
      <div>
        <strong>${escapeHTML(member.name)}</strong>
        <small>${escapeHTML(member.role)} • ${escapeHTML(member.status)}</small>
      </div>
    `;

    teamList.appendChild(item);
  });
}

function renderUnassigned() {
  if (!unassignedList || !unassignedCount) {
    return;
  }

  const unassignedTickets = tickets.filter((ticket) => ticket.assignedTo === "Unassigned");

  unassignedCount.textContent = unassignedTickets.length;
  unassignedList.innerHTML = "";

  unassignedTickets.slice(0, 4).forEach((ticket) => {
    const item = document.createElement("div");
    item.className = "mini-item";

    item.innerHTML = `
      <div class="avatar">!</div>
      <div>
        <strong>${escapeHTML(ticket.title)}</strong>
        <small>${escapeHTML(ticket.department)} • ${escapeHTML(ticket.priority)} Priority</small>
      </div>
    `;

    unassignedList.appendChild(item);
  });

  if (unassignedTickets.length === 0) {
    unassignedList.innerHTML = `
      <div class="mini-item">
        <div class="avatar">✓</div>
        <div>
          <strong>No unassigned tickets</strong>
          <small>The team queue is clear.</small>
        </div>
      </div>
    `;
  }
}
function renderActivities() {
  if (!activityList) {
    return;
  }

  activityList.innerHTML = "";

  activities.slice(0, 6).forEach((activity, index) => {
    const item = document.createElement("div");
    item.className = "activity-item";

    item.innerHTML = `
      <div class="avatar">${index + 1}</div>
      <div>
        <strong>${escapeHTML(activity)}</strong>
        <small>${index + 2}m ago</small>
      </div>
    `;

    activityList.appendChild(item);
  });
}

function renderAdminPanel() {
  const adminSection = document.getElementById("adminSection");

  if (!adminSection || !currentUser || currentUser.role !== "admin") {
    return;
  }

  const workload = personnel.map((member) => {
    const assigned = tickets.filter((ticket) => ticket.assignedTo === member.name && ticket.status !== "Resolved").length;
    const resolved = tickets.filter((ticket) => ticket.assignedTo === member.name && ticket.status === "Resolved").length;

    return { ...member, assigned, resolved };
  });

  adminSection.innerHTML = `
    <div class="submit-header">
      <div>
        <p class="eyebrow">Admin Tools</p>
        <h3>Manage IT Personnel</h3>
        <p>Add or remove IT team members, review workload, and assign tickets from the main dashboard.</p>
      </div>

      <button id="adminBackButton" class="ghost-button" type="button">Back To Dashboard</button>
    </div>

    <div class="admin-grid">
      <section class="admin-card">
        <h4>Add IT Personnel</h4>

        <form id="addPersonnelForm" class="admin-form">
          <div class="form-group">
            <label for="personnelNameInput">Full Name *</label>
            <input id="personnelNameInput" type="text" placeholder="Example: Chris Morgan" required />
          </div>

          <div class="form-group">
            <label for="personnelRoleInput">Role *</label>
            <select id="personnelRoleInput" required>
              <option value="">Select role</option>
              <option value="IT Technician">IT Technician</option>
              <option value="Support Engineer">Support Engineer</option>
              <option value="Help Desk Analyst">Help Desk Analyst</option>
              <option value="Network Specialist">Network Specialist</option>
              <option value="Systems Administrator">Systems Administrator</option>
            </select>
          </div>

          <button class="primary-button" type="submit">Add Personnel</button>
        </form>
      </section>

      <section class="admin-card">
        <h4>Team Workload</h4>

        <div class="workload-grid">
          ${workload
            .map(
              (member) => `
                <div class="workload-card">
                  <div class="avatar">${escapeHTML(member.initials)}</div>
                  <div>
                    <strong>${escapeHTML(member.name)}</strong>
                    <small>${escapeHTML(member.role)}</small>
                    <p>${member.assigned} active • ${member.resolved} resolved</p>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="admin-card wide-admin-card">
        <h4>Personnel Directory</h4>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Active Tickets</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              ${workload
                .map(
                  (member) => `
                    <tr>
                      <td><span class="ticket-id">${escapeHTML(member.name)}</span></td>
                      <td>${escapeHTML(member.role)}</td>
                      <td><span class="badge badge-low">${escapeHTML(member.status)}</span></td>
                      <td>${member.assigned}</td>
                      <td>${renderRemovePersonnelButton(member)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function renderRemovePersonnelButton(member) {
  if (member.role === "Super Admin" || member.name === currentUser.name) {
    return `<span class="muted-text">Protected</span>`;
  }

  return `<button class="icon-button" data-remove-personnel="${escapeHTML(member.id)}" title="Remove Personnel">Remove</button>`;
}

function submitTicketForm() {
  const titleInput = document.getElementById("titleInput");
  const requesterInput = document.getElementById("requesterInput");
  const departmentInput = document.getElementById("departmentInput");
  const categoryInput = document.getElementById("categoryInput");
  const priorityInput = document.getElementById("priorityInput");
  const descriptionInput = document.getElementById("descriptionInput");

  if (!titleInput || !requesterInput || !departmentInput || !categoryInput || !priorityInput || !descriptionInput) {
    showToast("Ticket form is missing a field.");
    return;
  }

  const now = formatDateTime(new Date());
  const requesterName = requesterInput.value.trim();

  const newTicket = normalizeTicket({
    id: createTicketId(),
    title: titleInput.value.trim(),
    requester: requesterName,
    submittedBy: requesterName,
    department: departmentInput.value,
    category: categoryInput.value,
    priority: priorityInput.value,
    status: "Open",
    assignedTo: "Unassigned",
    description: descriptionInput.value.trim(),
    createdAt: now,
    updatedAt: now,
    notes: [],
    timeline: [{ text: `Ticket created by ${requesterName}`, at: now }]
  });

  tickets.unshift(newTicket);
  addActivity(`${newTicket.id} created by ${newTicket.requester}`);

  saveTickets();
  saveActivities();

  if (ticketForm) {
    ticketForm.reset();
  }

  currentView = currentUser.role === "requester" ? "mine" : "all";

  renderApp();
  showToast(`${newTicket.id} submitted successfully.`);
}

function handleTicketAction(button) {
  const ticketId = button.dataset.id;
  const action = button.dataset.action;

  if (action === "view") openTicketModal(ticketId);
  if (action === "claim") claimTicket(ticketId);
  if (action === "progress") updateTicketStatus(ticketId, "In Progress");
  if (action === "resolve") updateTicketStatus(ticketId, "Resolved");
  if (action === "cancel") cancelTicket(ticketId);
  if (action === "delete") deleteTicket(ticketId);
}

function loadQuickAction(type) {
  const quickData = {
    outage: {
      title: "System outage reported",
      category: "Network",
      priority: "High",
      description: "System outage affecting multiple users."
    },
    access: {
      title: "Access request needed",
      category: "Account Access",
      priority: "Medium",
      description: "User needs access to a work system or shared resource."
    },
    hardware: {
      title: "Hardware request",
      category: "Hardware",
      priority: "Medium",
      description: "User needs help with a laptop, monitor, dock, or other hardware."
    },
    software: {
      title: "Software installation request",
      category: "Software",
      priority: "Low",
      description: "User needs approved software installed or updated."
    }
  };

  const selected = quickData[type];

  if (!selected) {
    return;
  }

  currentView = "submit";
  renderApp();

  safeSetValue(document.getElementById("titleInput"), selected.title);
  safeSetValue(document.getElementById("categoryInput"), selected.category);
  safeSetValue(document.getElementById("priorityInput"), selected.priority);
  safeSetValue(document.getElementById("descriptionInput"), selected.description);

  showToast("Quick action loaded into the ticket form.");
}

function getFilteredTickets() {
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const selectedPriority = priorityFilter ? priorityFilter.value : "all";
  const selectedStatus = statusFilter ? statusFilter.value : "all";

  return getVisibleTicketsForRole().filter((ticket) => {
    const searchBlob = `
      ${ticket.id}
      ${ticket.title}
      ${ticket.requester}
      ${ticket.submittedBy}
      ${ticket.department}
      ${ticket.category}
      ${ticket.priority}
      ${ticket.status}
      ${ticket.assignedTo}
      ${ticket.description}
    `.toLowerCase();

    const matchesSearch = searchBlob.includes(searchTerm);
    const matchesPriority = selectedPriority === "all" || ticket.priority === selectedPriority;
    const matchesStatus = selectedStatus === "all" || ticket.status === selectedStatus;
    const matchesView = getViewMatch(ticket);

    return matchesSearch && matchesPriority && matchesStatus && matchesView;
  });
}

function getVisibleTicketsForRole() {
  if (!currentUser) {
    return [];
  }

  if (currentUser.role === "requester") {
    return tickets.filter((ticket) => ticket.submittedBy === currentUser.name || ticket.requester === currentUser.name);
  }

  return tickets;
}

function getViewMatch(ticket) {
  if (currentView === "dashboard" || currentView === "all" || currentView === "submit") {
    return true;
  }

  if (currentView === "mine" || currentView === "assigned") {
    if (currentUser.role === "requester") {
      return ticket.submittedBy === currentUser.name || ticket.requester === currentUser.name;
    }

    return ticket.assignedTo === currentUser.name;
  }

  if (currentView === "queue") {
    return ticket.assignedTo === "Unassigned";
  }

  if (currentView === "progress") {
    return ticket.status === "In Progress";
  }

  if (currentView === "resolved") {
    return ticket.status === "Resolved";
  }

  if (currentView === "knowledge") {
    return ticket.category === "Software" || ticket.category === "Account Access" || ticket.category === "Network";
  }

  return true;
}

function getViewTitle() {
  const titles = {
    dashboard: currentUser.role === "requester" ? "My Tickets" : "All IT Tickets",
    submit: "Submit Ticket",
    all: "All IT Tickets",
    mine: currentUser.role === "requester" ? "My Submitted Tickets" : "My Tickets",
    queue: "Team Queue",
    assigned: "Assigned to Me",
    progress: "In Progress Tickets",
    resolved: "Resolved Tickets",
    knowledge: "Knowledge Base Related Tickets",
    admin: "Admin Controls"
  };

  return titles[currentView] || "All IT Tickets";
}

function openTicketModal(ticketId) {
  activeTicketId = ticketId;
  renderTicketModal();

  const modal = document.getElementById("ticketModal");

  if (modal) {
    modal.classList.add("show");
  }
}

function closeTicketModal() {
  activeTicketId = null;

  const modal = document.getElementById("ticketModal");

  if (modal) {
    modal.classList.remove("show");
  }
}









function renderTicketModal() {
  const modal = document.getElementById("ticketModal");
  const ticket = tickets.find((item) => item.id === activeTicketId);

  if (!modal || !ticket) {
    return;
  }

  modal.innerHTML = `
    <div class="ticket-modal-card">
      <div class="modal-header">
        <div>
          <p class="eyebrow">${escapeHTML(ticket.id)}</p>
          <h3>${escapeHTML(ticket.title)}</h3>
          <p>${escapeHTML(ticket.description)}</p>
        </div>

        <button id="closeTicketModal" class="icon-button" type="button">✕</button>
      </div>

      <div class="modal-grid">
        <div class="modal-info-card"><strong>Requester</strong><span>${escapeHTML(ticket.requester)}</span></div>
        <div class="modal-info-card"><strong>Department</strong><span>${escapeHTML(ticket.department)}</span></div>
        <div class="modal-info-card"><strong>Priority</strong><span class="badge ${getPriorityClass(ticket.priority)}">${escapeHTML(ticket.priority)}</span></div>
        <div class="modal-info-card"><strong>Status</strong><span class="badge ${getStatusClass(ticket.status)}">${escapeHTML(ticket.status)}</span></div>
        <div class="modal-info-card"><strong>Assigned To</strong><span>${escapeHTML(ticket.assignedTo)}</span></div>
        <div class="modal-info-card"><strong>Updated</strong><span>${escapeHTML(ticket.updatedAt)}</span></div>
      </div>

      <div class="modal-columns">
        <section>
          <h4>Notes</h4>
          <div class="note-list">${renderNotes(ticket)}</div>

          <div class="note-box">
            <textarea id="ticketNoteInput" rows="3" placeholder="Add a ticket note..."></textarea>
            <button id="addTicketNoteButton" class="primary-button" type="button">Add Note</button>
          </div>
        </section>

        <section>
          <h4>Timeline</h4>
          <div class="timeline-list">${renderTimeline(ticket)}</div>
        </section>
      </div>
    </div>
  `;
}

function renderNotes(ticket) {
  if (!ticket.notes || ticket.notes.length === 0) {
    return `
      <div class="mini-item">
        <div class="avatar">＋</div>
        <div>
          <strong>No notes yet</strong>
          <small>Add the first update for this ticket.</small>
        </div>
      </div>
    `;
  }

  return ticket.notes
    .map(
      (note) => `
        <div class="mini-item">
          <div class="avatar">${escapeHTML(getInitials(note.author))}</div>
          <div>
            <strong>${escapeHTML(note.author)} • ${escapeHTML(note.role)}</strong>
            <small>${escapeHTML(note.createdAt)}</small>
            <p class="note-text">${escapeHTML(note.text)}</p>
          </div>
        </div>
      `
    )
    .join("");
}

function renderTimeline(ticket) {
  if (!ticket.timeline || ticket.timeline.length === 0) {
    return `
      <div class="mini-item">
        <div class="avatar">✓</div>
        <div>
          <strong>Ticket created</strong>
          <small>${escapeHTML(ticket.createdAt)}</small>
        </div>
      </div>
    `;
  }

  return ticket.timeline
    .map(
      (item) => `
        <div class="mini-item">
          <div class="avatar">•</div>
          <div>
            <strong>${escapeHTML(item.text)}</strong>
            <small>${escapeHTML(item.at)}</small>
          </div>
        </div>
      `
    )
    .join("");
}

function addTicketNote() {
  const ticket = tickets.find((item) => item.id === activeTicketId);
  const noteInput = document.getElementById("ticketNoteInput");

  if (!ticket || !noteInput || !noteInput.value.trim()) {
    showToast("Write a note first.");
    return;
  }

  const now = formatDateTime(new Date());

  ticket.notes.unshift({
    author: currentUser.name,
    role: currentUser.roleLabel,
    text: noteInput.value.trim(),
    createdAt: now
  });

  ticket.timeline.unshift({
    text: `Note added by ${currentUser.name}`,
    at: now
  });

  ticket.updatedAt = now;

  addActivity(`${ticket.id} note added by ${currentUser.name}`);
  saveTickets();
  saveActivities();
  renderApp();
  renderTicketModal();
  showToast("Note added.");
}

function claimTicket(ticketId) {
  assignTicketTo(ticketId, currentUser.name);
}

function assignTicketTo(ticketId, assignee) {
  if (currentUser.role !== "admin" && currentUser.role !== "staff") {
    showToast("This role cannot assign tickets.");
    return;
  }

  const ticket = tickets.find((item) => item.id === ticketId);

  if (!ticket) {
    return;
  }

  if (currentUser.role === "staff" && assignee !== currentUser.name) {
    showToast("IT staff can only claim tickets for themselves.");
    return;
  }

  const now = formatDateTime(new Date());

  ticket.assignedTo = assignee;
  ticket.updatedAt = now;
  ticket.timeline.unshift({
    text: assignee === "Unassigned" ? "Ticket moved back to unassigned queue" : `Assigned to ${assignee}`,
    at: now
  });

  addActivity(`${ticket.id} assigned to ${assignee}`);
  saveTickets();
  saveActivities();
  renderApp();
  showToast(`${ticket.id} assigned to ${assignee}.`);
}

function updateTicketStatus(ticketId, newStatus) {
  if (currentUser.role === "requester") {
    showToast("Users cannot change ticket status.");
    return;
  }

  const ticket = tickets.find((item) => item.id === ticketId);

  if (!ticket) {
    return;
  }

  const now = formatDateTime(new Date());

  ticket.status = newStatus;
  ticket.updatedAt = now;

  if (newStatus === "In Progress" && ticket.assignedTo === "Unassigned") {
    ticket.assignedTo = currentUser.name;
    ticket.timeline.unshift({
      text: `Assigned to ${currentUser.name}`,
      at: now
    });
  }

  ticket.timeline.unshift({
    text: `Status changed to ${newStatus}`,
    at: now
  });

  addActivity(`${ticket.id} status changed to ${newStatus}`);
  saveTickets();
  saveActivities();
  renderApp();
  showToast(`${ticket.id} moved to ${newStatus}.`);
}

function cancelTicket(ticketId) {
  const ticket = tickets.find((item) => item.id === ticketId);

  if (!ticket || currentUser.role !== "requester") {
    return;
  }

  if (ticket.submittedBy !== currentUser.name && ticket.requester !== currentUser.name) {
    showToast("You can only cancel your own tickets.");
    return;
  }

  if (ticket.status !== "Open") {
    showToast("Only open tickets can be cancelled by the requester.");
    return;
  }

  const confirmed = confirm(`Cancel ${ticketId}?`);

  if (!confirmed) {
    return;
  }

  tickets = tickets.filter((item) => item.id !== ticketId);
  addActivity(`${ticketId} cancelled by ${currentUser.name}`);

  saveTickets();
  saveActivities();
  renderApp();
  showToast(`${ticketId} cancelled.`);
}

function deleteTicket(ticketId) {
  if (currentUser.role !== "admin") {
    showToast("Only Admin can delete tickets.");
    return;
  }

  const confirmed = confirm(`Delete ${ticketId}?`);

  if (!confirmed) {
    return;
  }

  tickets = tickets.filter((ticket) => ticket.id !== ticketId);

  addActivity(`${ticketId} deleted by ${currentUser.name}`);
  saveTickets();
  saveActivities();
  renderApp();
  showToast(`${ticketId} deleted.`);
}

function addPersonnel(name, role) {
  if (!name || !role) {
    showToast("Add a name and role first.");
    return;
  }

  const alreadyExists = personnel.some((member) => member.name.toLowerCase() === name.toLowerCase());

  if (alreadyExists) {
    showToast("That team member already exists.");
    return;
  }

  const newMember = normalizePersonnel({
    id: `P-${Date.now()}`,
    name,
    role,
    initials: getInitials(name),
    status: "Online"
  });

  personnel.push(newMember);
  addActivity(`${name} added to IT personnel`);

  savePersonnel();
  saveActivities();
  renderApp();
  showToast(`${name} added to IT personnel.`);
}

function removePersonnel(personnelId) {
  const member = personnel.find((item) => item.id === personnelId);

  if (!member) {
    return;
  }

  if (member.role === "Super Admin" || member.name === currentUser.name) {
    showToast("This personnel account is protected.");
    return;
  }

  const confirmed = confirm(`Remove ${member.name} from IT personnel? Assigned tickets will become unassigned.`);

  if (!confirmed) {
    return;
  }

  personnel = personnel.filter((item) => item.id !== personnelId);

  tickets.forEach((ticket) => {
    if (ticket.assignedTo === member.name) {
      ticket.assignedTo = "Unassigned";
      ticket.updatedAt = formatDateTime(new Date());
      ticket.timeline.unshift({
        text: `${member.name} removed. Ticket returned to unassigned queue.`,
        at: ticket.updatedAt
      });
    }
  });

  addActivity(`${member.name} removed from IT personnel`);

  savePersonnel();
  saveTickets();
  saveActivities();
  renderApp();
  showToast(`${member.name} removed.`);
}

function resetDemo() {
  if (!currentUser || currentUser.role !== "admin") {
    showToast("Only Admin can reset the demo.");
    return;
  }

  const confirmed = confirm("Reset all demo tickets, personnel, and activity logs?");

  if (!confirmed) {
    return;
  }

  tickets = starterTickets.map(normalizeTicket);
  personnel = starterPersonnel.map(normalizePersonnel);
  activities = [...starterActivities];

  saveTickets();
  savePersonnel();
  saveActivities();

  currentView = "dashboard";
  renderApp();
  showToast("Demo data reset.");
}

function prepareFormForRole() {
  const requesterInput = document.getElementById("requesterInput");
  const departmentInput = document.getElementById("departmentInput");

  if (!currentUser || !requesterInput || !departmentInput) {
    return;
  }

  if (currentUser.role === "requester") {
    requesterInput.value = currentUser.name;
    requesterInput.disabled = true;

    departmentInput.value = currentUser.department;
    departmentInput.disabled = true;
  } else {
    requesterInput.disabled = false;
    departmentInput.disabled = false;
  }
}

function canAccessView(view) {
  if (!currentUser) {
    return false;
  }

  const roleViews = {
    requester: ["submit", "mine"],
    staff: ["dashboard", "all", "queue", "assigned", "progress", "resolved", "knowledge", "submit"],
    admin: ["dashboard", "all", "queue", "assigned", "progress", "resolved", "knowledge", "submit", "admin"]
  };

  return roleViews[currentUser.role] && roleViews[currentUser.role].includes(view);
}

function getDefaultView(role) {
  if (role === "requester") {
    return "submit";
  }

  return "dashboard";
}

function loginAs(roleKey) {
  const selectedAccount = demoAccounts[roleKey];

  if (!selectedAccount) {
    showToast("Login role not found.");
    return;
  }

  currentUser = { ...selectedAccount };
  currentView = getDefaultView(currentUser.role);

  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentUser));

  showApp();
  renderApp();
  showToast(`Logged in as ${currentUser.roleLabel}.`);
}

function logout() {
  currentUser = null;
  currentView = "dashboard";
  activeTicketId = null;

  localStorage.removeItem(SESSION_STORAGE_KEY);

  closeTicketModal();
  showLogin();
}

function showLogin() {
  if (app) {
    app.style.display = "none";
  }

  document.body.classList.add("login-active");

  const loginScreen = document.getElementById("loginScreen");

  if (loginScreen) {
    loginScreen.style.display = "grid";
  }
}

function showApp() {
  if (app) {
    app.style.display = "grid";
  }

  document.body.classList.remove("login-active");

  const loginScreen = document.getElementById("loginScreen");

  if (loginScreen) {
    loginScreen.style.display = "none";
  }
}


function ensureLoginScreen() {
  let loginScreen = document.getElementById("loginScreen");

  if (!loginScreen) {
    loginScreen = document.createElement("section");
    loginScreen.id = "loginScreen";
    loginScreen.className = "login-screen";

    loginScreen.innerHTML = `
      <div class="login-card">
        <div class="brand login-brand">
          <div class="brand-icon">⌘</div>
          <div>
            <h1>BugFlow OS</h1>
            <p>Role-Based IT Ticket System</p>
          </div>
        </div>

        <div class="login-copy">
          <p class="eyebrow">Demo Login</p>
          <h2>Choose Your Portal</h2>
          <p>This portfolio demo uses role-based access so each person gets a different experience.</p>
        </div>

        <div class="role-grid">
          <button class="role-card" data-login-role="requester" type="button">
            <span class="role-icon">＋</span>
            <strong>User Portal</strong>
            <small>Submit an IT ticket and track your own requests.</small>
          </button>

          <button class="role-card" data-login-role="staff" type="button">
            <span class="role-icon">☷</span>
            <strong>IT Staff Portal</strong>
            <small>View the queue, claim tickets, update status, and add notes.</small>
          </button>

          <button class="role-card" data-login-role="admin" type="button">
            <span class="role-icon">◎</span>
            <strong>Admin Command Center</strong>
            <small>Assign tickets, manage personnel, and monitor workload.</small>
          </button>
        </div>

        <p class="demo-note">Demo authentication for portfolio use only. No real passwords or backend are connected.</p>
      </div>
    `;

    document.body.prepend(loginScreen);
  }
}

function ensureRoleControls() {
  if (document.getElementById("roleControls")) {
    return;
  }

  const topbar = document.querySelector(".topbar");

  if (!topbar) {
    return;
  }

  const roleControls = document.createElement("div");
  roleControls.id = "roleControls";
  roleControls.className = "role-controls";

  roleControls.innerHTML = `
    <div class="role-chip">
      <span id="roleInitials">JF</span>
      <div>
        <strong id="roleName">Joel Foster</strong>
        <small id="roleLabel">Admin</small>
      </div>
    </div>

    <button id="logoutButton" class="ghost-button" type="button">Logout</button>
  `;

  topbar.appendChild(roleControls);
}

function updateRoleControls() {
  if (!currentUser) {
    return;
  }

  safeText(document.getElementById("roleInitials"), currentUser.initials);
  safeText(document.getElementById("roleName"), currentUser.name);
  safeText(document.getElementById("roleLabel"), `${currentUser.roleLabel} • ${currentUser.title}`);
}

function ensureAdminNavButton() {
  if (!navMenu || document.querySelector('[data-view="admin"]')) {
    return;
  }

  const adminButton = document.createElement("button");
  adminButton.className = "nav-link admin-nav-link";
  adminButton.dataset.view = "admin";
  adminButton.type = "button";

  adminButton.innerHTML = `
    <span>⚙</span>
    Admin
  `;

  navMenu.appendChild(adminButton);
}

function ensureAdminSection() {
  if (document.getElementById("adminSection")) {
    return;
  }

  const mainContent = document.querySelector(".main-content");

  if (!mainContent) {
    return;
  }

  const adminSection = document.createElement("section");
  adminSection.id = "adminSection";
  adminSection.className = "submit-panel";
  adminSection.style.display = "none";

  mainContent.appendChild(adminSection);
}

function ensureTicketModal() {
  if (document.getElementById("ticketModal")) {
    return;
  }

  const modal = document.createElement("div");
  modal.id = "ticketModal";
  modal.className = "ticket-modal";

  document.body.appendChild(modal);
}

function injectExtraStyles() {
  if (document.getElementById("bugflowExtraStyles")) {
    return;
  }

  const style = document.createElement("style");
  style.id = "bugflowExtraStyles";

  style.textContent = `
    .login-active {
      min-height: 100vh;
    }

    .login-screen {
      min-height: 100vh;
      display: none;
      place-items: center;
      padding: 24px;
      background:
        radial-gradient(circle at top left, rgba(88, 255, 77, 0.13), transparent 28%),
        radial-gradient(circle at top right, rgba(48, 242, 255, 0.08), transparent 30%),
        linear-gradient(rgba(88, 255, 77, 0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(88, 255, 77, 0.025) 1px, transparent 1px),
        var(--bg);
      background-size: auto, auto, 42px 42px, 42px 42px, auto;
    }

    .login-card {
      width: min(960px, 100%);
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 26px;
      background: var(--panel);
      box-shadow: var(--shadow);
    }

    .login-brand {
      border-bottom: 1px solid var(--border-soft);
      margin-bottom: 24px;
    }

    .login-copy {
      margin-bottom: 18px;
    }

    .login-copy h2 {
      margin: 6px 0;
      font-size: clamp(2rem, 5vw, 3.4rem);
    }

    .login-copy p {
      color: var(--muted);
      line-height: 1.6;
    }

    .role-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .role-card {
      border: 1px solid var(--border-soft);
      border-radius: var(--radius);
      padding: 20px;
      background: rgba(255, 255, 255, 0.035);
      color: var(--text);
      text-align: left;
      transition: 0.2s ease;
    }

    .role-card:hover {
      transform: translateY(-3px);
      border-color: var(--green);
      background: var(--green-soft);
      box-shadow: 0 0 22px rgba(88, 255, 77, 0.16);
    }

    .role-icon {
      width: 44px;
      height: 44px;
      display: grid;
      place-items: center;
      border: 1px solid var(--green);
      border-radius: 14px;
      color: var(--green);
      background: var(--green-soft);
      margin-bottom: 14px;
      font-size: 1.3rem;
      font-weight: 900;
    }

    .role-card strong {
      display: block;
      margin-bottom: 7px;
      font-size: 1rem;
    }

    .role-card small,
    .demo-note,
    .muted-text {
      color: var(--muted);
      line-height: 1.5;
    }

    .demo-note {
      margin-top: 18px;
      font-size: 0.85rem;
    }

    .role-controls {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .role-chip {
      height: 48px;
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid var(--border-soft);
      border-radius: 14px;
      padding: 0 12px;
      background: var(--panel);
      white-space: nowrap;
    }

    .role-chip span {
      width: 32px;
      height: 32px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      border: 1px solid rgba(88, 255, 77, 0.35);
      background: var(--green-soft);
      color: var(--green);
      font-weight: 900;
    }

    .role-chip strong,
    .role-chip small {
      display: block;
    }

    .role-chip small {
      color: var(--muted);
    }

    .empty-row {
      padding: 34px;
      text-align: center;
      color: var(--muted);
      font-weight: 800;
    }

    .table-select {
      width: 160px;
      border: 1px solid var(--border-soft);
      border-radius: 10px;
      padding: 8px;
      outline: none;
      color: var(--text);
      background: rgba(0, 0, 0, 0.32);
    }

    .admin-grid {
      display: grid;
      grid-template-columns: 360px 1fr;
      gap: 16px;
      padding: 20px;
    }

    .admin-card {
      border: 1px solid var(--border-soft);
      border-radius: var(--radius);
      padding: 16px;
      background: rgba(255, 255, 255, 0.035);
    }

    .admin-card h4 {
      margin-bottom: 14px;
      color: var(--green);
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 0.08em;
    }

    .admin-form {
      display: grid;
      gap: 14px;
    }

    .wide-admin-card {
      grid-column: 1 / -1;
    }

    .workload-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .workload-card {
      display: flex;
      gap: 10px;
      align-items: center;
      border: 1px solid var(--border-soft);
      border-radius: 14px;
      padding: 12px;
      background: rgba(0, 0, 0, 0.18);
    }

    .workload-card strong,
    .workload-card small,
    .workload-card p {
      display: block;
    }

    .workload-card small,
    .workload-card p {
      color: var(--muted);
      margin-top: 3px;
      font-size: 0.78rem;
    }

    .ticket-modal {
      position: fixed;
      inset: 0;
      z-index: 200;
      display: none;
      place-items: center;
      padding: 20px;
      background: rgba(0, 0, 0, 0.72);
      backdrop-filter: blur(10px);
    }

    .ticket-modal.show {
      display: grid;
    }

    .ticket-modal-card {
      width: min(980px, 100%);
      max-height: 88vh;
      overflow-y: auto;
      border: 1px solid var(--border);
      border-radius: 22px;
      background: rgba(7, 20, 19, 0.98);
      box-shadow: 0 0 40px rgba(88, 255, 77, 0.14);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      gap: 18px;
      padding: 20px;
      border-bottom: 1px solid var(--border-soft);
    }

    .modal-header h3 {
      margin: 6px 0;
      font-size: 1.5rem;
    }

    .modal-header p {
      color: var(--muted);
      line-height: 1.5;
    }

    .modal-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      padding: 20px;
      border-bottom: 1px solid var(--border-soft);
    }

    .modal-info-card {
      border: 1px solid var(--border-soft);
      border-radius: 14px;
      padding: 12px;
      background: rgba(255, 255, 255, 0.035);
    }

    .modal-info-card strong,
    .modal-info-card span {
      display: block;
    }

    .modal-info-card strong {
      color: var(--muted);
      font-size: 0.74rem;
      text-transform: uppercase;
      margin-bottom: 7px;
    }

    .modal-columns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      padding: 20px;
    }

    .modal-columns h4 {
      margin-bottom: 12px;
      color: var(--green);
    }

    .note-list,
    .timeline-list {
      display: grid;
      gap: 10px;
      margin-bottom: 12px;
    }

    .note-text {
      margin-top: 8px;
      color: #dceee5;
      line-height: 1.5;
      font-size: 0.86rem;
    }

    .note-box {
      display: grid;
      gap: 10px;
    }

    .note-box textarea {
      width: 100%;
      border: 1px solid var(--border-soft);
      border-radius: 12px;
      padding: 12px;
      outline: none;
      color: var(--text);
      background: rgba(0, 0, 0, 0.24);
      resize: vertical;
    }

    .recovery-card {
      max-width: 680px;
      margin: 80px auto;
      border: 1px solid var(--border);
      border-radius: 22px;
      background: var(--panel);
      padding: 24px;
      color: var(--text);
      box-shadow: var(--shadow);
    }

    .recovery-card h2 {
      color: var(--green);
      margin-bottom: 10px;
    }

    .recovery-card p {
      color: var(--muted);
      line-height: 1.6;
      margin-bottom: 16px;
    }

    @media (max-width: 1250px) {
      .role-controls {
        grid-column: span 2;
      }

      .admin-grid {
        grid-template-columns: 1fr;
      }

      .workload-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 820px) {
      .role-grid,
      .modal-grid,
      .modal-columns {
        grid-template-columns: 1fr;
      }

      .role-controls {
        flex-direction: column;
        align-items: stretch;
      }

      .role-chip {
        width: 100%;
      }

      .visibility-card,
      .console-card {
        display: none;
      }

      .nav-menu {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;

  document.head.appendChild(style);
}

function forceRecoveryScreen() {
  document.body.innerHTML = `
    <div class="recovery-card">
      <h2>BugFlow OS Recovery Mode</h2>
      <p>The app hit a startup error, usually from old saved browser data or a missing HTML element.</p>
      <button id="recoveryResetButton" class="primary-button" type="button">Clear Saved Demo Data</button>
    </div>
  `;

  const button = document.getElementById("recoveryResetButton");

  if (button) {
    button.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(PERSONNEL_STORAGE_KEY);
      localStorage.removeItem(ACTIVITY_STORAGE_KEY);
      localStorage.removeItem(SESSION_STORAGE_KEY);
      window.location.reload();
    });
  }
}

function createTicketId() {
  const highestNumber = tickets.reduce((highest, ticket) => {
    const number = Number(String(ticket.id).replace("TKT-", ""));
    return number > highest ? number : highest;
  }, 1000);

  return `TKT-${highestNumber + 1}`;
}

function formatDateTime(date) {
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function getPriorityClass(priority) {
  if (priority === "High") return "badge-high";
  if (priority === "Medium") return "badge-medium";
  return "badge-low";
}

function getStatusClass(status) {
  if (status === "Open") return "badge-open";
  if (status === "In Progress") return "badge-progress";
  return "badge-resolved";
}

function getInitials(name) {
  return String(name)
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function normalizeTicket(ticket) {
  return {
    id: ticket.id || createTicketId(),
    title: ticket.title || "Untitled ticket",
    requester: ticket.requester || "Unknown Requester",
    submittedBy: ticket.submittedBy || ticket.requester || "Unknown Requester",
    department: ticket.department || "IT",
    category: ticket.category || "Other",
    priority: ticket.priority || "Medium",
    status: ticket.status || "Open",
    assignedTo: ticket.assignedTo || "Unassigned",
    description: ticket.description || "No description provided.",
    createdAt: ticket.createdAt || formatDateTime(new Date()),
    updatedAt: ticket.updatedAt || formatDateTime(new Date()),
    notes: Array.isArray(ticket.notes) ? ticket.notes : [],
    timeline: Array.isArray(ticket.timeline)
      ? ticket.timeline
      : [
          {
            text: `Ticket created by ${ticket.requester || "Unknown Requester"}`,
            at: ticket.createdAt || formatDateTime(new Date())
          }
        ]
  };
}

function normalizePersonnel(member) {
  return {
    id: member.id || `P-${Date.now()}`,
    name: member.name || "Unnamed Staff",
    role: member.role || "IT Technician",
    initials: member.initials || getInitials(member.name || "Unnamed Staff"),
    status: member.status || "Online"
  };
}

function addActivity(message) {
  activities.unshift(message);
  activities = activities.slice(0, 30);
}

function loadTickets() {
  const savedTickets = localStorage.getItem(STORAGE_KEY);

  if (!savedTickets) {
    return starterTickets.map(normalizeTicket);
  }

  try {
    return JSON.parse(savedTickets).map(normalizeTicket);
  } catch (error) {
    console.error("Could not load saved tickets:", error);
    return starterTickets.map(normalizeTicket);
  }
}

function saveTickets() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
}

function loadPersonnel() {
  const savedPersonnel = localStorage.getItem(PERSONNEL_STORAGE_KEY);

  if (!savedPersonnel) {
    return starterPersonnel.map(normalizePersonnel);
  }

  try {
    return JSON.parse(savedPersonnel).map(normalizePersonnel);
  } catch (error) {
    console.error("Could not load saved personnel:", error);
    return starterPersonnel.map(normalizePersonnel);
  }
}

function savePersonnel() {
  localStorage.setItem(PERSONNEL_STORAGE_KEY, JSON.stringify(personnel));
}

function loadActivities() {
  const savedActivities = localStorage.getItem(ACTIVITY_STORAGE_KEY);

  if (!savedActivities) {
    return [...starterActivities];
  }

  try {
    return JSON.parse(savedActivities);
  } catch (error) {
    console.error("Could not load saved activities:", error);
    return [...starterActivities];
  }
}

function saveActivities() {
  localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(activities));
}

function loadSession() {
  const savedSession = localStorage.getItem(SESSION_STORAGE_KEY);

  if (!savedSession) {
    return null;
  }

  try {
    const parsed = JSON.parse(savedSession);

    if (!parsed || !parsed.role || !demoAccounts[parsed.role]) {
      return null;
    }

    return parsed;
  } catch (error) {
    console.error("Could not load saved session:", error);
    return null;
  }
}

function showToast(message) {
  if (!toast) {
    console.log(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function safeText(element, value) {
  if (element) {
    element.textContent = value;
  }
}

function safeDisplay(element, value) {
  if (element) {
    element.style.display = value;
  }
}

function safeSetValue(element, value) {
  if (element) {
    element.value = value;
  }
}

function focusField(id) {
  const field = document.getElementById(id);

  if (field) {
    field.focus();
  }
}

function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
