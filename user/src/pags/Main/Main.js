import React, { useState, useEffect, useRef } from 'react';
import CafeObject from '../../Components/CafeObject/CafeObject';
import './Main.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
const Main = () => {
  const navigate = useNavigate();
  /* const cafelist=[
    {
      id: '1',
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=robertav1_2_sidr",
      name: "1لوتوس",
      location: "حکیم نظامی",
      score: 4.9,
    },
    {
      id: '2',
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
  ] */

  // ############################################################################################################################
  /* const favoritecafelist = [
    {
      id: 1,
      image:
        'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph',
      name: '1لوتوس',
      location: 'حکیم نظامی',
      score: 4.9,
    },
    {
      id: 2,
      image:
        'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph',
      name: '2لوتوس',
      location: 'حکیم نظامی',
      score: 4.9,
    },
    {
      id: 3,
      image:
        'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph',
      name: '3لوتوس',
      location: 'حکیم نظامی',
      score: 4.9,
    },
    {
      id: 4,
      image:
        'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph',
      name: '4لوتوس',
      location: 'حکیم نظامی',
      score: 4.9,
    },
    {
      id: 5,
      image:
        'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph',
      name: '5لوتوس',
      location: 'حکیم نظامی',
      score: 4.9,
    },
    {
      id: 6,
      image:
        'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph',
      name: '6لوتوس',
      location: 'حکیم نظامی',
      score: 4.9,
    },
    {
      id: 7,
      image:
        'https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=sph',
      name: '7لوتوس',
      location: 'حکیم نظامی',
      score: 4.9,
    },
  ]; */

  const [displayCountbestcafe, setDisplayCountbestcafe] = useState(5);
  const [displayCountfavcafe, setDisplayCountfavcafe] = useState(5);
  const [cafelist, setCafelist] = useState([]);
  const [favoritecafelist, setFavoritecafelist] = useState([]);

  const containerRefbestcafe = useRef(null);
  const containerReffavcafe = useRef(null);

  const getData = async () => {
    const result = await fetch('http://localhost:3000/api/cafes/getbest', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
    const response = await result.json();

    const result2 = await fetch('http://localhost:3000/api/cafes/getfavorites', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
    const response2 = await result2.json();
    console.log(response2);

    if (!response.success || !response2.success) {
      alert('خطا');
      setCafelist([]);
      setFavoritecafelist([]);
      return;
    }
    setCafelist(response.message);
    setFavoritecafelist(response2.message);
  };

  const handleShowMorebestcafe = () => {
    setDisplayCountbestcafe((prevCount1) => prevCount1 + 1);
  };
  const handleShowMorefavcafe = () => {
    setDisplayCountfavcafe((prevCount2) => prevCount2 + 1);
  };
  const handleclick = () => {
    window.history.back();
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (containerRefbestcafe.current) {
      containerRefbestcafe.current.scrollLeft =
        containerRefbestcafe.current.scrollWidth;
    }
  }, [cafelist]);

  useEffect(() => {
    if (containerReffavcafe.current) {
      containerReffavcafe.current.scrollLeft =
        containerReffavcafe.current.scrollWidth;
    }
  }, [favoritecafelist]);

  return (
    <div
      style={{
        marginTop: '10px',
        marginBottom: '60px',
        height: `calc(100%-70px)`,
      }}
    >
      <IoArrowBack
        style={{ position: 'fixed', top: '3%', left: '7%', color: '#37251B' }}
        size={20}
        onClick={handleclick}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <p
          style={{
            fontFamily: 'IRANSansXBold',
            textAlign: 'right',
            marginRight: '30px',
            marginTop: '30px',
            fontSize: '20px',
            marginBottom: '0',
            color: '#37251B',
          }}
        >
          برترین ها
        </p>

        <div
          ref={containerRefbestcafe}
          style={{
            display: 'flex',
            overflowX: 'scroll',
            marginLeft: '20px',
            marginRight: '20px',
            width: `calc(100% - 40px)`,
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          }}
        >
          {cafelist
            .slice(0, displayCountbestcafe)
            .reverse()
            .map((item) => (
              <CafeObject
                // key={index}
                // item={item}
                id={item.id}
                image={item.image}
                name={item.name}
                location={item.location}
                score={item.score}
              />
            ))}
        </div>
      </div>
      {displayCountbestcafe < cafelist.length && (
        <div
          style={{
            position: 'absolute',
            top: '5%',
            left: '5%',
            display: 'flex',
            flexDirection: 'row',
          }}
          onClick={handleShowMorebestcafe}
        >
          {/* <IoIosArrowBack  style={{ fontFamily: "IRANSansXBold", fontSize: '10px', color: '#AAAA' , marginTop:'13px'}}/> */}
          <p
            style={{
              fontFamily: 'IRANSansXBold',
              textAlign: 'left',
              marginLeft: '3px',
              fontSize: '10px',
              color: '#AAAA',
            }}
          >
            موارد بیشتر
          </p>
        </div>
      )}
      {/* the second part */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {displayCountfavcafe < favoritecafelist.length && (
          // style={{textAlign:'right', marginRight:'320px' , marginTop:'-300px', fontSize:'20px' , marginBottom:'0' , display:'flex' , flexDirection:'row'}}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              position: 'absolute',
              left: '5%',
              marginTop: '10px',
            }}
            onClick={handleShowMorefavcafe}
          >
            <p
              style={{
                fontFamily: 'IRANSansXBold',
                textAlign: 'left',
                marginLeft: '3px',
                fontSize: '10px',
                color: '#AAAA',
              }}
            >
              موارد بیشتر
            </p>
          </div>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            position: 'absolute',
            right: '5%',
          }}
        >
          <p
            style={{
              fontFamily: 'IRANSansXBold',
              fontSize: '20px',
              color: '#37251B',
            }}
          >
            علاقه مندی ها
          </p>
        </div>
      </div>
      <div
        ref={containerReffavcafe}
        style={{
          marginTop: '40px',
          display: 'flex',
          overflowX: 'scroll',
          marginLeft: '20px',
          marginRight: '20px',
          width: `calc(100% - 40px)`,
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}
      >
        {favoritecafelist
          .slice(0, displayCountfavcafe)
          .reverse()
          .map((item) => (
            <CafeObject
              id={item.id}
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
