import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Provinsi from 'App/Models/Provinsi'

export default class ProvinsisController {
    public async index({ response }: HttpContextContract) {
        const provinsi = await Provinsi.all()
        return response.status(200).json(provinsi)
    }

    public async store({ request, response }: HttpContextContract) {
        const input = request.only(['nama'])
        try {
            const provinsi = await Provinsi.create(input)

            return response.status(200).json(provinsi)
        } catch (err) {
            return response.status(500).json({ code: 500, status: 'error', message: err.message })
        }
    }

    public async show({ params, response }: HttpContextContract) {
        try{
            const provinsi = await Provinsi.findBy('id', params.id)

            return response.status(200).json(provinsi)
        } catch (err) {
            return response.status(500).json({ code: 500, status: 'error', message: err.message  })
        }
    }

    public async update({ params, request, response }: HttpContextContract) {
        const input = request.only(['nama'])
        try {
            const provinsi = await Provinsi.findBy('id', params.id)
            provinsi?.merge(input)
            await provinsi?.save()

            return response.status(200).json(provinsi)
        } catch (err) {
            return response.status(500).json({ code: 500, status: 'error', message: err.message })
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
    try {
        const provinsi = await Provinsi.findBy('id', params.id)
        await provinsi?.delete()

        return response.status(200).json(provinsi)
    }   catch (err) {
        return response.status(500).json({ code: 500, status: 'error', message: err.message })
        }
    }
}
