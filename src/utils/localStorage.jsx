// localStorage.clear()

const employees = [
  {
    id: 1,
    email: "e1@e.com",
    password: "123",
    first_name: "John",
    tasks: [
      {
        title: "Quarterly Report Compilation",
        description:
          "Prepare and finalize the quarterly performance report for review.",
        category: "Reporting",
        status_active: true,
        completed: false,
        failed: false,
        new_task: true,
        date: "2024-12-01",
      },
      {
        title: "Client Information Update",
        description:
          "Update and maintain accurate records of all client details.",
        category: "Data Management",
        status_active: true,
        completed: true,
        failed: false,
        new_task: false,
        date: "2024-11-25",
      },
      {
        title: "Team Meeting Coordination",
        description: "Schedule and organize a productive team meeting session.",
        category: "Scheduling",
        status_active: false,
        completed: false,
        failed: true,
        new_task: false,
        date: "2024-10-15",
      },
    ],
    task_stats: {
      active: 2,
      completed: 1,
      failed: 1,
      new_task: 1,
    },
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    first_name: "Sarah",
    tasks: [
      {
        title: "New Project Presentation Preparation",
        description:
          "Create and finalize a presentation for the upcoming project launch.",
        category: "Planning",
        status_active: true,
        completed: false,
        failed: false,
        new_task: true,
        date: "2024-12-02",
      },
      {
        title: "Vendor Follow-up",
        description:
          "Ensure follow-up on vendor inquiries and project progress.",
        category: "Communication",
        status_active: false,
        completed: true,
        failed: false,
        new_task: false,
        date: "2024-11-20",
      },
      {
        title: "Legal Document Review",
        description:
          "Review legal documents to ensure accuracy and compliance.",
        category: "Legal",
        status_active: true,
        completed: false,
        failed: false,
        new_task: true,
        date: "2024-12-03",
      },
    ],
    task_stats: {
      active: 2,
      completed: 1,
      failed: 0,
      new_task: 2,
    },
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    first_name: "Mike",
    tasks: [
      {
        title: "Software Module Testing",
        description: "Test new software module for bugs and improvements.",
        category: "Quality Assurance",
        status_active: true,
        completed: false,
        failed: false,
        new_task: true,
        date: "2024-12-01",
      },
      {
        title: "Internal Knowledge Base Update",
        description:
          "Update and improve the internal knowledge base documentation.",
        category: "Documentation",
        status_active: false,
        completed: true,
        failed: false,
        new_task: false,
        date: "2024-11-18",
      },
    ],
    task_stats: {
      active: 1,
      completed: 1,
      failed: 0,
      new_task: 1,
    },
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    first_name: "Anna",
    tasks: [
      {
        title: "Employee Training Session",
        description: "Conduct a session to train employees on new processes.",
        category: "Training",
        status_active: false,
        completed: true,
        failed: false,
        new_task: false,
        date: "2024-10-10",
      },
      {
        title: "Survey Result Analysis",
        description: "Analyze survey data and prepare insights for reporting.",
        category: "Analysis",
        status_active: true,
        completed: false,
        failed: false,
        new_task: true,
        date: "2024-12-02",
      },
      {
        title: "Marketing Plan Drafting",
        description:
          "Create a comprehensive marketing plan for product launch.",
        category: "Marketing",
        status_active: true,
        completed: false,
        failed: false,
        new_task: true,
        date: "2024-12-03",
      },
    ],
    task_stats: {
      active: 2,
      completed: 1,
      failed: 0,
      new_task: 2,
    },
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    first_name: "David",
    tasks: [
      {
        title: "Office Equipment Maintenance Scheduling",
        description:
          "Schedule and manage routine maintenance for office equipment.",
        category: "Maintenance",
        status_active: true,
        completed: false,
        failed: false,
        new_task: true,
        date: "2024-12-01",
      },
      {
        title: "Team-building Activity Planning",
        description:
          "Organize and plan a fun team-building activity for employees.",
        category: "HR",
        status_active: false,
        completed: true,
        failed: false,
        new_task: false,
        date: "2024-11-22",
      },
      {
        title: "Budget Proposal Evaluation",
        description:
          "Evaluate budget proposals and provide recommendations for approval.",
        category: "Finance",
        status_active: true,
        completed: false,
        failed: false,
        new_task: true,
        date: "2024-12-03",
      },
    ],
    task_stats: {
      active: 2,
      completed: 1,
      failed: 0,
      new_task: 2,
    },
  },
]

const admin = {
  id: 1,
  email: "admin@1.com",
  password: "123",
}

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
  return { employees, admin }
}
