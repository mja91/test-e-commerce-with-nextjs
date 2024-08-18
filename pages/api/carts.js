import { removeCartItem } from "@/api";

export default async function handler(req, res) {
    const id = req.body.id;
    const { data } = await removeCartItem(id);
    res.status(200).send(`${data.name} 아이템이 삭제되었습니다.`);
}