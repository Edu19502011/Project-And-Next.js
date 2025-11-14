import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store in database
    // 3. Send to a webhook (Discord, Slack, etc.)
    
    // For now, we'll just log it (in production, implement actual email sending)
    console.log('Contact form submission:', { name, email, message })

    // Example with fetch to a webhook (Discord, Slack, etc.)
    // await fetch('YOUR_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     content: `New contact from ${name} (${email}): ${message}`
    //   })
    // })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
