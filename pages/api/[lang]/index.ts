import { NextApiRequest, NextApiResponse } from 'next'
import strings from '../../../translations/strings'
import { isLocale, Translations } from '../../../translations/types'

export default (req: NextApiRequest, res: NextApiResponse<Translations>) => {
    const { query: { lang } } = req
    if (typeof lang !== 'string' || !isLocale(lang)) {
        res.status(400).json({ error: 'error: unknown locale' })
    } else {
        res.status(200).json(strings[lang])
    }
}