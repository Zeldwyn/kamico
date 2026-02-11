export interface ContactRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  location: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
