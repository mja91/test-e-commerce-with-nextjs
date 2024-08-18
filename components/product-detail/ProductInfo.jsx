import { createCartItem } from '@/api';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import styles from './ProductInfo.module.css';

export default function ProductInfo({ productDetail }) {
    const router = useRouter();
    const { id, name, imageUrl, price } = productDetail;

    const addCart = async () => {
        const response = await createCartItem(productDetail);
        alert('장바구니에 상품이 담겼습니다.');
        router.push('/cart');
    };

    return (
        <div className={styles.container}>
            <div>
                <Image
                    src={imageUrl}
                    width={300}
                    height={300}
                    alt={name}
                />
            </div>
            <div className={styles.description}>
                <p>{name}</p>
                <p>{price}</p>
                <button onClick={addCart}>장바구니에 담기</button>
            </div>
        </div>
    )
}
