import { NextApiRequest, NextApiResponse } from 'next'
import locales from '../../../translations/locales'
import { isLocale, Translations } from '../../../translations/types'

export default (req: NextApiRequest, res: NextApiResponse<Translations>) => {
    const { query: { lang } } = req
    const { namespace }: any = req.query
    if (typeof lang !== 'string' || !isLocale(lang)) {
        res.status(400).json({ error: 'error: unknown locale' })
    } else {
        const locale: any = locales[lang];
        const strings: any = locale[namespace];
        const payload = { common: locales[lang].common, ...strings }
        res.status(200).json(payload)
    }
}