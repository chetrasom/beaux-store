import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectorFilters, sortProducts, filtersProducts } from "../features/filters/filtersSlice";

import { 
    BreadCrumb, Filters, Sort, ProductList, FiltersMobile
    // ProductsPagination 
} from '../components';

const Shop = () => {
    const { filtered_products: products, sort, filters} = useSelector(selectorFilters);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filtersProducts());
        dispatch(sortProducts());
    }, [dispatch, sort, filters]);

    return (
        <>
            <BreadCrumb 
                heading='products collection'
                title='products'
            />

            <div className="lg:hidden">
                <FiltersMobile />
            </div>

            <section className='container pt-10 pb-10'>

                <div className='flex items-start justify-between gap-x-6'>
                    <Filters data={products} />
                    {/* ----------------------------------------------------- */}
                    <div className='flex-1'>
                        {/* Sort */}
                        <Sort data={products} />

                        {/* Products list */}
                        <div className='mt-6 md:mt-8'>
                            <ProductList data={products} />
                        </div>

                        {/* Pagination */}
                        {/* <ProductsPagination />    */}
                    </div>
                </div> 
            </section>
        </>
    )
}

export default Shop;