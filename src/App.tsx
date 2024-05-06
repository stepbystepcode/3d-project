import ReactPlayer from "react-player";
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
              <img src={`/ori/${index + 1}.webp`} />
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
              <img src={`/pic/${index + 1}.webp`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div style={{ width: "33vw" }}>
          <ReactPlayer
            url="/video/video.m3u8"
            playing={true}
            playsinline={true}
            loop={true}
            width={"100%"}
            height={"100%"}
            muted={true}
          />
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
          <div className="flex h-[46vh]">
            <span className="p-2 indent-[2em] flex flex-col gap-2 overflow-y-scroll">
              <p>
                “合筑——城市空间仿真设计与数字互动平台”是一款集在线虚拟设计与发布、数字城市漫游、设计经验交流等为一体的互联网平台，可作为一种设计研究工具被建筑设计行业人员、高校建筑类专业师生及相关领域科研人员使用。与常见的设计软件不同，平台具备强大的分享和推广功能，设计师用户能以虚拟仿真场景形式发布设计方案，并可以对所有登录网站的访客和用户开放进行VR漫游和互动体验。以科普、娱乐功能为一体的方式服务广大社会公众，实现互联网时代设计师的全新价值。
              </p>
              <p>
                目前上线的是“太原市化肥厂改造设计”专题板块，设计师用户可以在登录后使用“在线设计”功能进行基于化肥厂现状的3D场景制作和发布，或上传设计方案图纸由网站专业技术团队代开发为虚拟场景并发布。本平台会吸取广大用户意见，持续改进优化，不断提升设计功能和场景仿真体验，得到业内人士的认可；不断推出城市更新涉及的各种类型空间的设计专题板块，吸引更广泛的关注并扩大影响力。在网站建设过程中，会积极寻求政府有关部门的支持，积极与知名互联网科技企业交流合作，大力引入虚拟现实、人工智能方面的先进技术和理念，朝着智慧城市、智慧设计的远大目标奋进。
              </p>
            </span>
            <img
              src="/images/3.jpg"
              className="object-cover rounded-lg transition-opacity duration-1000 min-w-[230px]"
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
