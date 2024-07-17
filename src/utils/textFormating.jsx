const mapStatusBackendToFrontend = (status) => {
  switch (status) {
    case "ACTIVE":
      return "active";
    case "INACTIVE":
      return "inactive";
    case "PROBATION":
      return "probation";
    default:
      return status;
  }
};

const mapStatusFrontendToBackend = (status) => {
  switch (status) {
    case "active":
      return "ACTIVE";
    case "inactive":
      return "INACTIVE";
    case "probation":
      return "PROBATION";
    default:
      return status;
  }
};

const mapRoleBackendToFrontend = (role) => {
  switch (role) {
    case "DEVELOPER":
      return "Developer";
    case "UI":
      return "Ui";
    case "UX":
      return "Ux";
    case "SALES_MANAGER":
      return "Sales Manager";
    case "CUSTOMER_SUPPORT":
      return "Customer Support";
    case "IT_MANAGER":
      return "IT Manager";
    case "LEGAL_ADVISOR":
      return "Legal Advisor";
    case "PROJECT_MANAGER":
      return "Project Manager";
    case "RESEARCHER":
      return "Researcher";
    default:
      return role;
  }
};

const mapRoleFrontendToBackend = (option) => {
  switch (option) {
    case "Developer":
      return "DEVELOPER";
    case "Ui":
      return "UI";
    case "Ux":
      return "UX";
    case "Sales Manager":
      return "SALES_MANAGER";
    case "Customer Support":
      return "CUSTOMER_SUPPORT";
    case "IT Manager":
      return "IT_MANAGER";
    case "Legal Advisor":
      return "LEGAL_ADVISOR";
    case "Project Manager":
      return "PROJECT_MANAGER";
    case "Researcher":
      return "RESEARCHER";
    default:
      return option;
  }
};

const createdDateToJoinDate = (employee) => {
  if (!employee || !employee.createdAt) {
    return "";
  }
  return new Date(employee.createdAt).toLocaleDateString("en-Gb", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const experienceToYears = (years) => {
  if (years == 1) {
    return "1 year";
  }
  return `${years} years`;
};

export {
  mapStatusBackendToFrontend,
  mapStatusFrontendToBackend,
  mapRoleBackendToFrontend,
  mapRoleFrontendToBackend,
  createdDateToJoinDate,
  experienceToYears,
};
