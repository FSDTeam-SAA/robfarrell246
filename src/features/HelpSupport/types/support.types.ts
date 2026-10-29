export interface TicketMessage {
  id: string;
  author: string;
  role: string;
  roleType: "user" | "support";
  timestamp: string;
  avatarText: string;
  avatarBg: string;
  content: string;
}

export interface TicketData {
  id: string;
  subject: string;
  topic: string;
  priority: string;
  status: "In Review" | "Resolved";
  submittedBy: string;
  submittedEmail: string;
  createdOn: string;
  assignedAgent: string;
  project: string;
  messages: TicketMessage[];
}

export interface TicketSummary {
  id: string;
  subject: string;
  project: string;
  topic: string;
  status: "In Review" | "Resolved";
  lastUpdated: string;
}
