import { NextRequest, NextResponse } from 'next/server';
import { createBooking } from '@/lib/services/booking-service';
import { sendBookingNotificationEmail } from '@/lib/services/email-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const required = ['providerId', 'providerName', 'providerEmail', 'customerName', 'customerEmail', 'customerPhone', 'serviceType', 'startDate', 'endDate', 'numberOfDogs'];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Create booking
    const booking = createBooking({
      providerId: body.providerId,
      providerName: body.providerName,
      providerEmail: body.providerEmail,
      customerId: body.customerId || 'guest',
      customerName: body.customerName,
      customerEmail: body.customerEmail,
      customerPhone: body.customerPhone,
      serviceType: body.serviceType,
      startDate: body.startDate,
      endDate: body.endDate,
      numberOfDogs: body.numberOfDogs,
      dogDetails: body.dogDetails,
      message: body.message,
    });

    // Send email notification
    await sendBookingNotificationEmail({
      providerName: booking.providerName,
      providerEmail: booking.providerEmail,
      customerName: booking.customerName,
      customerEmail: booking.customerEmail,
      customerPhone: booking.customerPhone,
      serviceType: booking.serviceType,
      startDate: booking.startDate,
      endDate: booking.endDate,
      numberOfDogs: booking.numberOfDogs,
      message: booking.message,
      bookingId: booking.id,
    });

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}
