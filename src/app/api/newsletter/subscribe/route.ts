import { NextResponse } from 'next/server'


export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, phone } = body

        if (!email && !phone) {
            return respondWithError('Missing required parameters.', 400)
        }

        if (email && !phone) {
            return handleBeehiivFlow(email)
        }

        if (email && phone) {
            return handleCustomFlow(email, phone)
        }

        return respondWithError('Something went wrong.', 400)
    } catch (error) {
        console.error('Error subscribing:', error)
        return respondWithError('Failed to process subscription.', 500)
    }
}

function respondWithError(message: string, status: number) {
    return NextResponse.json({ error: message }, { status })
}

async function handleBeehiivFlow(email: string) {
    console.log('Beehiiv flow for email:', email)

    const response = fetch(`https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID_V2}/subscriptions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({ email }),
    })

    console.log(response)
    return NextResponse.json(
        { message: 'Beehiiv subscription successful.' },
        { status: 201 }
    )
}

function handleCustomFlow(email: string, phone: string) {
    console.log('Custom flow for email and phone:', { email, phone })

    // Simulate saving to a custom service
    const subscription = {
        email,
        phone,
        subscribedAt: new Date(),
    }

    return NextResponse.json(
        { message: 'Custom subscription successful.', subscription },
        { status: 201 }
    )
}