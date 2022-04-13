// import { Carousel } from 'react-carousel-minimal';

// function caroselTest (){
//     const data = [
//         {
//             image: "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80",
//             caption:"testing"
//         },
//         {
//             image:"https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80",
//             caption: "testing 2"
//         }    
//     ]
// };

const Dashboard = () => {
    return(
        <div className="dashboard-main">
            <div className="background-img">
                <div className="info-con">
                    <h1 className="title-text">Tatooine</h1>
                    <p className="info-text">Population - 200000</p>
                    <p className="description-text">
                        Ever wonder how big some of the planets are?
                        <br></br>How many people live on them?
                        <br></br>What makes them special? 
                    </p>
                    <div className="page-button"><a  href="/Comparison">Comparison</a></div>
                </div>
                <div className="card-carousel">
                    <div className="caroselTest">
                        {/* <Carousel /> */}
                    </div>
                </div>
                
            </div>

            
        </div>
         
        
       
    );
}

export default Dashboard;