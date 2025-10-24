import { Resend } from 'resend';

export interface BookingEmailData {
  providerName: string;
  providerEmail: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceType: string;
  startDate: string;
  endDate: string;
  numberOfDogs: number;
  message?: string;
  bookingId: string;
}

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function sendBookingNotificationEmail(data: BookingEmailData): Promise<boolean> {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      // Demo mode: Log email instead of sending
      console.log('=== EMAIL NOTIFICATION (DEMO MODE - No RESEND_API_KEY) ===');
      console.log(`To: ${data.providerEmail}`);
      console.log(`Subject: New Booking Request from ${data.customerName}`);
      console.log(`Booking ID: ${data.bookingId}`);
      console.log(`Service: ${data.serviceType}`);
      console.log(`Dates: ${data.startDate} - ${data.endDate}`);
      console.log(`Dogs: ${data.numberOfDogs}`);
      console.log(`Customer: ${data.customerName} (${data.customerEmail}, ${data.customerPhone})`);
      if (data.message) {
        console.log(`Message: ${data.message}`);
      }
      console.log('=========================================================');
      return true;
    }

    // Production mode: Send actual email via Resend
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .booking-details { background-color: white; padding: 20px; border-radius: 6px; margin: 20px 0; }
            .detail-row { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
            .detail-row:last-child { border-bottom: none; }
            .label { font-weight: bold; color: #4b5563; }
            .value { color: #1f2937; }
            .message-box { background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; border-radius: 4px; }
            .button { display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
            .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🐾 New Booking Request</h1>
            </div>
            <div class="content">
              <p>Hello <strong>${data.providerName}</strong>,</p>
              <p>You have received a new booking request from a customer!</p>

              <div class="booking-details">
                <h2 style="margin-top: 0; color: #2563eb;">Booking Details</h2>
                <div class="detail-row">
                  <span class="label">Customer Name:</span>
                  <span class="value">${data.customerName}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Email:</span>
                  <span class="value">${data.customerEmail}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Phone:</span>
                  <span class="value">${data.customerPhone}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Service Type:</span>
                  <span class="value">${data.serviceType}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Start Date:</span>
                  <span class="value">${data.startDate}</span>
                </div>
                <div class="detail-row">
                  <span class="label">End Date:</span>
                  <span class="value">${data.endDate}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Number of Dogs:</span>
                  <span class="value">${data.numberOfDogs}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Booking ID:</span>
                  <span class="value">${data.bookingId}</span>
                </div>
              </div>

              ${data.message ? `
                <div class="message-box">
                  <p style="margin: 0;"><strong>Message from Customer:</strong></p>
                  <p style="margin: 10px 0 0 0;">${data.message}</p>
                </div>
              ` : ''}

              <p style="text-align: center;">
                <a href="https://tour.pet/provider/dashboard" class="button">View in Dashboard</a>
              </p>

              <p>Please log in to your TourPet dashboard to accept or decline this booking request.</p>

              <div class="footer">
                <p>This is an automated message from TourPet</p>
                <p>&copy; ${new Date().getFullYear()} TourPet. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'TourPet Bookings <bookings@news.tour.pet>',
      to: data.providerEmail,
      subject: `🐾 New Booking Request from ${data.customerName}`,
      html: emailHtml,
    });

    console.log('✅ Email sent successfully via Resend:', result);
    return true;

  } catch (error) {
    console.error('❌ Error sending email:', error);
    return false;
  }
}
