import data from "../../data/index.json";

export default function Testimonial (){

    return(
        <section className="testimonial--section" id="estimonial">
        <div className="portfolio--container-box">


        
        <div className="portfolio--container">
            <p className="sub-title">Clients Feedback</p>
            <h2 className="section--heading">Customer Feedback</h2>
        </div>
            </div>

          <div className="portfolio--section--container">
            {data?.testimonial?.map((item,index) => (
                <div key={index} className="testimonial--section--card">
                    <div className="testimonial--section--card--review">
                    {Array.from({length: 5},(reviews,index)=>
                    (
                        <svg 
                     
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        viewBox="0 0 16 16"
                        > 
                        <path 
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#006B6A"   
                        /> 
                        </svg>
                    ))}
                    </div>
                    <p className="text-md">{item.description}</p>
                    <div className="testimonial--section--card--author--detail">
                        <img src={item.src}/>
                        <div>
                            <p className="text-md testimonial--author--name">{item.author_name}</p>
                            <p className="text-md testimonial--author--designation">{item.author_designation}</p>
                        </div>
                    </div>
                </div>
            ))}
          </div>      

        </section>
    );
}