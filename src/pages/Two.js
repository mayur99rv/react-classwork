function Two() {
  return (
    <>
      {/* // eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href="https://github.com/mayur99rv/react-classwork/blob/master/src/pages/Two.js"
        target="_blank"
        rel="noreferrer"
      >
        Code
      </a>
      <div>
        <h1
          style={{
            color: "violet",
            fontSize: "40px",
            textAlign: "center",
            marginTop: "10vh",
          }}
        >
          {" "}
          Hello, Welcome to React
          <br /> <br /> A beautiful image{" "}
        </h1>
        <br />
        <div style={{ width: "40%", borderRadius: "10px", margin: "0 auto" }}>
          <img
            style={{ width: "100%", borderRadius: "6%" }}
            src="./5.jpg"
            alt="castle"
          />
        </div>
      </div>
    </>
  );
}

export default Two;
