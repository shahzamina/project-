import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Cardlist.css'; 
import { div } from 'framer-motion/client';

const Cardlist = ({head,dataset,style,description,isdarkbg,readMoreLink}) => {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(window.innerWidth < 768 ? 1 : 3);
    const total = dataset.length;
    const next = () => {
    setStartIndex((prev) => (prev + 1) % total);
    };

    const prev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
    };
    React.useEffect(() => {
    const handleResize = () => {
    setVisibleCount(window.innerWidth < 768 ? 1 : 3); // sm < 768px → show 1
    };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

    const visibleItems = total > visibleCount
    ? [...dataset, ...dataset].slice(startIndex, startIndex + visibleCount)
    : dataset;
    return (
   
      <div className="d-flex flex-column c-class border border-black gap-3 flex-wrap  my-5 shadow " style={{ ...style, minHeight: '300px'}}>
      <h2 className='mt-5 text-center p-3 style'>{head}</h2>
      <p className=' about-class style  cus-st text-center  mx-md-auto  ' >{description}</p>
        {total > 0 ? (
          <div className="d-flex justify-content-md-center  justify-content-sm-left align-items-center gap-2">
              {total > visibleCount && (
                 <button className="arrow-button" onClick={prev} style={{
                 marginLeft:visibleCount === 1 ? '10px' : '30px',
                  fontSize : visibleCount === 1 ? '13px' : '30px'
                 }}>&larr;</button>
              )}
          <div className="d-flex p-1 gap-2 mb-2 ">
              {visibleItems.map((item) => (
                <div  key={item.id}   style={{
                  
                      width: visibleCount === 1 ? '200px' : '350px',
                     marginLeft:visibleCount === 1 ? '5%' : '10px',
                      marginRight:visibleCount === 1 ? '5%' : '10px',
                      height:visibleCount === 1 ? '250px' : '350px',
                      overflow: 'hidden',
             }}>
          <img  className='Card-image'  src={item.image} alt={item.image}  style={{ width: "100%", height: "100%"}}/>
          </div>
      ))}
        </div>
              {total > visibleCount && (
                <button className="arrow-button " onClick={next} style={{
                  
                  marginRight:visibleCount === 1 ? '0px' : '0px',
                  fontSize : visibleCount === 1 ? '13px' : '30px'
                 }}>&rarr;</button>
                )}
        </div>
  ):(
    <p>No photographers found.</p>
  )
  }
   {readMoreLink && (
      <Link to={readMoreLink}>
      <button className={`style fs-5 fw-bold p-md-3 p-sm-1 card-com Card-image btn ${isdarkbg ? 'text-warning bg-black' : 'bg-warning text-black '}`} >
        Read more</button>
      </Link>
)}
</div>
 );
};
export default Cardlist
