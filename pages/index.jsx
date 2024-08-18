import React from 'react'
import ProductList from '@/components/product-list/ProductList'
import ProductHeader from '@/components/ProductHeader'

function ProductPage() {
  const headerTitle = '상품 목록 페이지';
  return (
    <div>
      <ProductHeader title={headerTitle}></ProductHeader>
      <ProductList></ProductList>
    </div>
  )
}

export default ProductPage