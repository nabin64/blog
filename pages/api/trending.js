//api/trenindg
import data from "./data"

export default function handler(req, res) {
    const {Trending} = data
    if(Trending) return res.status(200).json(Trending)
    return res.status(400).json({error:"Data not found"})
}
