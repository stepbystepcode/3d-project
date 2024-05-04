import ReactPlayer from 'react-player'
import BulletinList from "./components/BulletinList";
import NavList from "@/components/NavList.tsx";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";

function App() {
  return (
    <div>
    <div className="flex">
      <Swiper
        className="flex-1"
        effect={"fade"}
        autoplay={{ delay: 2500 }}
        loop={true}
        modules={[EffectFade, Autoplay]}
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <SwiperSlide key={index}>
            <img src={`/ori/${index+1}.webp`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="flex-1"
        effect={"fade"}
        autoplay={{ delay: 2500 }}
        loop={true}
        modules={[EffectFade, Autoplay]}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index}>
            <img src={`/pic/${index+1}.webp`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{width:'33vw'}}>
      <ReactPlayer url='/video/video.m3u8' playing={true} playsinline={true} loop={true} width={'100%'} height={'100%'} muted={true} />
</div>
      </div>
      {/* <img
                id="carousel"
                className="w-full h-[40vh] object-cover"
                src={`https://picsum.photos/2000/1000?${1}`}
                alt=""
              /> */}
      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="flex flex-col gap-4">
          <span className="text-lg font-bold">最新公告</span>
          <BulletinList />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-lg font-bold">平台简介</span>
          <div className="flex">
            <p className="p-2">
              “城市空间仿真设计与数字互动平台”是B/S架构的虚拟仿真技术平台，主要为建筑学专业领域的工程师、设计师、高校师生及科研人员等，提供城市规划设计、建筑设计、工程设计方案的创作及研讨服务。
            </p>
            <img
              src="182-150x180.jpg"
              className="rounded-lg transition-opacity duration-1000"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-lg font-bold">导航</span> <NavList />
        </div>
      </div>
    </div>
  );
}

export default App;
