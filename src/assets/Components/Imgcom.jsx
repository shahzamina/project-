
import React from 'react'



const Imgcom = ({data}) => {
 
   return (
    <div >
      {data.map((item , index) =>(
<div className="mx-md-5 my-5 s-class " key={index}>
{item.show1 && 
    <div className=' display my-5 footer-class about-class1 p-1 mx-md-5 bg-warning shadow'  >
        <div className='w-80 h-50'>
             <h3 className='style text-center' style={{marginTop:"30px"}}>{item.h}</h3>
          <p className='cus-st style fs-5 p-3  me-3 my-3'>{item.p}</p>
        </div>
        <div style={{marginTop:"30px", marginBottom:"40px"}}>
          <img  style={{height:"500px", marginRight:"3s0px"}} src={item.image} alt="error" />
        </div>

      </div>
      }

{item.show2 && 
    <div className='footer-class about-class1 display my-5 p-1 mx-5 about-com' style={{ boxShadow:"1px 2px 8px rgb(190, 161, 29)"}} >
        <div   style={{marginTop:"20px", marginBottom:"30px"}}>
             <img style={{height:"500px", margin:"0 auto"}} src={item.image} alt="error" />
          
        </div>
        <div className='w-80 h-50'>
        
           <h3 className='style text-center'style={{marginTop:"30px"}}>{item.h}</h3>
         <p className='cus-st about-class style fs-5 p-3 me-3 my-3'>{item.p}</p>
        </div>

      </div>
      }



</div>

      ))}



    </div>
  )
}

export default Imgcom
