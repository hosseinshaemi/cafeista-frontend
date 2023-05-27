import React , { useState , useEffect , useRef } from "react";
import CafeObject from './../Components/CafeObject/CafeObject'
import './Main.css'
import { IoIosArrowBack } from "react-icons/io";
const Main = () => {
  const [cafelist, setcafelist] = useState([
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=robertav1_2_sidr",
      name: "1لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=robertav1_2_sidr",
      name: "2لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=robertav1_2_sidr",
      name: "3لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=robertav1_2_sidr",
      name: "4لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=robertav1_2_sidr",
      name: "5لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=robertav1_2_sidr",
      name: "6لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: 7,
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=robertav1_2_sidr",
      name: "7لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    }
  ]);

  // ############################################################################################################################
  const [favoritecafelist, setfavoritecafelist] = useState([ 
    {
      id: 1,
      image:'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph'
      ,name: "1لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: 2,
      image:'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph'
      ,name: "2لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: 3,
      image:'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph'
      ,name: "3لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: 4,
      image:'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph'
      ,name: "4لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: 5,
      image:'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph'
      ,name: "5لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: 6,
      image:'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph'
      ,name: "6لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },{
      id: 7,
      image:'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph'
      ,name: "7لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    }
  ]);
  const [displayCountbestcafe, setDisplayCountbestcafe] = useState(5);
  const [displayCountfavcafe, setDisplayCountfavcafe] = useState(5);

  const containerRefbestcafe = useRef(null);
  const containerReffavcafe = useRef(null);

  const handleShowMorebestcafe= () => {
    setDisplayCountbestcafe((prevCount1) => prevCount1 + 1);
  };
  const handleShowMorefavcafe= () => {
    setDisplayCountfavcafe((prevCount2) => prevCount2 + 1);
  };

  useEffect(() => {
    if (containerRefbestcafe.current) {
      containerRefbestcafe.current.scrollLeft = containerRefbestcafe.current.scrollWidth;
    }
  }, [cafelist]);

  useEffect(() => {
    if (containerReffavcafe.current) {
      containerReffavcafe.current.scrollLeft = containerReffavcafe.current.scrollWidth;
    }
  }, [favoritecafelist]);
  return (
    <div style={{ marginTop:'10px' , marginBottom:'60px' , height:`calc(100%-70px)`}}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      <p style={{ fontFamily: "IRANSansXBold", textAlign: "right", marginRight: "30px", marginTop: "30px", fontSize: '20px' , marginBottom:'0'}}>
        برترین ها
      </p>
      

      <div
        ref={containerRefbestcafe}
        style={{
          display: "flex",
          overflowX: "scroll",
          marginLeft: "20px",
          marginRight: "20px",
          width: `calc(100% - 40px)`,
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          
        }}
      >
        {cafelist.slice(0, displayCountbestcafe).reverse().map((item) => (
          <CafeObject
            key={item.id}
            image={item.image}
            name={item.name}
            location={item.location}
            score={item.score}
            style={{ flexShrink: 0 }}
          />
        ))}

      </div>

      
    </div>
    {displayCountbestcafe < cafelist.length && (
        <div  style={{position:'absolute' , top:'5%' , left:'5%' , display:'flex' , flexDirection:'row'}} onClick={handleShowMorebestcafe}>
          <IoIosArrowBack  style={{ fontFamily: "IRANSansXBold", fontSize: '10px', color: '#AAAA' , marginTop:'13px'}}/>
          <p style={{ fontFamily: "IRANSansXBold", textAlign: "left", marginLeft: "3px", fontSize: '10px', color: '#AAAA' }}>
          موارد بیشتر
          </p>
        </div>
        
    )}
    {/* the second part */}
    <div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between'}}>

    {displayCountfavcafe < favoritecafelist.length && (
        // style={{textAlign:'right', marginRight:'320px' , marginTop:'-300px', fontSize:'20px' , marginBottom:'0' , display:'flex' , flexDirection:'row'}}
        <div style={{display:'flex', flexDirection:'row' , position:'absolute' , left:'5%' , marginTop:'10px'}}  onClick={handleShowMorefavcafe}>
          <IoIosArrowBack  style={{ fontFamily: "IRANSansXBold", textAlign: "left", fontSize: '10px', color: '#AAAA'  , marginTop:'12px'}}/>
          <p  style={{ fontFamily: "IRANSansXBold", textAlign: "left", marginLeft:'3px', fontSize: '10px', color: '#AAAA'}}>
          موارد بیشتر
          </p>
        </div>
        
        )}
      <div style={{ display: "flex", flexDirection:'row', alignItems: "flex-end" , position:'absolute' , right:'5%' }}>
        <p style={{fontFamily:'IRANSansXBold', fontSize:'20px'}}>
        علاقه مندی ها
        </p>
        
      </div>
      </div>
        <div
          ref={containerReffavcafe}
          style={{
            marginTop:'40px',
            display: "flex",
            overflowX: "scroll",
            marginLeft: "20px",
            marginRight: "20px",
            width: `calc(100% - 40px)`,
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          {favoritecafelist.slice(0, displayCountfavcafe).reverse().map((item) => (
            <CafeObject
              key={item.id}
              image={item.image}
              name={item.name}
              location={item.location}
              score={item.score}
              style={{ flexShrink: 0 }}
            />
          ))}

        </div>
        
        
    
    </div>
  );
};

export default Main;