import axios from 'axios'
import { useState } from 'react'

interface NewsletterResponse {
    data: {
        id: string
        email: string
        status: string
        created: number
        subscription_tier: string
        subscription_premium_tier_names: string[]
        utm_source?: string
        utm_medium?: string
        utm_channel?: string
        utm_campaign?: string
        referring_site?: string
        referral_code?: string
    }
}

export const useNewsletter = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [subscribeData, setSubscribeData] = useState<NewsletterResponse | null>(null)

    const subscribe = async (email: string) => {
        setLoading(true)
        setError(null)
        try {
            const res = await axios.post<NewsletterResponse>('/api/newsletter/subscribe', { email })
            if (!res.data) {
                throw new Error('Subscription failed')
            }

            setSubscribeData(res.data)
            return res.data
        } catch (err: any) {
            setError(err.response?.data?.message || 'An error occurred')
            return null
        } finally {
            setLoading(false)
        }
    }

    return {
        subscribe,
        subscribeLoading: loading,
        subscribeError: error,
        subscribeData: subscribeData,
    }
}