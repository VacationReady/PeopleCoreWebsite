"use server"

import { z } from "zod"

const quoteSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  employeeNumbers: z
    .string()
    .min(1, "Employee numbers is required"),
  phone: z.string().optional(),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
})

export type QuoteFormResult = {
  success: boolean
  message: string
}

export async function submitQuoteRequest(formData: FormData): Promise<QuoteFormResult> {
  try {
    const interestsData = formData.get("interests")
    const interests = interestsData ? JSON.parse(interestsData as string) : []
    
    const validatedData = quoteSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      employeeNumbers: formData.get("employeeNumbers"),
      phone: formData.get("phone") || undefined,
      interests,
    })

    console.log("New quote request submission:", validatedData)

    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
          from: "PeopleCore <hi@peoplecore.co.nz>",
          to: ["hi@peoplecore.co.nz"],
          subject: "Quote Lead",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1e293b; margin-bottom: 16px;">New Quote Request</h2>
              <p style="color: #475569; margin: 0 0 8px 0;"><strong>Name:</strong> ${validatedData.name}</p>
              <p style="color: #475569; margin: 0 0 8px 0;"><strong>Email:</strong> ${validatedData.email}</p>
              <p style="color: #475569; margin: 0 0 8px 0;"><strong>Employee Numbers:</strong> ${validatedData.employeeNumbers}</p>
              ${validatedData.phone ? `<p style="color: #475569; margin: 0 0 8px 0;"><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
              <p style="color: #475569; margin: 16px 0 4px 0;"><strong>Interested In:</strong></p>
              <ul style="color: #475569; margin: 0; padding-left: 20px;">
                ${validatedData.interests.map(interest => `<li>${interest}</li>`).join('')}
              </ul>
            </div>
          `,
        })
      } catch (emailError) {
        console.error("Failed to send quote email:", emailError)
      }
    }

    return {
      success: true,
      message: "Thanks for requesting a quote! We'll be in touch soon.",
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
