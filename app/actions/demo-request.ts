"use server"

import { z } from "zod"

const demoRequestSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export async function requestDemoAccess(email: string) {
  try {
    // Validate email
    const validatedData = demoRequestSchema.parse({ email })

    console.log("New demo request:", validatedData)

    // Send email if Resend API key is available
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)

        // Send notification to Mike
        await resend.emails.send({
          from: "PeopleCore <hi@peoplecore.co.nz>",
          to: ["hi@peoplecore.co.nz"],
          subject: "🎬 New Demo Request",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1e293b; margin-bottom: 24px;">New Demo Request</h2>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
                <p style="color: #475569; font-size: 16px; margin: 0;">
                  <strong>Email:</strong> ${validatedData.email}
                </p>
                <p style="color: #475569; font-size: 14px; margin-top: 8px; margin-bottom: 0;">
                  <strong>Requested:</strong> ${new Date().toLocaleString('en-NZ', { timeZone: 'Pacific/Auckland' })}
                </p>
              </div>
              
              <p style="color: #64748b; font-size: 14px;">
                This person wants to watch the product demo. Follow up with them!
              </p>
            </div>
          `,
        })

        // Send demo link to the user
        await resend.emails.send({
          from: "PeopleCore <hi@peoplecore.co.nz>",
          to: [validatedData.email],
          subject: "Your PeopleCore Demo Access",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #1e293b; margin-bottom: 24px;">Your Demo is Ready! 🎬</h1>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Kia ora!
              </p>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Thank you for your interest in PeopleCore. We're excited to show you how 
                we're transforming HR for New Zealand businesses.
              </p>
              
              <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 24px; border-radius: 12px; margin: 24px 0; text-align: center;">
                <p style="color: white; margin: 0 0 16px 0; font-size: 18px; font-weight: bold;">
                  Watch the 5-minute demo
                </p>
                <a href="https://peoplecore.co.nz/demo" style="display: inline-block; background: white; color: #3b82f6; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
                  Watch Now →
                </a>
              </div>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Want to see PeopleCore in action with your specific use case? 
                <a href="https://peoplecore.co.nz" style="color: #3b82f6;">Book a personalised demo</a> with our team.
              </p>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                Ngā mihi,<br>
                The PeopleCore Team
              </p>
            </div>
          `,
        })
      } catch (emailError) {
        console.error("Failed to send email:", emailError)
        // Don't fail the entire operation if email fails
      }
    }

    return { 
      success: true, 
      message: "Demo link sent! Check your inbox." 
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: "Please enter a valid email address" 
      }
    }

    console.error("Demo request error:", error)
    return { 
      success: false, 
      message: "Something went wrong. Please try again." 
    }
  }
}

