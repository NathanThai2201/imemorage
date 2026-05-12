import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Fisher-Yates shuffle (referenced from )
function shuffle(array) {
  let newArray = [...array];

  let currentIndex = newArray.length;

  while (currentIndex !== 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];

  }
  return newArray;
}

function App() {
  // temporary hardcode
  const [imageArray, setImageArray] = useState([
     
"https://images.unsplash.com/photo-1763507159330-7d05a8aa0c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1764268972884-d9cb970a1a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1764831685497-3095f33bada2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1768463851971-a813d5797341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1769006352025-1a429e69398f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1772885982770-59d1b7d0df81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1773085267084-4b09ba258636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1773489425315-2b7664fdb068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774023802543-77b1c0b85a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774199496664-a9690967be5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774273184279-2e0525893336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774286111329-3bdddc7d730e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774717530900-56b0bbf6197b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774871111697-c6bd90d74299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775029676739-86443af4010d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775162240286-10a9d729f84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775510978826-e95b14db6ae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775807346196-c12ab3c53d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775813240698-00793501786b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775883380001-9c71416a02fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775926235479-7e5663a1da9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776111463785-a6268bd14541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776148171599-f3b2f93b0be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776179342854-e3fdc7cc5da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776498534251-64152653c55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080", 
"https://images.unsplash.com/photo-1776716677611-dfab7ca366fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776726743389-3b57180f8b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776850344650-eff188096f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1777137583574-277fd6ede8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1618331833071-ce81bd50d300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzg0NjkzNjZ8&ixlib=rb-4.1.0&q=80&w=400",
    ]);
  const [userImageArray, setUserImageArray] = useState([shuffle([
     
"https://images.unsplash.com/photo-1763507159330-7d05a8aa0c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1764268972884-d9cb970a1a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1764831685497-3095f33bada2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1768463851971-a813d5797341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1769006352025-1a429e69398f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1772885982770-59d1b7d0df81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1773085267084-4b09ba258636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1773489425315-2b7664fdb068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774023802543-77b1c0b85a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774199496664-a9690967be5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774273184279-2e0525893336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774286111329-3bdddc7d730e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774717530900-56b0bbf6197b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1774871111697-c6bd90d74299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775029676739-86443af4010d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775162240286-10a9d729f84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775510978826-e95b14db6ae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775807346196-c12ab3c53d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775813240698-00793501786b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775883380001-9c71416a02fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1775926235479-7e5663a1da9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776111463785-a6268bd14541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776148171599-f3b2f93b0be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776179342854-e3fdc7cc5da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776498534251-64152653c55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080", 
"https://images.unsplash.com/photo-1776716677611-dfab7ca366fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776726743389-3b57180f8b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1776850344650-eff188096f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1777137583574-277fd6ede8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzc5NTA1NjV8&ixlib=rb-4.1.0&q=80&w=1080",
"https://images.unsplash.com/photo-1618331833071-ce81bd50d300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NDIxNDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzg0NjkzNjZ8&ixlib=rb-4.1.0&q=80&w=400",
    ]),[]]);

  //console.log("FIRST",imageArray,userImageArray);
  const fetchImageUrls = async () => {
        const accessKey = 'NUnYdcxM5FQOtF00QDzuIWjfYrHyR8up1TynlkVmmhc';
        const count = 30;
        const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`;

        try {
          const response = await fetch(url);
          if (!response.ok) {
                throw new Error("Failed to fetch image array");
            }
          const result = await response.json(); 
          var temporary_array = [];
          for (const item of result) {
              temporary_array.push(item.urls.small);
          }
    
          console.log("Fetched Data:", response); 

  
          setImageArray(temporary_array || []);
          const shuffled = shuffle(temporary_array);
          setUserImageArray([shuffled,[]] || [[],[]]);
        } catch (error) {
            console.error("Error fetching image array:", error);
        }
    };
  const validateResults = async () => {
    console.log(imageArray, userImageArray);
    const colors = [];
    for (var i = 0; i<30; i++){
      if (imageArray[i] === userImageArray[0][i]){
        colors.push('#48e87d');
      }else{
        colors.push('#e85555');
      }
    }
    setUserImageArray([userImageArray[0],colors])
  }
  return (
    <>
      <div className="container-imemorage">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            speed={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={true}
          >
            {imageArray.slice(0,30).map((image, index) => (
                          <SwiperSlide>
                          <div key={index} className="imemorage-memo-image-wrapper">
                              <img className="imemorage-memo-image" src={image} alt={index} />
                          </div>
                          </SwiperSlide>
                      ))}
          </Swiper>





        <div className="ImageContainerResults">
                    {
                    imageArray.slice(0,10).map((image, index) => (
                        <div key={index} className="imemorage-image-wrapper">
                            <img className="imemorage-image" src={image} alt={index} />
                        </div>
                    ))}
        </div>
        <div className="ImageContainerResults2">
                    {
                    userImageArray[0].slice(0,10).map((image, index) => (
                        <div key={index} className="imemorage-image-wrapper" style={{borderColor:userImageArray[1][index], border:"4px solid"}}>
                            <img className="imemorage-image" src={image} alt={index} />
                        </div>
                    ))}
        </div>
        <div className="ImageContainerResults">
                    {
                    imageArray.slice(10,20).map((image, index) => (
                        <div key={index} className="imemorage-image-wrapper">
                            <img className="imemorage-image" src={image} alt={index} />
                        </div>
                    ))}
        </div>
        <div className="ImageContainerResults2">
                    {
                    userImageArray[0].slice(10,20).map((image, index) => (
                        <div key={index} className="imemorage-image-wrapper" style={{borderColor:userImageArray[1][index+10], border:"4px solid"}}>
                            <img className="imemorage-image" src={image} alt={index} />
                        </div>
                    ))}
        </div>
        <div className="ImageContainerResults">
                    {
                    imageArray.slice(20,30).map((image, index) => (
                        <div key={index} className="imemorage-image-wrapper">
                            <img className="imemorage-image" src={image} alt={index} />
                        </div>
                    ))}
        </div>
        <div className="ImageContainerResults2">
                    {
                    userImageArray[0].slice(20,30).map((image, index) => (
                        <div key={index} className="imemorage-image-wrapper" style={{borderColor:userImageArray[1][index+20], border:"4px solid"}}>
                            <img className="imemorage-image" src={image} alt={index} />
                        </div>
                    ))}
        </div>
        <button onClick={() => validateResults()}>
          Validate results
        </button>
        <button onClick={() => fetchImageUrls()}>
          Start again with new images
        </button>
        <p>
        </p>
      </div>
    </>
  )
}

export default App
