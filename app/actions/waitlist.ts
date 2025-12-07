"use server"

import { z } from "zod"

const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  role: z.string().optional(),
  functionalities: z.array(z.string()).optional(),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>

export async function joinWaitlist(formData: FormData) {
  try {
    // Parse functionalities from JSON string
    let functionalities: string[] = []
    const functionalitiesStr = formData.get("functionalities")
    if (functionalitiesStr && typeof functionalitiesStr === 'string') {
      try {
        functionalities = JSON.parse(functionalitiesStr)
      } catch {
        functionalities = []
      }
    }

    // Validate form data
    const validatedData = waitlistSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      role: formData.get("role"),
      functionalities,
    })

    // Here you would typically save to database
    // For now, we'll simulate the process
    console.log("New waitlist signup:", validatedData)

    // Send email if Resend API key is available
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
          from: "PeopleCore <hi@peoplecore.co.nz>",
          to: [validatedData.email],
          subject: "Welcome to PeopleCore Beta!",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #1e293b; margin-bottom: 24px;">Welcome to PeopleCore Beta!</h1>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Hi ${validatedData.name},
              </p>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Thank you for joining the PeopleCore beta waitlist! You're now part of an exclusive group 
                that will get early access to the world's most advanced conversational HR AI.
              </p>
              
              <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 24px; border-radius: 12px; margin: 24px 0;">
                <h2 style="color: white; margin: 0 0 16px 0;">What's Next?</h2>
                <ul style="color: white; margin: 0; padding-left: 20px;">
                  <li>We'll notify you as soon as beta access is available</li>
                  <li>You'll receive exclusive updates on new features</li>
                  <li>Get special pricing when we launch publicly</li>
                </ul>
              </div>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                In the meantime, follow us on social media for the latest updates and HR automation tips.
              </p>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Best regards,<br>
                The PeopleCore Team
              </p>
            </div>
          `,
        })

        // Send notification to Mike
        await resend.emails.send({
          from: "PeopleCore <hi@peoplecore.co.nz>",
          to: ["hi@peoplecore.co.nz"],
          subject: "New Beta Waitlist Signup",
          html: `
            <h2>New Beta Waitlist Signup</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Company:</strong> ${validatedData.company || "Not provided"}</p>
            <p><strong>Role:</strong> ${validatedData.role || "Not provided"}</p>
            <p><strong>Interested in:</strong> ${validatedData.functionalities?.length ? validatedData.functionalities.join(", ") : "Not specified"}</p>
          `,
        })
      } catch (emailError) {
        console.error("Failed to send email:", emailError)
        // Don't fail the entire operation if email fails
      }
    }

    return { 
      success: true, 
      message: "Successfully joined the waitlist! Check your email for confirmation." 
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: "Validation failed", 
        errors: error.issues.reduce((acc: Record<string, string>, err: any) => {
          acc[err.path[0] as string] = err.message
          return acc
        }, {} as Record<string, string>)
      }
    }

    console.error("Waitlist signup error:", error)
    return { 
      success: false, 
      message: "Something went wrong. Please try again." 
    }
  }
}
