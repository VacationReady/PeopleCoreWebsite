"use server"

import { z } from "zod"

const quoteSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z
    .string()
    .min(1, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  companySize: z.string().min(1, "Company size is required"),
  planName: z.string().min(1, "Plan name is required"),
  message: z.string().optional(),
})

export type QuoteFormResult = {
  success: boolean
  message: string
}

export async function submitQuoteRequest(formData: FormData): Promise<QuoteFormResult> {
  try {
    const validatedData = quoteSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      companySize: formData.get("companySize"),
      planName: formData.get("planName"),
      message: formData.get("message") || "",
    })

    console.log("New quote request submission:", validatedData)

    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
          from: "PeopleCore <hi@peoplecore.co.nz>",
          to: ["hi@peoplecore.co.nz"],
          subject: `New Quote Request - ${validatedData.planName} Plan`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1e293b; margin-bottom: 16px;">New Quote Request</h2>
              <div style="background: #f8fafc; padding: 12px; border-radius: 8px; margin-bottom: 16px;">
                <p style="color: #1e293b; margin: 0; font-weight: 600;">Plan: ${validatedData.planName}</p>
              </div>
              <p style="color: #475569; margin: 0 0 8px 0;"><strong>Name:</strong> ${validatedData.name}</p>
              <p style="color: #475569; margin: 0 0 8px 0;"><strong>Email:</strong> ${validatedData.email}</p>
              <p style="color: #475569; margin: 0 0 8px 0;"><strong>Company:</strong> ${validatedData.company}</p>
              <p style="color: #475569; margin: 0 0 8px 0;"><strong>Company size:</strong> ${validatedData.companySize}</p>
              <p style="color: #475569; margin: 16px 0 4px 0;"><strong>Message:</strong></p>
              <p style="color: #475569; white-space: pre-line; margin: 0;">
                ${validatedData.message || "No message provided."}
              </p>
            </div>
          `,
        })
      } catch (emailError) {
        console.error("Failed to send quote email:", emailError)
      }
    }

    return {
      success: true,
      message: "Thanks for your quote request. We'll be in touch soon.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check the form and try again.",
      }
    }

    console.error("Quote form submission error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}
