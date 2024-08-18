import React from 'react'
import ProductHeader from '@/components/ProductHeader';
import { fetchProductById } from '@/api';
import ProductInfo from '@/components/product-detail/ProductInfo';

export default function ProductDetailPage({ productDetail }) {
    const headerTitle = '상품 상세 페이지';
    return (
        <div>
            <ProductHeader title={headerTitle}></ProductHeader>
            <ProductInfo productDetail={productDetail}></ProductInfo>
        </div>
    )
}

export async function getServerSideProps(context) {
    const id = context.params.id;
    const { data } = await fetchProductById(id);

    return {
        props: {
            productDetail: data,
        },
    }
}