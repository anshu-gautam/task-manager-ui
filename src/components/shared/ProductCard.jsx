function ProductCard({ imgUrl, title, description }) {
  return (
    <div className='p-6 border shadow hover:shadow-2xl transition cursor-pointer flex flex-col justify-center'>
      <img src={imgUrl} alt='product' />
      <div className='bg-white'>
        <p className='font-semibold mt-2'>{title}</p>
        <p className='text-sm mt-3 tracking-wider text-slate-700'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
