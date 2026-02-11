import type { ContactRequest, ContactResponse } from '../types/contact';

const API_ENDPOINT = "https://kamico-fastapi-contact.vercel.app/api/contact";

export const contactService = {
  async sendInquiry(data: ContactRequest): Promise<ContactResponse> {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": import.meta.env.PUBLIC_KAMICO_API_KEY,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMsg = result.detail?.[0]?.msg || result.detail || "Request failed";
        throw new Error(errorMsg);
      }

      return result;
    } catch (error) {
      console.error("[ContactService Error]:", error);
      throw error;
    }
  }
};
