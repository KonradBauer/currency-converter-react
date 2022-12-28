import { Layout } from "./styled";
import useCurrentDate from "./useCurrentDate";

const Clock = () => {
  const date = useCurrentDate();

  return (
    <>
      <Layout>
        Dzisiaj jest{" "}
        {time.toLocaleDateString("pl", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        , {time.toLocaleTimeString()}
      </Layout>
    </>
  );
};

export default Clock;
