import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const Geom = () => {
  const [angA, setAngA] = useState(5);
  const [ans, setAns] = useState("");

  const change = (e) => {
    setAns(e.target.value);
  };
  const random = (min, max) => {
    const max1 = max / 2;
    let r = Math.floor(Math.random() * max1);
    console.log("r", r);
    r = r * 2;
    if (r < min) r = min;
    if (r > max) r = max;
    return r;
  };
  const click = () => {
    const a = random(4, 80);
    setAngA(a);
  };
  const clickAns = () => {
    console.log(ans);
  };
  useEffect(() => {
    const a = random(1, 80);
    setAngA(a);
  }, []);
  return (
    <div className="container">
      <span>Дано - треугольник ABC, у которого AB = BC, </span>
      <br />
      <span>CK - биссектриса</span>
      <br />
      <span>A = {angA} град.</span>
      <br />

      <Form.Control
        type="text"
        placeholder="ответ"
        className="w-4"
        value={ans}
        onChange={change}
      />
      <Button variant="primary" onClick={clickAns} className="ml-2">
        Ответ
      </Button>
      <Button variant="success" onClick={click} className="mt-2">
        Еще
      </Button>
    </div>
  );
};

export default Geom;
