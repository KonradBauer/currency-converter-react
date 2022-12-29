import { Layout } from "./styled";
import useCurrentDate from "./useCurrentDate";

const Clock = () => {
  const date = useCurrentDate();

  return (
    <>
      <Layout>
        Dzisiaj jest{" "}
        {date.toLocaleDateString("pl", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        , {date.toLocaleTimeString()}
      </Layout>
    </>
  );
};

export default Clock;
