import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Gombal from 'App/Models/Gombal'
export default class GombalsController {
    public async store({ request, response }: HttpContextContract) {
        const input = request.only(['gombal'])
        try {
            const gombal = await Gombal.create(input)

            return response.status(200).json({ code: 200, status: 'success', data: gombal })
        } catch (err) {
            return response.status(500).json({ code: 500, status: 'error', message: err.message })
        }
    }

    public async index({ response }: HttpContextContract) {
        const gombal = await Gombal.all()

        return response.status(200).json({ code: 200, status: 'success', data: gombal })
    }

    public async show({ params, response }: HttpContextContract) {
        try{
            const gombal = await Gombal.findBy('id', params.id)

            return response.status(200).json({ code: 200, status: 'success', data: gombal })
        } catch (err) {
            return response.status(500).json({ code: 500, status: 'error', message: err.message  })
        }
    }

    public async update({ params, request, response }: HttpContextContract) {
        const input = request.only(['gombal'])
        try {
            const gombal = await Gombal.findBy('id', params.id)
            gombal?.merge(input)
            await gombal?.save()

            return response.status(200).json({ code: 200, status: 'success', data: gombal })
        } catch (err) {
            return response.status(500).json({ code: 500, status: 'error', message: err.message })
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
    try {
        const gombal = await Gombal.findBy('id', params.id)
        await gombal?.delete()

        return response.status(200).json({ code: 200, status: 'success', data: gombal })
    }   catch (err) {
        return response.status(500).json({ code: 500, status: 'error', message: err.message })
        }
    }
}
