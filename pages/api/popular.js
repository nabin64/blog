//api/trenindg
import data from "./data"

export default function handler(req, res) {
    const { Popular } = data
    if (Popular) return res.status(200).json(Popular)
    return res.status(400).json({ error: "Data not found" })
}
