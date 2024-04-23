import Header from "../components/Header";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      <Header />
      <div id="content">
        <Outlet />
      </div>
    </>
  );
}