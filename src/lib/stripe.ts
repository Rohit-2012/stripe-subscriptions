import {Stripe} from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRETKEY!, {
    apiVersion: '2024-06-20',
    typescript: true,
})

