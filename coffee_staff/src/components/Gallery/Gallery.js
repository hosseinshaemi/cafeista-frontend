import React, { useState , useEffect } from "react";
import { Box, ImageList, ImageListItem ,Button} from "@mui/material";
import { MdOutlineDelete } from "react-icons/md";
import "./Gallery.css";

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleDeleteClick = (event, image) => {
    event.stopPropagation();
    const updatedImages = uploadedImages.filter((item) => item !== image);
    setUploadedImages(updatedImages);
    
    fetch(`URL back/${image.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },

    })
      .then((response) => {

      })
      .catch((error) => {

      });
  };
  
  const handleImageUpload = (event) => {
    const files = event.target.files;
    const imageArray = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      const file = files[i];

      reader.onload = (e) => {
        const imgDataUrl = e.target.result;
        const newImage = {
          img: imgDataUrl,
          title: file.name,
        };
        imageArray.push(newImage);

        if (i === files.length - 1) {
          setUploadedImages((prevImages) => [...prevImages, ...imageArray]);
          fetch("URL back", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newImage),
          })
            .then((response) => {

            })
            .catch((error) => {

            });
        }
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {

    fetch("URL back")
      .then((response) => response.json())
      .then((data) => {

        setUploadedImages(data);
      })
      .catch((error) => {

      });
  }, []);


  const allImages = [ ...uploadedImages];

  return (
   <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", alignItems:"center" }}>
     <Box sx={{ width: "100%", height: "90%", overflowY: "scroll" , "::-webkit-scrollbar": {
      display: "none"
    }}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {allImages.map((image, index) => (
          <ImageListItem
            key={index}
            onMouseEnter={() => handleMouseEnter(image)}
            onMouseLeave={handleMouseLeave}
            sx={{
              position: "relative",
              cursor: "default",
              overflow: "hidden",
            }}
          >
            <img src={image.img} alt={image.title} loading="lazy" />
            {hoveredImage === image && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: 8,
                  boxSizing: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <MdOutlineDelete
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: "5px",
                    background: "#ffffff63",
                    borderRadius: "10px",
                    padding: "3px",
                    cursor: "pointer",
                  }}
                  size={20}
                  color="#fff"
                  className="delete-icon"
                  onClick={(event) => handleDeleteClick(event, image)}
                />
              </Box>
            )}
          </ImageListItem>
        ))}
      </ImageList>
     
    </Box> 
    <label htmlFor="upload-image" style={{ display: "inline-block", margin: "16px 0" }}>
        <Button variant="contained" component="span" style={{backgroundColor:"#eb966a"}}>
          Upload Image
        </Button>
        <input
          id="upload-image"
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </label>
   </div>
  );
};

export default Gallery;
