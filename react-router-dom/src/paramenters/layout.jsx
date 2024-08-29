import { Outlet, useNavigation } from "react-router-dom";

export const Layout = () => {
  const { state } = useNavigation();

  return (
    <>
      {state === "loading" ? <div role="loader">Loading</div> : null}
      <main>
        <Outlet />
      </main>
      <footer>{`${new Date().getFullYear()} (C)`}</footer>
    </>
  );
};
