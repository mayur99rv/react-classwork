function Two() {
  return (
    <>
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
