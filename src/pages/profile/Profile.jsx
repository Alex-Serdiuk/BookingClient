import "./profile.css"
import Navbar from "../../components/navabar/Navbar";
// import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import { useNavigate } from "react-router-dom";
// import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import cloudinaryConfig from "../../cloudinary-config";
// import axios from "axios";
import { sha1 } from "crypto-hash";
import useApi from "../../hooks/useApi";

const Profile = () => {
  const [file, setFile] = useState("");
  // const location = useLocation();
  const { user } = useContext(AuthContext);
  const { cloudName, apiKey, apiSecret } = cloudinaryConfig;
  const { data, loading, error, get, put, cloudinaryFetch } = useApi(`/User/${user.id}`);
  const [info, setInfo] = useState(
    {}
   );
  // const navigate = useNavigate();
  // console.log(data);

  useEffect(() => {
    get();
  }, [get]);

  useEffect(() => {
    if (!loading && !error && data) {
      setInfo(data);
    }
  }, [data, loading, error])

  const handleChange = e =>{
    setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
  };

  const handleDelete = async (publicId) => {
    const timestamp = Date.now();
    const signature = await sha1(
      `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`
    );
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

    try {
      const response = await cloudinaryFetch(url, 'POST', {
        public_id: publicId,
        timestamp: timestamp,
        api_key: apiKey,
        signature: signature
      });
      console.log('Изображение удалено из Cloudinary:', response);
    } catch (error) {
      console.error('Не удалось удалить изображение:', error);
    }
  };

  const extractImageId = (url) => {
    // Знайти індекс першого входження "upload/"
   const firstIndex = url.indexOf("upload/");
   // Знайти індекс наступного входження "upload/" після першого
   const secondIndex = url.indexOf("upload/", firstIndex + 1);
   // Відрізати рядок з другого входження "upload/" до кінця
   let partialUrl = url.substring(secondIndex);
   // Знайти індекс останнього входження "."
   const lastIndex = partialUrl.lastIndexOf(".");
   // Відрізати розширення
   partialUrl = partialUrl.slice(0, lastIndex);
   return partialUrl;
 };

 const uploadImage = async (file) => {
  try {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");

    const response = await cloudinaryFetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      'POST',
      data
    );

    return response.url;
  } catch (error) {
    console.error("Ошибка при загрузке изображения:", error);
    throw error;
  }
};

const replaceImage = async (file, oldUrl) => {
  try {
    const publicId = extractImageId(oldUrl);
    await handleDelete(publicId);
    const url = await uploadImage(file);
    return url;
  } catch (error) {
    console.error("Ошибка при замене изображения:", error);
    throw error;
  }
};

  const handleClick = async e=> {
    e.preventDefault();
    try {
      let url;
      if (file) {
        if (info.img) {
          url = await replaceImage(file, info.img);
        } else {
          url = await uploadImage(file);
        }
      }

      const userUpdate = {
        ...info,
        img: url || info.img
      };

      await put(userUpdate);
    } catch (err) {
      console.log(err);
    }
  };

  

  
  return (
    <div>
      <Navbar/>
      {/* <Header type="list"/> */}
      {loading ? (
        "loading"
      ) : (
      <div className="profileContainer">
        <div className="profileWrapper">
          <div className="top">
            <h1>Profile</h1>
          </div>
          <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : data && data.img ? data.img : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="file">
                  Image: <FontAwesomeIcon icon={faFolderOpen} />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
            </div>
                <div className="formInput">
                  <label>UserName</label>
                  <input onChange={handleChange}
                    type="text"
                    placeholder="john_doe"
                    id="userName"
                    value={info.userName}
                  />
                </div>
                <div className="formInput">
                  <label>Email</label>
                  <input onChange={handleChange}
                    type="email"
                    placeholder="john_doe@gmail.com"
                    id="email"
                    value={info.email}
                  />
                </div>
                <div className="formInput">
                  <label>PhoneNumber</label>
                  <input onChange={handleChange}
                    type="text"
                    placeholder="+1 234 567 89"
                    id="phoneNumber"
                    value={info.phoneNumber}
                  />
                </div>
                <div className="formInput">
                  <label>Country</label>
                  <input onChange={handleChange}
                    type="text"
                    placeholder="USA"
                    id="country"
                    value={info.country}
                  />
                </div>
                <div className="formInput">
                  <label>City</label>
                  <input onChange={handleChange}
                    type="text"
                    placeholder="New York"
                    id="city"
                    value={info.city}
                  />
                </div>
                <div className="formInput">
                  <label>Old Password</label>
                  <input onChange={handleChange}
                    type="password"
                    id="password"
                    value={info.password}
                  />
                </div>
                <div className="formInput">
                  <label>New Password</label>
                  <input onChange={handleChange}
                    type="password"
                    id="newPassword"
                    value={info.newPassword}
                  />
                </div>
              
            <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
        </div>
        
       
      </div>)}
      <Footer/>
    </div>
  )
}

export default Profile;