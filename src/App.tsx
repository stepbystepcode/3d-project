import BulletinList from "./components/BulletinList";
import NavList from "@/components/NavList.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function App() {
  return (
    <>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <img
                className="w-full h-[40vh] object-cover"
                src={`https://picsum.photos/2000/1000?${index}`}
                alt=""
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="flex flex-col gap-4">
          <span className="text-lg font-bold">最新公告</span>
          <BulletinList />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-lg font-bold">关于我们</span>
          <div className="flex">
            <p className="p-2">
              “城市空间仿真设计与数字互动平台”是B/S架构的虚拟仿真技术平台，主要为建筑学专业领域的工程师、设计师、高校师生及科研人员等，提供城市规划设计、建筑设计、工程设计方案的创作及研讨服务。
            </p>
            <img
              src="https://picsum.photos/id/182/150/180"
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-lg font-bold">导航</span> <NavList />
        </div>
      </div>
    </>
  );
}

export default App;
